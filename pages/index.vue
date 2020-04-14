<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <!-- <logo />
        <vuetify-logo /> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          人と人との出会いのために。再会したあのひとの、「名前」思い出せますか？
        </v-card-title>
        <v-card-text>
          <p>
            偶然再会した、懐かしい知人。SNSの連絡先は交換してなかったけど、たまたま会えて嬉しくなって、昔話に花が咲いたり。なのに
            肝心の「名前」が出てこなくって、話半分うわの空になることないですか？そんな時にも事前に登録したメモさえあれば、
            話しながらさりげなく、目の前の知人の名前をチェックできます。
          </p>
          <p>
            使い方は簡単。「Rooms」内で、学校や職場など、自分オリジナルカテゴリーのルームを作って、出会った人を登録するだけ。
            一言メモを入力したり、SNSの情報を後から紐付けることもできます。
          </p>
          <p>
            さっそくルームを確認してみましょう。
          </p>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/rooms">
            ルームをチェック
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  }
}
</script>
