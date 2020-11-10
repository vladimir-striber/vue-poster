<template>
  <q-page class="q-px-lg q-py-none">
    <h1>Posters</h1>

    <div class="container">

      <div v-for="(poster, index) in posters" :key="index" class="box" :class="background(poster.posterBackground)">

        <q-img :src="poster.image"  alt="image" width="100%" height="100%" class="image q-ma-none" />

        <div class="poster__overlay">
          <div class="poster__actions">
            <q-btn
                round
                size="sm"
                color="primary"
                icon="edit"
                class="albumCard__btn q-ma-sm"
                @click="openEditDialog(index)"
            ></q-btn>
            <q-btn
                round
                color="primary"
                icon="close"
                size="sm"
                class="absolute-top-right q-ma-sm image__delete"
                @click="openDeleteConfirmDialog(index)"
            />
          </div>
        </div>

        <div class="posterDescription">
          <div class="text-h6 text-grey-1"><span>{{poster.title}}</span></div>
          <div class="text-grey-1"><span>{{poster.caption}}</span></div>
        </div>

        <!--Dialog for poster edit-->
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
                  @click="updatePoster({editIndex: editIndex, image: imageSrc, title: title, caption: caption, selected: false, posterBackground: posterBackground}); clearPosterDialog()"
                  class="col-8"
                  color="primary"
                  label="Save"
                  no-caps
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <!--Dialog for delete album confirmation-->
        <q-dialog v-model="confirm">
          <q-card>
            <q-card-section class="row items-center">
              <span>Are you sure you want to delete this poster?</span>
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
                  @click="deletePoster(deletePosterIndex); confirm = false"
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
  name: 'Posters',
  data () {
    return {
      dialog: false,
      editIndex: '',
      title: '',
      caption: '',
      imageSrc: '',
      posterBackground: false,
      confirm: false,
      deletePosterIndex: '',
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
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('posters', ['deletePoster', 'updatePoster']),
    openEditDialog (index) {
      this.editIndex = index
      this.imageSrc = this.posters[index].image
      this.dialogStateMutate()
    },
    dialogStateMutate () {
      setTimeout(() => {
        this.dialog = true
      })
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deletePosterIndex = index
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
    // Resetting dialog input fields
    clearPosterDialog () {
      this.dialog = false
      // this.title = ''
      // this.caption = ''
      // this.imageSrc = ''
      // this.colors.forEach(color => {
      //   color.state = false
      // })
      // for (let i = 0; i < this.colors.length; i++) {
      //   if (i === 0) {
      //     this.colors[i].state = true
      //   } else {
      //     this.colors[i].state = false
      //   }
      // }
    },
    background (bgc) {
      if (bgc) {
        return `bg-${bgc}`
      } else {
        return 'bg-grey-10'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "../css/fonts.scss";

  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: $montserrat-bold;
  }

  .container {
    width: 100%;
    /*margin: 0 auto;*/
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
      position: relative;
      width: 100%;
      margin: 0 0 8px;
      padding: 4px;
      overflow: hidden;
      break-inside: avoid;
      transition: 0.2s;
      &:hover {
        transform: scale(1.03);
        cursor: pointer;
        .poster__overlay {
          display: block;
          background-color: rgba(0,0,0,0.6);
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

  .poster__overlay {
    display: none;
  }

  .posterDescription {
    position: relative;
    padding: 4px;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .posterDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
