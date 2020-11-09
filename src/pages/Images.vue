<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page class="q-px-lg q-py-none">
  <h1>Images</h1>
  <div class="container">
    <div v-for="(image, index) in images" :key="index" class="box">

        <q-img :src="image.__img.src" @click.stop="openFullScreenImgDialog(image.__img.src)"  alt="image" width="100%" height="100%" class="image q-ma-none"/>
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

      <!--dialog for full screen image on image click-->
      <q-dialog v-model="dialog" full-width full-height class="imageDialog">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div></div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <q-img :src="imageSrc"></q-img>
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>
  </div>

</q-page>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Images',
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      imageSrc: ''
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {
    openFullScreenImgDialog (imageSrc) {
      this.dialog = true
      this.imageSrc = imageSrc
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/quasar.variables.scss";
  @import "../css/fonts.scss";

  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: $montserrat-bold;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    columns: 1;
    column-gap: 8px;
    @media screen and (min-width: $width-sm) {
      columns: 2;
    }
    @media screen and (min-width: $width-md) {
      columns: 3;
    }
    @media screen and (min-width: $width-xl) {
      columns: 4;
    }
    .box {
      width: 100%;
      margin: 0 0 8px;
      padding: 4px;
      background-color: $light-e;
      overflow: hidden;
      break-inside: avoid;
      transition: 0.2s;
      &:hover {
        background-color: #ddd;
        transform: scale(1.03);
        cursor: pointer;
      }
      img {
        max-width: 100%;
      }
    }
  }

  .imageDialog {
    width: 70%;
  }

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
