<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div v-for="(member, key) in members" :key="key">
        <v-card class="member-box">
          <v-layout justify-center>
            <v-card-title class="headline text-center">
              {{ member.name }}
            </v-card-title>
          </v-layout>
          <v-layout justify-center>
            <v-avatar class="text-center">
              <img :src="member.icon_url" alt="アイコン" class="member-icon" />
            </v-avatar>
          </v-layout>
          <v-card-text class="text-center">
            <p>メモ：{{ member.episode }}</p>
            <p>登録：{{ member.posted_at.substring(0, 10) }}</p>
          </v-card-text>
        </v-card>
      </div>
      <!-- modal -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-row justify="space-around">
              <v-btn color="primary" dark class="modal-trigger" v-on="on"
                >+Add</v-btn
              >
            </v-row>
          </template>
          <v-card>
            <v-card-title class="headline">メンバーを追加する</v-card-title>
            <v-card-text>
              <label for="名前">①</label>
              <p><input type="text" placeholder="名前を入力" /></p>
              <label for="メモ">②</label>
              <p><input type="text" placeholder="メモを入力" /></p>
              <label for="ref-image" class="label-ref-image">
                ③ + 画像設定する
              </label>
              <p>
                <input
                  id="ref-image"
                  ref="file"
                  type="file"
                  multiple
                  accept="image/jpeg, image/png"
                  @change="inputImage()"
                />
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialog = false">やめる</v-btn>
              <v-btn color="primary" text @click="dialog = false">登録</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> </v-row
      ><!-- modal -->
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import { db, storage } from '~/plugins/firebase'

const membersCollection = db.collection('members')
const thumbnailStorageRef = storage.ref('thumbnails')

export default {
  name: 'Room',
  async asyncData({ query }) {
    return await membersCollection
      .doc(query.id)
      .get()
      .then((doc) => {
        const data = doc.data()
        const articleData = JSON.parse(data.article)
        data.article = articleData
        return {
          member: data
        }
      })
  },
  data: () => ({
    dialog: false,
    rawImageFile: null
  }),
  computed: {
    ...mapState('room', ['members']),
    getrooms() {
      return this.members
    }
  },
  // methods: {
  //   ...mapActions('room', ['initRooms'])

  // }
  methods: {
    inputImage() {
      const imageFile = this.$refs.file.files[0]
      const imageUrl = window.URL.createObjectURL(imageFile)
      // アップロード用のファイルデータ
      this.rawImageFile = imageFile
      // 投稿ページ用のサムネイル画像URL
      this.post.thumbnail_photo_url = imageUrl
    },
    async uploadThumbnailImage(data) {
      const thumbnailRef = thumbnailStorageRef.child(this.post.id)
      await thumbnailRef.put(data).then((snapshot) => {
        console.log(`upload success!!: ${snapshot.state}`)
      })
      await thumbnailRef.getDownloadURL().then((url) => {
        this.post.thumbnail_photo_url = url
      })
    }
    // async getArticleData() {
    //   await this.editor.save().then(data => {
    //     this.post.article = JSON.stringify(data.blocks)
    //   })
  },
  async updatePost() {
    // 1, サムネイル画像の変更があったら、ファイルをアップロードする
    if (this.rawImageFile) {
      await this.uploadThumbnailImage(this.rawImageFile)
    }

    // 2, Editor.js のデータを取得
    await this.getArticleData()

    // 3, ポストデータを Firebase にアップする
    db.collection('posts')
      .doc(this.post.id)
      .update(this.post)
      .then(() => {
        console.log(`update success!! post ID: ${this.post.id}`)
        // 今後マイポスト管理ページに遷移する
        // this.$router.push('/my-posts')
      })
      .catch((e) => {
        console.error(e)
      })
  },
  handleClick() {
    // this.$router.push('/my-posts')
  }
}
</script>

<style lang="scss" scoped>
.member-icon {
  width: 90px;
}

.member-box {
  margin-bottom: 20px;
}

.fixed-btn {
  position: fixed;
  top: 0;
  right: 0;
}

.modal-trigger {
  border-radius: 7%;
  margin-bottom: 10px;
}
</style>
