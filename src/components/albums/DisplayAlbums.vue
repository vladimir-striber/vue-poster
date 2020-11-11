<template>

  <div class="album">
    <q-card v-for="(album, index) in albums" :key="index" flat bordered class="albumCard">
      <q-card-section class="row justify-between albumCard__header">
        <span class="text-h6 q-mb-xs">{{ album.title }}</span>
        <q-card-actions align="right" class="q-pa-none">

          <q-btn
              :to="{name: 'album', params: { albumIndex: index }}"
              flat
              round
              size="sm"
              color="$light-fa"
              icon="remove_red_eye"
              class="albumCard__btn q-ml-xs"
          >
          </q-btn>

          <q-btn
              @click="openEditDialog(index)"
              flat
              round
              size="sm"
              color="$light-fa"
              icon="edit"
              class="albumCard__btn"
          >
          </q-btn>

          <q-btn
              @click="openDeleteConfirmDialog(index)"
              flat
              round
              size="sm"
              color="$light-fa"
              icon="close"
              class="albumCard__btn albumCard__btn--delete"
          >
          </q-btn>

        </q-card-actions>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section class="albumCard__content">
        <div v-for="(poster, index1) in album.posters" :key="index1" class="albumCard__imgWrapper" :class="background(poster.posterBackground)">
          <img :src="poster.image" class="albumCard__img">
          <div class="posterDescription">
            <div class="posterDescription__title text-uppercase text-h5 text-center text-grey-1"><span>{{poster.title}}</span></div>
            <hr class="posterDescription__hr">
            <div class="posterDescription__caption text-center text-caption text-grey-1"><span>{{poster.caption}}</span></div>
          </div>
        </div>
      </q-card-section>

      <!--Dialog for album edit-->
      <q-dialog v-model="dialog" class="posterDialog">

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

          <q-card-actions align="right" class="row q-pa-md">
            <q-btn
                flat
                color="primary"
                label="Cancel"
                no-caps
                v-close-popup
                class="text-grey-8 col-grow"
            ></q-btn>
            <q-btn
                @click="updateAlbum({index: editIndex, posters: posters, title: albums[editIndex].title}); clearPosterSelections()"
                class="col-8"
                color="primary"
                label="Save"
                no-caps
                v-close-popup
            ></q-btn>
          </q-card-actions>

        </q-card>
      </q-dialog>

      <!--Dialog for delete album confirmation-->
      <q-dialog v-model="confirm">
        <q-card>
          <q-card-section class="row items-center">
            <span>Are you sure you want to delete this album?</span>
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
                @click="deleteAlbum(deleteAlbumIndex); confirm = false"
            />
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
      confirm: false,
      deleteAlbumIndex: ''
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
      }, 0)
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deleteAlbumIndex = index
    },
    background (bgc) {
      if (bgc) {
        return `bg-${bgc}`
      } else {
        return 'bg-grey-10'
      }
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
    height: 350px;
    max-height: 350px;
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
    width: calc(50% - 8px);
    margin: 4px;
    padding: 8px;
  }

  .albumCard__img {
    max-width: 100%;
    width: 100%;
    height: 100px;
    max-height: 100px;
  }

  .posterDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
