<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div>
        <v-card color="primary" class="category">
          <v-card-title class="headline">
            <textarea
              v-model="roomData.title"
              class="title"
              placeholder="タイトルを入力"
            />
          </v-card-title>
          <v-card-text>
            <input
              id="ref-image"
              ref="file"
              type="file"
              multiple
              accept="image/jpeg, image/png"
              @change="inputImage()"
            />
            <label for="ref-image" class="label-ref-image">
              + サムネイルを画像設定する
            </label>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="uploadRoom()">
              アップロードする
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import firebase, { db, storage } from '~/plugins/firebase'

const thumbnailStorageRef = storage.ref('thumbnails')

export default {
  data: () => ({
    roomData: {
      title: ''
    }
  }),
  computed: {
    ...mapState({
      roomId: (store) => store.room.roomData.id
    })
  },
  methods: {
    inputImage() {
      const imageFile = this.$refs.file.files[0]
      const imageUrl = window.URL.createObjectURL(imageFile)
      // アップロード用のファイルデータ
      this.rawImageFile = imageFile
      // 投稿ページ用のサムネイル画像URL
      this.thumbnailImageUrl = imageUrl
    },
    async uploadThumbnailImage(data) {
      const thumbnailRef = thumbnailStorageRef.child(this.roomId)
      await thumbnailRef.put(data).then((snapshot) => {
        console.log(`upload success!!: ${snapshot.state}`)
      })
      await thumbnailRef.getDownloadURL().then((url) => {
        this.roomData.thumbnail_photo_url = url
      })
    },
    // async getArticleData() {
    //   await this.editor.save().then(data => {
    //     this.postData.article = JSON.stringify(data.blocks)
    //   })
    // },
    async uploadRoom() {
      this.isLoading = true

      if (this.isDisabled) {
        return
      }
      this.isDisabled = true

      // 1, サムネイル画像をアップロードする
      await this.uploadThumbnailImage(this.rawImageFile)

      // 2, Editor.js のデータを取得
      // await this.getArticleData()

      // 3, ポストデータを Firebase にアップする
      const requestRoomData = {
        id: this.roomId,
        author: {
          uid: this.user.uid,
          name: this.user.displayName,
          icon_url: this.user.photoURL
        },
        title: this.postData.title,
        thumbnail_photo_url: this.postData.thumbnail_photo_url,
        audio_url: this.audioUrl,
        // article: this.postData.article,
        // likes: [],
        posted_at: firebase.firestore.FieldValue.serverTimestamp()
      }

      db.collection('rooms')
        .doc(this.roomId)
        .set(requestRoomData)
        .then(() => {
          this.isLoading = false
          this.isDisabled = false
          console.log(`success!! room ID: ${this.roomId}`)
          // 今後マイポスト管理ページに遷移する
          // this.$router.push('/my-posts')
        })
        .catch((e) => {
          console.error(e)
        })
    },
    handleClick() {
      this.isLoading = true
      this.isDisabled = true
      console.log('clicked!!')
      this.isLoading = false
      this.isDisabled = false
    }
  }
}
</script>
