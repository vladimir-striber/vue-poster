<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding>
    <p>Welcome to our app! You can upload your images below</p>

    <SelectImages />

    <DisplayImages />

  </q-page>

</template>

<script>

import SelectImages from '../components/select-display/SelectImages'
import DisplayImages from '../components/select-display/DisplayImages'

export default {
  name: 'Index',
  components: {
    SelectImages,
    DisplayImages
  },
  data () {
    return {
      // images: [],

      // isUploaded: false
    }
  }
}
</script>

<style scoped>

</style>
