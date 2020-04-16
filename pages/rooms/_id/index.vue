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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Room',
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('room', ['members']),
    getrooms() {
      return this.members
    }
  },
  methods: {
    ...mapActions('room', ['initRooms'])
    // goToNewMemberPage() {
    //   this.$router.push({ path: `rooms/new-mem` })
    // }
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
