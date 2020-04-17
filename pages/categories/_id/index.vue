<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <template v-for="(member, key) in members">
        <v-card :key="key" class="member-box">
          <v-layout justify-center>
            <v-card-title class="headline text-center">
              {{ member.name }}
            </v-card-title>
          </v-layout>
          <v-card-text class="text-center">
            <p>メモ：{{ member.episode }}</p>
            <p>登録：{{ member.createdAt.substring(0, 10) }}</p>
          </v-card-text>
        </v-card>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'Category',
  async asyncData() {
    const res = await axios.get('https://sen.microcms.io/api/v1/sen', {
      params: {
        filters: 'category[equals]職場'
      }
    })
    return {
      members: res.data.contents
    }
  },
  methods: {
    inputImage() {},
    handleClick() {}
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
