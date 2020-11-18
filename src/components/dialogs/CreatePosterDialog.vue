<template>

  <!--Dialog for poster create-->
  <q-dialog v-model="show" persistent class="posterDialog">
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
            @click="uploadPoster({image: imageSrc, title: title, caption: caption, selected: false, posterBackground: posterBackground}); clearPosterDialog(); show = false"
            class="col-8"
            color="primary"
            label="Create new poster"
            no-caps
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'PosterDialog',
  props: {
    value: Boolean,
    imageSrc: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      title: '',
      caption: '',
      // imageSrc: '',
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
    ...mapGetters('posters', ['posters']),
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    imageSrc: {
      immediate: true,
      handler (val) {
        this.imageSrc = val
      }
    }
  },
  methods: {
    ...mapActions('posters', ['uploadPoster']),
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
      this.title = ''
      this.caption = ''
      for (let i = 0; i < this.colors.length; i++) {
        i === 0 ? this.colors[i].state = true : this.colors[i].state = false
      }
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
