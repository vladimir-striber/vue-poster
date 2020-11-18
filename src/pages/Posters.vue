<template>
  <q-page class="q-px-lg q-py-none">
    <h1>Posters</h1>

    <p v-if="posters.length === 0" class="noItemMessage text-grey-10 q-pa-md bg-grey-2 rounded-borders outline block">No posters yet... You can create one on the Home page...</p>

    <div class="container">

      <div v-for="(poster, index) in posters" :key="index" class="box" :class="background(poster.posterBackground)">

        <q-img :src="poster.image"  alt="image" width="100%" height="100%" class="image q-ma-none" />

        <div class="poster__overlay">
          <div class="poster__actions">
            <q-btn
                round
                size="sm"
                color="primary"
                icon="edit"
                class="albumCard__btn q-ma-sm"
                @click="openEditDialog(index)"
            ></q-btn>
            <q-btn
                round
                color="primary"
                icon="close"
                size="sm"
                class="absolute-top-right q-ma-sm image__delete"
                @click="openDeleteConfirmDialog(index)"
            />
          </div>
        </div>

        <div class="posterDescription">
          <div class="posterDescription__title text-uppercase text-h5 text-center text-grey-1"><span>{{poster.title}}</span></div>
          <hr class="posterDescription__hr">
          <div class="posterDescription__caption text-center text-caption text-grey-1"><span>{{poster.caption}}</span></div>
        </div>

        <EditPosterDialog v-if="dialog" v-model="dialog" :editIndex="editIndex" />

        <DeleteDialog v-model="confirm" :deletePosterIndex="deletePosterIndex" :posterDelete="true" />
      </div>
    </div>

  </q-page>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import EditPosterDialog from '../components/dialogs/EditPosterDialog'
import DeleteDialog from '../components/dialogs/DeleteDialog'

export default {
  name: 'Posters',
  components: {
    EditPosterDialog,
    DeleteDialog
  },
  data () {
    return {
      dialog: false,
      editIndex: '',
      title: '',
      caption: '',
      imageSrc: '',
      posterBackground: false,
      confirm: false,
      deletePosterIndex: ''
    }
  },
  computed: {
    ...mapGetters('posters', ['posters'])
  },
  methods: {
    ...mapActions('posters', ['deletePoster']),
    openEditDialog (index) {
      // debugger
      this.editIndex = index
      this.dialogStateMutate()
    },
    dialogStateMutate () {
      setTimeout(() => {
        this.dialog = true
      }, 100)
    },
    background (bgc) {
      if (bgc) {
        return `bg-${bgc}`
      } else {
        return 'bg-grey-10'
      }
    },
    openDeleteConfirmDialog (index) {
      this.confirm = true
      this.deletePosterIndex = index
      console.log(this.deletePosterIndex, 'deletePosterIndex')
    }
  }
}
</script>

<style lang="scss" scoped>

  @import "../css/quasar.variables";
  @import "../css/fonts.scss";

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
    .box {
      position: relative;
      width: 100%;
      margin: 0 0 8px;
      padding: 12px;
      overflow: hidden;
      break-inside: avoid;
      -webkit-transition: ease-in-out .1s;
      -moz-transition: ease-in-out .1s;
      -ms-transition: ease-in-out .1s;
      -o-transition: ease-in-out .1s;
      transition: ease-in-out .1s;
      &:hover {
        transform: scale(1.03);
        cursor: pointer;
        .poster__overlay {
          display: block;
          background-color: rgba(0,0,0,0.6);
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      img {
        max-width: 100%;
      }
    }
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

  .poster__overlay {
    display: none;
  }

  .posterDescription {
    position: relative;
    padding: 4px;
  }

  .image {
    width: 100%;
    height: auto;
  }

  .posterDialog__card {
    width: 100%;
    min-width: 300px;
    max-width: 500px;
  }

</style>
