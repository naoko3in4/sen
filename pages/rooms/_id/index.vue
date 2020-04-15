<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div v-for="(room, key) in feedRooms" :key="key">
        <div v-for="(member, item) in room.members" :key="item">
          <v-card>
            <v-card-title class="headline">
              <!-- {{ room.members[0].name }} -->
              {{ member.name }}
            </v-card-title>
            <v-card-text>
              <p>
                {{ member.episode }}
              </p>
              <p>
                <img :src="member.icon_url" alt="アイコン" />
              </p>
              <p>
                {{ member.posted_at }}
              </p>
              <hr class="my-3" />
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Room',
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
