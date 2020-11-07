<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <p>Images</p>

    <q-uploader
        @added="fileAdded"
        url="http://localhost:8080"
        accept=".jpg, .pdf, image/*, .png"
        color="teal"
        flat
        bordered
        style="max-width: 300px;"
    >
      <template v-slot:header="scope">
        <div class="row no-wrap items-center q-pa-smq-gutter-xs">
          <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
            <q-uploader-add-trigger />
            <q-tooltip>Select image</q-tooltip>
          </q-btn>
          <q-btn v-if="scope.canUpload" icon="image" round dense flat @click="uploadFile(); scope.removeQueuedFiles()">
            <q-tooltip>Upload to the image gallery</q-tooltip>
          </q-btn>
        </div>

      </template>

    </q-uploader>

    <q-list>
      <q-item v-for="(image, index) in images" :key="index" class="col-4">
        <img :src="image.src" alt="image">
      </q-item>
    </q-list>
  </q-page>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Index',
  data () {
    return {
      // images: [],
      selectedFile: ''
      // isUploaded: false
    }
  },

  computed: {
    // images() {
    //   return this.$store.getters['images/images']
    // }
    ...mapGetters('images', ['images'])
  },

  methods: {
    fileAdded (files) {
      this.selectedFile = files[0].__img
      // this.isUploaded = true
      console.log(files, 'files')
    },
    uploadFile () {
      // console.log(this.selected_file, 'selected_file')
      this.images.push(this.selectedFile)
      this.emit('emitImages', {
        images: this.images
      })
      console.log(this.images, 'images')
    }
  }
}
</script>

<style scoped>

</style>
