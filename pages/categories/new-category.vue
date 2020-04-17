<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div>
        <v-card color="primary" class="category">
          <v-card-title class="headline">
            <textarea
              v-model="categoryData.title"
              class="title"
              placeholder="タイトルを入力"
            />
          </v-card-title>
          <v-card-text>
            <input
              id="ref-image"
              ref="file"
              type="file"
              multiple
              accept="image/jpeg, image/png"
              @change="inputImage()"
            />
            <label for="ref-image" class="label-ref-image">
              + サムネイルを画像設定する
            </label>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" @click="uploadCategory()">
              アップロードする
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    categoryData: {
      title: ''
    }
  }),
  methods: {
    inputImage() {
      const imageFile = this.$refs.file.files[0]
      const imageUrl = window.URL.createObjectURL(imageFile)
      // アップロード用のファイルデータ
      this.rawImageFile = imageFile
      // 投稿ページ用のサムネイル画像URL
      this.thumbnailImageUrl = imageUrl
    }
  },
  handleClick() {
    this.isLoading = true
    this.isDisabled = true
    console.log('clicked!!')
    this.isLoading = false
    this.isDisabled = false
  }
}
</script>
