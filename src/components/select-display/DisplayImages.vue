<template>
  <div>
    <q-list bordered v-if="images.length > 0">
      <q-item v-for="(image, index) in images" :key="index" clickable v-ripple>

        <q-item-section thumbnail class="q-pl-sm">
          <img :src="image.selectedFile.__img.src" alt="image">
        </q-item-section>
        <q-item-section>{{ image.selectedFile.name }} / {{ image.selectedFile.__sizeLabel }}</q-item-section>
        <div class="q-pa-md q-ma-none q-gutter-sm absolute-right row items-center">
          <q-btn
              color="secondary"
              size="8px"
              class="q-ma-xs image__makePoster"
              @click.stop="openCreateDialog()"
          >
            Create a poster
          </q-btn>
          <q-btn
              round
              color="red-6"
              icon="close"
              size="8px"
              @click="deleteImage(index)"
              class="q-ma-none"
          />
        </div>

        <!--Dialog for poster create-->
        <q-dialog v-model="dialog" class="posterDialog">
          <q-card class="my-card posterDialog__card">
            <q-img :src="image.selectedFile.__img.src"></q-img>

            <q-card-section class="q-pt-none">
              <q-input v-model="title" label="Title" />
              <q-input v-model="caption" label="Caption" />
            </q-card-section>

            <q-card-actions align="right">
              <q-btn @click="uploadPoster({image: image, title: title, caption: caption})" style="width: 100px" flat color="secondary" label="Create" class="text-capitalize"></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

      </q-item>

    </q-list>

    <!--<PosterCreate ref="PosterCreate" :dialogImage="dialogImage" />-->

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import PosterCreate from '../posters/PosterCreate'
export default {
  name: 'DisplayImages',
  // components: { PosterCreate },
  data () {
    return {
      dialog: false,
      title: '',
      caption: ''
    }
  },
  computed: {
    ...mapGetters('images', ['images']),
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('images', ['deleteImage']),
    ...mapActions('posters', ['uploadPoster']),
    openCreateDialog () {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

  .posterDialog__card {
    width: 300px;
    min-width: 300px;
  }

</style>
