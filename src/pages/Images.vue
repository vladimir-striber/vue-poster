<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
<q-page padding>
  <p>Images</p>

  <q-list>
    <q-item v-for="(image, index) in images" :key="index" class="col-4">
      <!--<img :src="image.src" alt="image">-->
      <img :src="image.selectedFile.src" alt="image"/>
      <!--{{image}}-->
    </q-item>
  </q-list>
</q-page>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Images',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
