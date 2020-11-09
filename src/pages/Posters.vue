<template>
  <q-page class="q-px-lg q-py-none">
    <h1>Posters</h1>

    <div class="container">

      <div v-for="(poster, index) in posters" :key="index" class="box">

        <!--<div class="posterWrapper q-ma-none q-pa-sm">-->
          <img :src="poster.image"  alt="image" width="100%" height="100%" class="image q-ma-none"/>

          <div class="poster__overlay">
            <div class="poster__actions">
              <q-btn
                  round
                  color="primary"
                  icon="close"
                  size="8px"
                  class="absolute-top-right q-ma-xs image__delete"
                  @click="deletePoster(index)"
              />
            </div>
          </div>
          <div class="posterDescription">
            <div class="text-h6"><span>{{poster.title}}</span></div>
            <div><span>{{poster.caption}}</span></div>
          </div>

        <!--</div>-->

      </div>
    </div>

  </q-page>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Posters',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('posters', ['deletePoster'])
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

  .container {
    width: 100%;
    /*margin: 0 auto;*/
    columns: 1;
    column-gap: 8px;
    @media screen and (min-width: $width-sm) {
      columns: 2;
    }
    @media screen and (min-width: $width-md) {
      columns: 3;
    }
    @media screen and (min-width: $width-xl) {
      columns: 4;
    }
    .box {
      width: 100%;
      margin: 0 0 8px;
      padding: 4px;
      background-color: $light-e;
      overflow: hidden;
      break-inside: avoid;
      transition: 0.2s;
      &:hover {
        background-color: #ddd;
        transform: scale(1.03);
        cursor: pointer;
      }
      img {
        max-width: 100%;
      }
    }
  }

  .poster__overlay {
    display: none;
  }

  .posterWrapper {
    position: relative;
    background-color: darkslategrey;
    transition: ease-in-out 200ms;
    /*max-height: 300px;*/
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    &:hover {
      .poster__overlay {
      display: block;
      background-color: rgba(0,0,0,0.7);
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      }
    }
  }
  .posterDescription {
    position: relative;
    padding: 4px;
    /*bottom: 0;*/
    /*left: 0;*/
  }

  .image {
    width: 100%;
    height: auto;
    /*max-height: 100%;*/
  }

</style>
