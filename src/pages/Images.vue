<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page padding>
  <p>Images</p>

  <q-list class="row">
    <q-item v-for="(image, index) in images" :key="index" class="col-4 q-gutter-md wrap">

      <div class="image-wrapper" @mouseover="imageOverlay = true" @mouseleave="imageOverlay = false">
        <img :src="image.selectedFile.__img.src"  alt="image" width="100%" height="100%" class="image q-ma-none"/>

        <div v-if="imageOverlay" class="image__overlay">
          <q-btn round color="primary" icon="remove_red_eye" />
        </div>
      </div>

      <div class="q-pa-md q-gutter-sm absolute-top-right">
        <q-btn round color="primary" icon="close" size="8px" @click="deleteImage(index)" />
      </div>

    </q-item>
  </q-list>

</q-page>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Images',
  data () {
    return {
      imageOverlay: false
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "../css/quasar.variables.scss";

  .image-wrapper {
    position: relative;
  }

  .image__overlay {
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

</style>
