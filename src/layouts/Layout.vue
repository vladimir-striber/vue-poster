<template>
  <q-layout view="lHh Lpr lFf" class="q-pb-xl bg-grey-1 mainLayout">
    <q-header elevated class="mainToolbar bg-grey-2 text-grey-8 no-shadow">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="title">
          <span class="title__motivation text-lowercase text-bold">Motivation</span><span class="title__posters text-lowercase text-thin text-grey-6">posters</span>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      {{ setTotalItems() }}
      <!--{{ setPosterItems() }}-->
      <!--{{ setAlbumItems() }}-->
      <q-list>
        <q-item-label
          header
          class="dashboard text-grey-8 text-subtitle1"
        >
          Dashboard
        </q-item-label>
        <q-item
            v-for="(link, index) in essentialLinks"
            :key="index"
            clickable
            tag="a"
            :to="link.link"
        >
          <q-item-section
              v-if="link.icon"
              avatar
          >
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }} &nbsp;
              <!--<span v-if="index !== 0">[ {{ link.total }} ]</span>-->
              <q-badge v-if="index !== 0" color="secondary" text-color="white" :label="link.total" />
            </q-item-label>
            <q-item-label caption>
              {{ link.caption }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Images',
          icon: 'image',
          link: '/images'
        },
        {
          title: 'Posters',
          icon: 'developer_board',
          link: '/posters'
        },
        {
          title: 'Albums',
          icon: 'perm_media',
          link: '/albums'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('images', ['images']),
    ...mapGetters('posters', ['posters']),
    ...mapGetters('albums', ['albums'])
  },
  methods: {
    setTotalItems () {
      for (let i = 0; i < this.essentialLinks.length; i++) {
        if (i === 1) {
          this.essentialLinks[i].total = this.images.length
        } else if (i === 2) {
          this.essentialLinks[i].total = this.posters.length
        } else if (i === 3) {
          this.essentialLinks[i].total = this.albums.length
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/quasar.variables";

  .title__motivation, .title__posters {
    font-size: 24px;
  }
  .q-item {
    color: $dark-7;
    font-size: 16px;
  }

  .q-router-link--exact-active {
    color: $primary;
  }

</style>
