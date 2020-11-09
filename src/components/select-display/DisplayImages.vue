<template>
  <div>
    <q-list bordered v-if="images.length > 0">
      <q-item v-for="(image, index) in images" :key="index" clickable v-ripple>

        <q-item-section thumbnail class="q-pl-sm">
          <img :src="image.__img.src" alt="image">
        </q-item-section>
        <q-item-section>{{ image.name }} / {{ image.__sizeLabel }}</q-item-section>
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
              <q-input v-model="title" label="Title" />
              <q-input v-model="caption" label="Caption" class="q-mb-sm" />
              <q-checkbox v-for="(color, colorIndex) in colors" :key="colorIndex" v-model="color.state" keep-color :color="color.name" @input="selectColor(colorIndex)"/>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                  @click="uploadPoster({image: imageSrc, title: title, caption: caption, selected: false, posterBackground: posterBackground}); clearPosterDialog()"
                  style="width: 170px"
                  flat
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
          name: 'blue-grey-10',
          code: '#263238',
          state: false
        },
        {
          name: 'deep-purple-7',
          code: '#5e35b1',
          state: false
        },
        {
          name: 'cyan-9',
          code: '#00838f',
          state: false
        },
        {
          name: 'deep-orange-9',
          code: '#d84315',
          state: false
        },
        {
          name: 'teal-9',
          code: '#00695c',
          state: false
        },
        {
          name: 'amber-9',
          code: '#ff8f00',
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
    },
    selectColor (colorIndex) {
      this.posterBackground = this.colors[colorIndex].code
      // this.colors[colorIndex].state = true
      for (let i = 0; i < this.colors.length; i++) {
        i === colorIndex ? this.colors[i].state = true : this.colors[i].state = false
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
