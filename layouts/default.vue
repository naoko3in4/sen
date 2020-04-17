<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <!-- modal -->
      <v-row justify="center">
        <v-dialog v-model="dialogOpen" persistent max-width="290">
          <template v-slot:activator="{ on }">
            <v-row justify="space-around">
              <v-btn
                absolute
                dark
                fab
                top
                right
                color="primary"
                class="modal-trigger"
                v-on="on"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-row>
          </template>
          <v-card>
            <v-card-title class="headline">メンバーを追加する</v-card-title>
            <v-card-text>
              <label for="名前">
                <input
                  v-model="formData.name"
                  type="text"
                  placeholder="名前を入力"
                />
              </label>
              <label for="ふりがな">
                <input
                  v-model="formData.furigana"
                  type="text"
                  placeholder="ふりがなを入力"
                />
              </label>
              <label for="エピソード">
                <input
                  v-model="formData.episode"
                  type="text"
                  placeholder="エピソードを入力"
                />
              </label>
              <label for="名前">
                <input
                  v-model="formData.category"
                  type="text"
                  placeholder="カテゴリを入力"
                />
              </label>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialogOpen = false">
                やめる
              </v-btn>
              <v-btn color="primary" text @click="postMember()">
                登録
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> </v-row
      ><!-- modal -->
      <p class="footer-space"></p>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from '../plugins/axios'

export default {
  name: 'Default',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Categories',
          to: '/categories'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: ' Sen - for special encounters with people -',
      formData: {
        name: null,
        furigana: null,
        episode: null,
        category: null
      },
      dialogOpen: false,
      rawImageFile: null
    }
  },
  methods: {
    async postMember() {
      const res = await axios.post('https://sen.microcms.io/api/v1/sen', {
        ...this.formData
      })
      console.log(res)
      this.dialogOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-space {
  height: 20px;
}
</style>
