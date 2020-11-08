
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/images', component: () => import('pages/Images.vue') },
      { path: '/albums', component: () => import('pages/Albums.vue') },
      { path: '/posters', component: () => import('pages/Posters.vue') },
      { path: '/album/:albumIndex', props: true, name: 'album', component: () => import('pages/Album.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
