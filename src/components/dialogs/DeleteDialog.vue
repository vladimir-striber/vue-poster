<template>
  <!--Dialog for delete album confirmation-->
  <q-dialog v-model="show">
    <q-card>
      <q-card-section class="row items-center">
        <span v-if="imageDelete">Are you sure you want to delete this image?</span>
        <span v-else-if="posterDelete">Are you sure you want to delete this poster?</span>
        <span v-else-if="albumDelete">Are you sure you want to delete this album?</span>
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
            v-if="imageDelete"
            label="Delete"
            color="warning"
            @click="deleteImage({deleteImageIndex: deleteImageIndex}); show = false"
            no-caps
            class="col-8"
        />
        <q-btn
            v-if="posterDelete"
            label="Delete"
            color="warning"
            @click="deletePoster({deletePosterIndex: deletePosterIndex}); show = false"
            no-caps
            class="col-8"
        />
        <q-btn
            v-if="albumDelete"
            label="Delete"
            color="warning"
            @click="deleteAlbum({deleteAlbumIndex: deleteAlbumIndex}); show = false"
            no-caps
            class="col-8"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'DeleteDialog',
  props: {
    value: Boolean,
    imageDelete: {
      value: Boolean,
      required: false
    },
    deleteImageIndex: {
      value: Number,
      required: false
    },
    posterDelete: {
      value: Boolean,
      required: false
    },
    deletePosterIndex: {
      value: Number,
      required: false
    },
    albumDelete: {
      value: Boolean,
      required: false
    },
    deleteAlbumIndex: {
      value: Number,
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
        console.log(value, 'value')
      }
    }
  },
  methods: {
    ...mapActions('images', ['deleteImage']),
    ...mapActions('posters', ['deletePoster']),
    ...mapActions('albums', ['deleteAlbum'])
  }
}
</script>

<style scoped>

</style>
