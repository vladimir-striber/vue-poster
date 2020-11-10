<template>

  <div class="album">
    <q-card v-for="(album, index) in albums" :key="index" flat bordered class="albumCard">
      <q-card-section class="row justify-between albumCard__header">
        <span class="text-h6 q-mb-xs">{{ album.title }}</span>
        <q-card-actions align="right" class="q-pa-none">

          <q-btn :to="{name: 'album', params: { albumIndex: index }}" flat round size="sm" color="$light-fa"
                 icon="remove_red_eye" class="albumCard__btn q-ml-xs"></q-btn>

          <q-btn @click="openEditDialog(index)" flat round size="sm" color="$light-fa" icon="edit"
                 class="albumCard__btn"></q-btn>

          <q-btn flat round size="sm" color="$light-fa" icon="close"
                 class="albumCard__btn albumCard__btn--delete"></q-btn>

        </q-card-actions>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section class="albumCard__content">
        <div v-for="(poster, index1) in album.posters" :key="index1" class="albumCard__imgWrapper">
          <img :src="poster.image" class="albumCard__img">
        </div>
      </q-card-section>

      <!--Dialog for album edit-->
      <q-dialog v-model="dialog" persistent class="posterDialog">

        <q-card v-if="editIndex === 0 || editIndex > 0" class="my-card posterDialog__card">

          <q-input v-model="albums[editIndex].title" label="Title"/>
          <q-list bordered>
            <q-item v-for="(poster, index) in posters" :key="index" clickable v-ripple>

              <q-item-section thumbnail class="q-pl-sm">
                <img :src="poster.image" alt="image">
              </q-item-section>
              <q-item-section>{{ poster.title }} / {{ poster.caption }}</q-item-section>

              <q-checkbox :value="poster.selected" @input="selectPoster(index)"/>

            </q-item>

          </q-list>

          <q-card-actions align="right">
            <q-btn
                style="width: 150px"
                flat
                color="primary"
                label="Cancel"
                no-caps
                v-close-popup
            ></q-btn>
            <q-btn
                @click="updateAlbum({index: editIndex, posters: posters, title: albums[editIndex].title}); clearPosterSelections()"
                style="width: 150px"
                flat
                color="secondary"
                label="Save"
                no-caps
                v-close-popup
            ></q-btn>
          </q-card-actions>

        </q-card>
      </q-dialog>

    </q-card>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DisplayAlbums',
  data () {
    return {
      dialog: false,
      editIndex: '',
      titleEdited: ''
    }
  },
  computed: {
    ...mapGetters('posters', ['posters']),
    ...mapGetters('albums', ['albums'])
  },
  methods: {
    ...mapActions('albums', ['deleteAlbum', 'updateAlbum', 'uploadAlbum']),
    ...mapActions('posters', ['selectPoster', 'clearPosterSelections']),
    openEditDialog (index) {
      this.editIndex = index
      this.dialogStateMutate()
    },
    dialogStateMutate () {
      setTimeout(() => {
        this.dialog = true
      })
    }
    // clearAlbumDialog () {
    //   this.dialog = false
    //   this.title = ''
    // }
  }
}
</script>

<style lang="scss" scoped>

  .album {
    display: flex;
    flex-wrap: wrap;
  }

  .albumCard {
    height: 250px;
    max-height: 250px;
    flex-basis: calc(50% - 8px);
    margin-right: 8px;
    margin-bottom: 8px;
    overflow: hidden;
  }

  .albumCard__header {
    background-color: $primary;
    color: $light-fa;
  }

  .albumCard__btn {
    width: 32px;
    height: 32px;
    margin-left: 0 !important;
  }

  /*.albumCard__btn--delete {*/
  /*margin-left: 0 !important;*/
  /*}*/

  .albumCard__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .albumCard__imgWrapper {
    margin-right: 8px;
    margin-top: 8px;
  }

  .albumCard__img {
    max-width: 100%;
    width: 100%;
    height: 100px;
    max-height: 100px;
  }

</style>
