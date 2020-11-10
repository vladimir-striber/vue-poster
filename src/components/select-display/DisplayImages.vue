<template>
  <div>
    <q-list bordered v-if="images.length > 0">
      <q-item v-for="(image, index) in images" :key="index" clickable v-ripple>

        <q-item-section thumbnail class="q-pl-sm">
          <img :src="image.__img.src" alt="image">
        </q-item-section>
        <q-item-section class="gt-xs">{{ image.name }} / {{ image.__sizeLabel }}</q-item-section>
        <div class="q-pa-md q-ma-none q-gutter-sm absolute-right row items-center">
          <q-btn
              color="secondary"
              size="8px"
              class="q-ma-xs image__makePoster"
              @click.stop="openCreatePosterDialog(image.__img.src)"
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
            <q-img :src="imageSrc"></q-img>

            <q-card-section class="q-pt-none">
              <q-input v-model="title" label="Title" color="secondary" />
              <q-input v-model="caption" label="Caption" class="q-mb-md" color="secondary" />
              <p class="text-grey-8 text-subtitle1 q-mb-xs">Background</p>
              <q-checkbox v-for="(color, colorIndex) in colors" :key="colorIndex" v-model="color.state" keep-color :color="color.name" @input="selectColor(colorIndex)"/>
            </q-card-section>

            <q-card-actions align="right" class="row q-pa-md">
              <q-btn
                  flat
                  color="primary"
                  label="Cancel"
                  class="text-grey-8 col-grow"
                  v-close-popup
                  no-caps
              ></q-btn>
              <q-btn
                  @click="uploadPoster({image: imageSrc, title: title, caption: caption, selected: false, posterBackground: posterBackground}); clearPosterDialog()"
                  class="col-8"
                  color="secondary"
                  label="Create new poster"
                  no-caps
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

      </q-item>

    </q-list>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DisplayImages',
  data () {
    return {
      dialog: false,
      title: '',
      caption: '',
      imageSrc: '',
      posterBackground: false,
      colors: [
        {
          name: 'grey-10',
          code: '#212121',
          state: true
        },
        {
          name: 'blue-grey-10',
          code: '#263238',
          state: false
        },
        {
          name: 'teal-10 ',
          code: '#004d40',
          state: false
        },
        {
          name: 'cyan-10',
          code: '#006064',
          state: false
        },
        {
          name: 'deep-orange-10',
          code: '#bf360c',
          state: false
        },
        {
          name: 'amber-10',
          code: '#ff6f00',
          state: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters('images', ['images']),
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('images', ['deleteImage']),
    ...mapActions('posters', ['uploadPoster']),
    openCreatePosterDialog (imageSrc) {
      this.dialog = true
      this.imageSrc = imageSrc
    },
    clearPosterDialog () {
      this.dialog = false
      this.title = ''
      this.caption = ''
      this.imageSrc = ''
      this.colors.forEach(color => {
        color.state = false
      })
    },
    // Toggle checkbox' state
    selectColor (colorIndex) {
      this.posterBackground = this.colors[colorIndex].name
      for (let i = 0; i < this.colors.length; i++) {
        if (i === colorIndex) {
          if (this.colors[i].state === true) {
            this.colors[i].state = true
          }
        } else {
          this.colors[i].state = false
        }
      }
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
