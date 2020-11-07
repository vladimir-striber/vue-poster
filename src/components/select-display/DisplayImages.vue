<template>
<q-list>
  <q-item v-for="(image, index) in images" :key="index" class="col-4">
    <!--<img :src="image.src" alt="image">-->
    <img :src="image.selectedFile.src" alt="image"/>
    <!--{{image}}-->
  </q-item>
</q-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DisplayImages',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('images', ['images'])
  }
}
</script>

<style scoped>

</style>
