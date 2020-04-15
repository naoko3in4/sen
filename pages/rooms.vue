<!-- <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        &#8220;ここに複数へやつくる&#8221;
        <footer>
          <small>
            <em>&mdash;よてい</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout> -->

<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <!-- <logo />
        <vuetify-logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          I株式会社
        </v-card-title>
        <v-card-text>
          <p>
            {{ feedRooms }}
          </p>
          <p>
            ひとことメモ
          </p>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/rooms">
            メンバーをチェック
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('room', ['feedRooms']),
    getrooms() {
      console.log(this.feedRooms)
      return true
    }
  }
}
</script>
