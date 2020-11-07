<template>
<q-list class="row">
  <q-item v-for="(image, index) in images" :key="index" class="col-4 q-gutter-md wrap">
    <!--<img :src="image.src" alt="image">-->
    <img :src="image.selectedFile.src" alt="image" width="100%" height="100%"/>
    <!--{{image}}-->

    <div class="q-pa-md q-gutter-sm absolute-top-right">
      <q-btn round color="primary" icon="close" size="8px" @click="deleteImage(index)" />
    </div>

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
