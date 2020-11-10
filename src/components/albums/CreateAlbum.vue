<template>
  <div class="q-mb-xl">

    <q-btn
        outline
        rounded
        color="secondary"
        icon="add"
        @click="openCreateAlbumDialog()"
        no-caps
        class="q-mb-md"
    >
      Create new album
    </q-btn>

    <p v-if="noPostersMessage" class="text-grey-10">No posters yet... You can create one on the Home page...</p>

    <!--Dialog for album create-->
    <q-dialog v-model="dialog" class="albumDialog">
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
              @click="uploadAlbum({posters: posters, title: title}); clearAlbumDialog(); clearPosterSelections();"
              class="col-8"
              color="primary"
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
      title: '',
      noPostersMessage: false
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
    },
    openCreateAlbumDialog () {
      if (this.posters.length === 0) {
        this.noPostersMessage = true
      } else {
        this.dialog = true
        this.noPostersMessage = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .albumDialog__card {
    width: 300px;
    min-width: 300px;
  }

</style>
