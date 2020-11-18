<template>
  <!--Dialog for album edit-->
  <q-dialog v-model="show" class="posterDialog">

    <q-card v-if="editIndex === 0 || editIndex > 0" class="my-card posterDialog__card">

      <q-input v-model="albums[editIndex].title" label="Title" class="q-pa-sm"/>
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
            @click="updateAlbum({index: editIndex, posters: posters, title: albums[editIndex].title}); clearPosterSelections(); show = false"
            class="col-8"
            color="primary"
            label="Save"
            no-caps
        ></q-btn>
      </q-card-actions>

    </q-card>
  </q-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'EditAlbumDialog',
  props: {
    value: Boolean,
    editIndex: {
      value: Number,
      required: false
    }
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters('albums', ['albums']),
    ...mapGetters('posters', ['posters']),
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    ...mapActions('albums', ['updateAlbum']),
    ...mapActions('posters', ['selectPoster', 'clearPosterSelections'])
  }
}
</script>

<style lang="scss" scoped>

  .posterDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
