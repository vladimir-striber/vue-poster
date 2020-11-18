<template>
  <!--Dialog for album create-->
  <q-dialog v-model="show" class="albumDialog">
    <q-card class="my-card albumDialog__card">

      <q-input v-model="title" label="Title" class="q-pa-sm" color="secondary" />
      <q-list bordered v-if="posters.length > 0">
        <q-item v-for="(poster, index) in posters" :key="index" clickable v-ripple>

          <q-item-section thumbnail class="q-pl-sm">
            <img :src="poster.image" alt="image">
          </q-item-section>
          <q-item-section>{{ poster.title }} / {{ poster.caption }}</q-item-section>

          <q-checkbox :value="poster.selected" @input="selectPoster(index)" color="secondary" />

        </q-item>

      </q-list>

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
            @click="uploadAlbum({posters: posters, title: title}); clearAlbumDialog(); clearPosterSelections(); show = false"
            class="col-8"
            color="primary"
            label="Create new album"
            no-caps
        ></q-btn>
      </q-card-actions>

    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CreateAlbumDialog',
  props: {
    value: Boolean
  },
  data () {
    return {
      title: ''
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
  methods: {
    ...mapActions('albums', ['uploadAlbum']),
    ...mapActions('posters', ['selectPoster', 'clearPosterSelections']),
    clearAlbumDialog () {
      this.title = ''
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "../../css/fonts";

  .albumDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
