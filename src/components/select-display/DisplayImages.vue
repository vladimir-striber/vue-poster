<template>
  <div>

    <q-list bordered v-if="images.length > 0">
      <q-item v-for="(image, index) in images" :key="index">

        <q-item-section thumbnail class="q-pl-sm">
          <img :src="image.__img.src" alt="image">
        </q-item-section>
        <q-item-section class="gt-xs">{{ image.name }} / {{ image.__sizeLabel }}</q-item-section>
        <div class="q-pa-md q-ma-none q-gutter-sm absolute-right row items-center">
          <q-btn
              outline
              rounded
              color="secondary"
              icon="add"
              class="q-my-xs q-mx-md"
              @click.stop="openCreatePosterDialog(image.__img.src)"
              no-caps
          >
            Create a poster
          </q-btn>
          <q-btn
              round
              color="red-6"
              icon="close"
              size="xs"
              dense
              @click="openDeleteConfirmDialog(index)"
              class="q-ma-none"
          />
        </div>

        <CreatePosterDialog v-model="dialog" :imageSrc="imageSrc" />

        <DeleteDialog v-model="confirm" :deleteImageIndex="deleteImageIndex" :imageDelete="true" />

      </q-item>

    </q-list>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreatePosterDialog from '../dialogs/CreatePosterDialog'
import DeleteDialog from '../dialogs/DeleteDialog'
// import { Notify } from 'quasar'
export default {
  name: 'DisplayImages',
  components: {
    DeleteDialog,
    CreatePosterDialog
  },
  data () {
    return {
      dialog: false,
      imageSrc: '',
      confirm: false,
      deleteImageIndex: ''
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {
    ...mapActions('images', ['deleteImage']),
    openCreatePosterDialog (imageSrc) {
      this.dialog = true
      this.imageSrc = imageSrc
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deleteImageIndex = index
      console.log('opening delete dialog is happening')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
