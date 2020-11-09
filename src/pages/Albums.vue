<template>
  <q-page class="q-px-lg q-py-none">
    <h1>Albums</h1>

    <CreateAlbum />

    <DisplayAlbums />

  </q-page>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateAlbum from '../components/albums/CreateAlbum'
import DisplayAlbums from '../components/albums/DisplayAlbums'
export default {
  name: 'Albums',
  components: { DisplayAlbums, CreateAlbum },
  data () {
    return {
      dialog: false,
      title: ''
    }
  },
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
  @import "../css/fonts.scss";

  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: $montserrat-bold;
  }

</style>
