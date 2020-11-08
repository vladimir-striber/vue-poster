<template>
  <q-page padding>
    <p>Albums</p>

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

<style scoped>

</style>
