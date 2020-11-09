<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="q-px-lg q-py-none">
    <h1>Welcome</h1>

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

<style lang="scss" scoped>
  @import "../css/fonts.scss";

  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: $montserrat-bold;
  }
</style>
