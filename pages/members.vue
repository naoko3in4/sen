<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <div v-for="(room, key) in feedRooms" :key="key">
        <div v-for="(member, index) in room.members" :key="index">
          <v-card>
            <v-card-title class="headline">
              {{ member.name }}
            </v-card-title>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" nuxt to="/rooms">
                ルーム一覧に戻る
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('room', ['feedRooms']),
    getRooms() {
      console.log(this.feedRooms)
      return true
    }
  }
}
</script>
