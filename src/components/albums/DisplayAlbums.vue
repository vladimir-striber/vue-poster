<template>
  <div>

      <div class="album">
        <q-card v-for="(album, index) in albums" :key="index" flat bordered class="albumCard">
          <q-card-section class="row justify-between albumCard__header">
            <span class="text-h6 q-mb-xs">{{ album.title }}</span>
            <q-card-actions align="right" class="q-pa-none">
              <!--<router-link :to="{name: 'Album', params: { albumIndex: album[index] }}">-->
                <q-btn :to="{name: 'album', params: { albumIndex: index }}" flat round size="sm" color="red" icon="remove_red_eye" class="albumCard__btn q-ml-xs"></q-btn>
                <!--@click="$router.push({name: 'Album', params: { albumIndex: album[index] }})"-->
              <!--</router-link>-->

              <q-btn flat round size="sm" color="teal" icon="edit" class="albumCard__btn"></q-btn>
              <q-btn flat round size="sm" color="primary" icon="close" class="albumCard__btn albumCard__btn--delete"></q-btn>
            </q-card-actions>
          </q-card-section>

          <q-separator></q-separator>

          <q-card-section class="albumCard__content">
            <div v-for="(poster, index1) in album.posters"  :key="index1" class="albumCard__imgWrapper">
              <img :src="poster.image" class="albumCard__img">
            </div>
          </q-card-section>

        </q-card>
      </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DisplayAlbums',
  computed: {
    ...mapGetters('posters', ['posters']),
    ...mapGetters('albums', ['albums'])
  },
  methods: {
    ...mapActions('albums', ['deleteAlbum', 'uploadAlbum']),
    ...mapActions('posters', ['selectPoster', 'clearPosterSelections']),
    clearAlbumDialog () {
      this.dialog = false
      this.title = ''
    }
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
    background-color: #eee;
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
