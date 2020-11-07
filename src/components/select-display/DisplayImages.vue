<template>

  <q-list bordered v-if="images.length > 0">
    <q-item v-for="(image, index) in images" :key="index" clickable v-ripple>

      <q-item-section thumbnail class="q-pl-sm">
        <img :src="image.selectedFile.__img.src" alt="image">
      </q-item-section>
      <q-item-section>{{ image.selectedFile.name }} / {{ image.selectedFile.__sizeLabel }}</q-item-section>
      <div class="q-pa-md q-gutter-sm absolute-top-right">
        <q-btn round color="primary" icon="close" size="8px" @click="deleteImage(index)" />
      </div>
      <!--<q-separator />-->
    </q-item>

  </q-list>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DisplayImages',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {
    ...mapActions('images', ['deleteImage'])
  }
}
</script>

<style scoped>

</style>
