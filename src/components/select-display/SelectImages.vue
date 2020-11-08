<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-uploader
  @added="fileAdded"
  url="http://localhost:8080"
  accept=".jpg, .pdf, image/*, .png"
  color="teal"
  flat
  bordered
  style="max-width: 300px;"
  class="q-mb-md"
>
<template v-slot:header="scope">
  <div class="row no-wrap items-center q-pa-xs justify-between">
    <span v-if="scope.canAddFiles" class="q-ml-xs block">Select an image</span>
    <q-btn v-if="scope.canAddFiles" type="a" icon="add_box" round dense flat>
      <q-uploader-add-trigger />
      <q-tooltip>Select image</q-tooltip>
    </q-btn>
    <span v-if="scope.canUpload" class="q-ml-xs block">Save selected image</span>
    <q-btn v-if="scope.canUpload" icon="check" round dense flat @click="uploadFile({ selectedFile: selectedFile }); scope.removeQueuedFiles()">
      <q-tooltip>Upload to the image gallery</q-tooltip>
    </q-btn>
  </div>
</template>

</q-uploader>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SelectImages',
  data () {
    return {
      selectedFile: ''
    }
  },

  methods: {
    ...mapActions('images', ['uploadFile']),
    fileAdded (files) {
      // this.selectedFile = files[0].__img
      this.selectedFile = files[0]
    }

  }
}
</script>

<style scoped>

</style>
