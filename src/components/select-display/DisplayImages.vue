<template>
  <div>
    <q-list bordered v-if="images.length > 0">
      <q-item v-for="(image, index) in images" :key="index">

        <q-item-section thumbnail class="q-pl-sm">
          <img :src="image.__img.src" alt="image">
        </q-item-section>
        <q-item-section class="gt-xs">{{ image.name }} / {{ image.__sizeLabel }}</q-item-section>
        <div class="q-pa-md q-ma-none q-gutter-sm absolute-right row items-center">
          <q-btn
              outline
              rounded
              color="secondary"
              icon="add"
              class="q-my-xs q-mx-md"
              @click.stop="openCreatePosterDialog(image.__img.src)"
              no-caps
          >
            Create a poster
          </q-btn>
          <q-btn
              round
              color="red-6"
              icon="close"
              size="xs"
              dense
              @click="openDeleteConfirmDialog(index)"
              class="q-ma-none"
          />
        </div>

        <!--Dialog for poster create-->
        <q-dialog v-model="dialog" persistent class="posterDialog">
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
                  color="primary"
                  label="Create new poster"
                  no-caps
              ></q-btn>
            </q-card-actions>
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
                  color="warning"
                  v-close-popup
                  no-caps
                  class="col-8"
                  @click="deleteImage(deleteImageIndex); confirm = false"
              />
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
      confirm: false,
      deleteImageIndex: '',
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
    // Resetting dialog input fields
    clearPosterDialog () {
      this.dialog = false
      this.title = ''
      this.caption = ''
      this.imageSrc = ''
      for (let i = 0; i < this.colors.length; i++) {
        if (i === 0) {
          this.colors[i].state = true
        } else {
          this.colors[i].state = false
        }
      }
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
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deleteImageIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>

  .posterDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
