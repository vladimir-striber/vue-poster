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

      <EditAlbumDialog v-model="dialog" :editIndex="editIndex" />

      <DeleteDialog v-model="confirm" :deleteAlbumIndex="deleteAlbumIndex" :albumDelete="true" />

    </q-card>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DeleteDialog from '../dialogs/DeleteDialog'
import EditAlbumDialog from '../dialogs/EditAlbumDialog'

export default {
  name: 'DisplayAlbums',
  components: { EditAlbumDialog, DeleteDialog },
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
    ...mapActions('albums', ['deleteAlbum']),
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
    flex-basis: 100%;
    margin-right: 8px;
    margin-bottom: 8px;
    overflow: hidden;
    @media screen and (min-width: $width-md) {
      flex-basis: calc(50% - 8px);
    }
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

  .posterDescription__hr {
    width: 80%;
    margin: 0 auto;
    color: $light-fa;
  }

</style>
