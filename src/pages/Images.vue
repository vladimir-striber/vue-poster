<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page padding>
  <p class="q-mb-xl">Images</p>

  <q-list class="row q-pt-md">
    <q-item v-for="(image, index) in images" :key="index" class="col-4 q-gutter-md wrap">

      <div class="image__wrapper q-ma-none">
        <img :src="image.__img.src"  alt="image" width="100%" height="100%" class="image q-ma-none"/>
        <div class="image__overlay">
          <div class="image__actions">
            <q-btn
                round
                color="primary"
                icon="add"
                size="8px"
                class="absolute-top-left q-ma-xs image__makePoster"
                @click="testFile(image, index)"
            >
              <q-tooltip>Make a poster</q-tooltip>
            </q-btn>

            <q-btn round color="primary" icon="close" size="8px" class="absolute-top-right q-ma-xs image__delete" @click="deleteImage(index)" />
          </div>
        </div>

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
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {
    testFile (image, index) {
      console.log(image, index, 'image & index')
      image.selectedFile.capture = `test capture for ${index}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/quasar.variables.scss";

  .image__overlay {
    display: none;
  }

  .image__wrapper {
    position: relative;
    transition: ease-in-out 2s;
    &:hover {
      .image__overlay {
        display: block;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

</style>
