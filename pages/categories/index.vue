<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div
        v-for="(category, key) in feedCategories"
        :key="key"
        @click="goToCategoryPage(category.id)"
      >
        <v-card color="primary" class="category">
          <v-card-title class="headline">
            {{ category.category_name }}
          </v-card-title>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapState('category', ['feedCategories'])
  },
  methods: {
    goToCategoryPage(categoryId) {
      this.$router.push({
        path: `categories/${categoryId}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-bottom: 20px;
}
</style>
