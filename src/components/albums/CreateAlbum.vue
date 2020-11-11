<template>
  <div class="q-mb-xl">

    <q-btn
        outline
        rounded
        color="secondary"
        icon="add"
        @click="openCreateAlbumDialog()"
        no-caps
        class="q-mb-lg"
        size="md"
        v-if="posters.length > 0"
    >
      Create new album
    </q-btn>

    <p v-else class="noItemMessage text-grey-10 q-pa-md bg-grey-2 rounded-borders outline block">No albums yet... You can create posters one the Home page and than create your albums...</p>

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
    openCreateAlbumDialog () {
      this.dialog = true
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

  .noItemMessage {
    /*<!--font-family: $ubuntu;-->*/
  }

</style>
