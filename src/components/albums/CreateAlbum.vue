<template>
  <div class="q-mb-xl">
    <p>Create new album</p>
    <q-btn outline round color="secondary" icon="add" @click="dialog = true"></q-btn>

    <!--Dialog for album create-->
    <q-dialog v-model="dialog" class="posterDialog">
      <q-card class="my-card posterDialog__card">

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
              @click="uploadAlbum({posters: posters, title: title}); clearAlbumDialog(); clearPosterSelections();"
              class="col-8"
              color="secondary"
              label="Create new album"
              no-caps
          ></q-btn>
        </q-card-actions>

      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'CreateAlbum',
  data () {
    return {
      dialog: false,
      title: ''
    }
  },
  computed: {
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('albums', ['deleteAlbum', 'uploadAlbum']),
    ...mapActions('posters', ['selectPoster', 'clearPosterSelections']),
    clearAlbumDialog () {
      this.dialog = false
      this.title = ''
    },
    clearPosterSelections () {
      this.posters.forEach(poster => {
        poster.selected = false
      })
    }
  }
}
</script>

<style scoped>

</style>
