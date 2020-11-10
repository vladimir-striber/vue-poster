<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="row justify-center q-my-lg">
    <div class="col col-md-6 ">
      <q-uploader
          @added="fileAdded"
          url="http://localhost:8080"
          accept=".jpg, .pdf, image/*, .png"
          multiple
          batch
          color="secondary"
          flat
          bordered
          class="q-mb-md col col-md-6 uploader bg-grey-2"

      >
        <template v-slot:header="scope">
          <div class="row no-wrap items-center q-pa-xs justify-between selectionHeader">
            <q-btn all-pointer-events v-if="scope.canAddFiles" flat no-caps>
              <q-uploader-add-trigger />
              <q-icon name="add_box" class="q-mr-xs"></q-icon>
              <span>Select</span>
            </q-btn>
            <q-btn v-if="scope.canUpload" @click="uploadFiles({ selectedFiles: selectedFiles }); scope.removeQueuedFiles()" no-caps color="primary">
              <q-icon name="check" class="q-mr-xs"></q-icon>
              <span>Save</span>
            </q-btn>
          </div>
        </template>

      </q-uploader>
    </div>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SelectImages',
  data () {
    return {
      selectedFiles: ''
    }
  },

  methods: {
    ...mapActions('images', ['uploadFiles']),
    fileAdded (files) {
      // this.selectedFiles = files[0].__img
      this.selectedFiles = files
      // console.log(files, 'files')
    }

  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/quasar.variables";

  .selectionHeader:hover {
    cursor: pointer;
  }

  .uploader {
    width: 100%;
    max-width: 100% !important;

    .q-uploader__header > div {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: $width-sm){
        flex-direction: row;
      }
      button {
        width: 100%;
        height: 48px;
      }
    }
  }

</style>
