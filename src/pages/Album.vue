<template>
  <div class="q-pa-md">
    <h2>{{albums[albumIndex].title}}</h2>
    <div>
      <q-list class="q-pa-md q-col-gutter-md row items-start">
        <q-item v-for="(poster, index) in albums[albumIndex].posters" :key="index" class="col-4 q-gutter-md wrap">
        <div class="posterWrapper q-ma-none q-pa-sm">
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
            <h2 class="text-h6">{{poster.title}}</h2>
            <p>{{poster.caption}}</p>
          </div>

        </div>

        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['albumIndex'],
  name: 'Album',
  computed: {
    ...mapGetters('albums', ['albums'])
  }
}
</script>

<style lang="scss" scoped>

  .poster__overlay {
    display: none;
  }

  .posterWrapper {
    position: relative;
    background-color: darkslategrey;
    transition: ease-in-out 200ms;
    max-height: 300px;
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
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .image {
    max-width: 100%;
    max-height: 100%;
  }

</style>
