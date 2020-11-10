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
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Dashboard
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    // caption: 'Total images',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Images',
    // caption: 'Total images',
    icon: 'image',
    link: '/images'
  },
  {
    title: 'Albums',
    // caption: 'github.com/quasarframework',
    icon: 'perm_media',
    link: '/albums'
  },
  {
    title: 'Posters',
    // caption: 'chat.quasar.dev',
    // icon: 'branding_watermark',
    icon: 'developer_board',
    link: '/posters'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      totalImages: 35
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../css/quasar.variables";

</style>
