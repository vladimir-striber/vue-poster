<template>
  <q-page class="q-px-lg q-py-none">
    <h1>{{albums[albumIndex].title}}</h1>

    <div class="container">

        <div v-for="(poster, index) in albums[albumIndex].posters" :key="index" class="box" :class="background(poster.posterBackground)">

          <img :src="poster.image" @click.stop="openFullScreenDialog"  alt="image" width="100%" height="100%" class="image q-ma-none"/>

          <!--<div class="poster__overlay">-->
            <!--<div class="poster__actions">-->
              <!--<q-btn-->
                  <!--round-->
                  <!--color="primary"-->
                  <!--icon="close"-->
                  <!--size="8px"-->
                  <!--class="absolute-top-right q-ma-xs image__delete"-->
                  <!--@click="deletePoster(index)"-->
              <!--/>-->
            <!--</div>-->
          <!--</div>-->

          <div class="posterDescription">
            <div class="posterDescription__title text-uppercase text-h5 text-center text-grey-1"><span>{{poster.title}}</span></div>
            <hr class="posterDescription__hr">
            <div class="posterDescription__caption text-center text-caption text-grey-1"><span>{{poster.caption}}</span></div>
          </div>

        </div>

    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['albumIndex'],
  name: 'Album',
  computed: {
    ...mapGetters('albums', ['albums'])
  },
  methods: {
    background (bgc) {
      if (bgc) {
        return `bg-${bgc}`
      } else {
        return 'bg-grey-10'
      }
    },
    openFullScreenDialog () {
      this.$refs.FullScreenDialog.show()
    }
  }
}
</script>

<style lang="scss" scoped>

  h1 {
    font-size: 32px;
    font-weight: 400;
  }

  .container {
    width: 100%;
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
      overflow: hidden;
      break-inside: avoid;
      transition: 0.2s;
      &:hover {
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
  }

  .posterDescription__title {

  }

  .posterDescription__hr {
    width: 80%;
    margin: 0 auto;
    color: $light-fa;
  }

  .posterDescription__caption {

  }

  .image {
    width: 100%;
    height: auto;
  }

</style>
