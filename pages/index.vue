<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline">
          久しぶりに再会したあのひとの、「名前」思い出せますか？
        </v-card-title>
        <v-card-text>
          <p>
            偶然再会した、懐かしい知人。SNSの連絡先は交換してなかったけど、たまたま会えて嬉しくなって、昔話に花が咲いたり。なのに
            肝心の「名前」が出てこなくって、話半分うわの空になることないですか？そんな時にも事前に登録したメモさえあれば、
            話しながらさりげなく、目の前の知人の名前をチェックできます。
          </p>
          <p>
            使い方は簡単。「Categories」内で、学校や職場など、自分オリジナルカテゴリーのルームを作って、出会った人を登録するだけ。
            一言メモを入力したり、SNSの情報を後から紐付けることもできます。
          </p>
          <p>
            さっそくカテゴリーを確認してみましょう。
          </p>
          <hr class="my-3" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/categories">
            カテゴリーをチェック
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const res = await axios.get('https://sen.microcms.io/api/v1/sen', {
      headers: {
        'X-API-KEY': 'ddc2c6b9-fac7-4ce5-85a1-3f44b75cc2b8'
      }
    })
    console.log('jfjfjfj')
    console.log(res)
  }
}
</script>
