<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <template v-for="(category, key) in CATEGORY_NAMES">
        <div :key="key" @click="goToCategoryPage(key)">
          <v-card color="primary" class="category">
            <v-layout justify-center>
              <v-card-title class="headline">
                {{ category }}
              </v-card-title>
            </v-layout>
          </v-card>
        </div>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
import CATEGORY_NAMES from '~/const/category_name'

export default {
  name: 'Category',
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    CATEGORY_NAMES: () => CATEGORY_NAMES
  },
  methods: {
    goToCategoryPage(key) {
      this.$router.push({
        path: `categories/${key}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
}
</style>
