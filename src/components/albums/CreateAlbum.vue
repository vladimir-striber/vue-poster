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
    <CreateAlbumDialog v-model="dialog" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import CreateAlbumDialog from '../dialogs/CreateAlbumDialog'
export default {
  name: 'CreateAlbum',
  components: { CreateAlbumDialog },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    openCreateAlbumDialog () {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>

  .noItemMessage {
    /*<!--font-family: $ubuntu;-->*/
  }

</style>
