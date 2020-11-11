<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page class="q-px-lg q-py-none">
    <h1 class="text-grey-9 text-bold">The super fast and easy poster creator</h1>
    <h2 class="text-grey-7">Create the perfect motivational poster or get inspired by thousands of others. Select or drag and drop your images to try it out.</h2>

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
  @import "../css/app";

  h1 {
    font-size: 40px;
    /*font-weight: 400;*/
    /*<!--font-family: $ubuntu-bold;-->*/
    line-height: 60px;
    display: block;
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    /*text-align: center;*/
  }

  h2 {
    font-size: 18px;
    /*font-weight: 400;*/
    /*<!--font-family: $ubuntu-bold-italic;-->*/
    line-height: 30px;
    display: block;
    width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
</style>
