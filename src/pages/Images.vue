<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page class="q-px-lg q-py-none">
  <h1>Images</h1>

  <div class="container">

    <div v-for="(image, index) in images" :key="index" class="box">

        <q-img :src="image.__img.src" alt="image" width="100%" height="100%" class="image q-ma-none"/>

        <div class="image__overlay">
          <div class="image__actions">

            <q-btn
                round
                color="primary"
                icon="remove_red_eye"
                size="xl"
                class="absolute-center"
                @click.stop="openFullScreenImgDialog(image.__img.src)"
            />

            <q-btn
                round
                color="primary"
                icon="close"
                size="sm"
                class="absolute-top-right q-ma-sm"
                @click="openDeleteConfirmDialog(index)"
            />
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

      <!--Dialog for delete album confirmation-->
      <q-dialog v-model="confirm">
        <q-card>
          <q-card-section class="row items-center">
            <span>Are you sure you want to delete this image?</span>
          </q-card-section>

          <q-card-actions align="right" class="row q-pa-md">
            <q-btn
                flat
                label="Cancel"
                color="primary"
                v-close-popup
                no-caps
                class="text-grey-8 col-grow"
            />
            <q-btn
                label="Delete"
                color="primary"
                v-close-popup
                no-caps
                class="col-8"
                @click="deleteImage(deleteImageIndex); confirm = false"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
  </div>

</q-page>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Images',
  data () {
    return {
      dialog: false,
      maximizedToggle: true,
      imageSrc: '',
      confirm: false,
      deleteImageIndex: ''
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {
    ...mapActions('images', ['deleteImage']),
    openFullScreenImgDialog (imageSrc) {
      this.dialog = true
      this.imageSrc = imageSrc
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deleteImageIndex = index
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
      &:hover {
        background-color: #ddd;
        transform: scale(1.03);
        cursor: pointer;
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
      img {
        max-width: 100%;
      }
    }
  }

  .imageDialog {
    width: 70%;
  }

  .image__overlay {
    transition: 1s;
    display: none;
  }

</style>
