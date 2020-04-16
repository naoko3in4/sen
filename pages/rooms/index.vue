<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div
        v-for="(room, key) in feedRooms"
        :key="key"
        @click="goToRoomPage(room.id)"
      >
        <v-card color="primary" class="category">
          <v-card-title class="headline">
            {{ room.room_name }}
          </v-card-title>
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
            <v-card-title class="headline">ルームを追加する</v-card-title>
            <v-card-text>
              <label for="名前">項目</label>
              <p><input type="text" placeholder="ルーム名を入力" /></p>
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
    ...mapState('room', ['feedRooms']),
    getrooms() {
      console.log(this.feedRooms)
      return true
    }
  },
  methods: {
    ...mapActions('room', ['initRooms']),
    goToRoomPage(id) {
      this.$router.push({ path: `rooms/${id}` })
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-bottom: 20px;
}
</style>
