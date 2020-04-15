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
          <!-- <v-card-actions>
            <v-spacer />
          </v-card-actions> -->
        </v-card>
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

<style lang="scss" scoped>
.category {
  margin-bottom: 20px;
}
</style>
