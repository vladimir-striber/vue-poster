import { Notify } from 'quasar'

const state = {
  album: {},
  posters: [],
  albums: []
}

const mutations = {
  uploadAlbum (state, payload) {
    this.state.albums.album.title = payload.title
    // check if poster is selected
    payload.posters.forEach((poster) => {
      if (poster.selected === true) {
        this.state.albums.posters.push(poster)
      }
    })
    this.state.albums.album.posters = this.state.albums.posters
    this.state.albums.albums.push(this.state.albums.album)
    // resetting posters
    this.state.albums.posters = []
    // resetting albums
    this.state.albums.album = {}
    Notify.create({
      message: 'Album created',
      type: 'positive',
      color: 'green-6',
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          round: true,
          size: 'sm',
          // for individual action (button):
          attrs: {
            'aria-label': 'Dismiss',
            color: 'white'
          }
        }
      ]
    })
    console.log(this.state.albums.album, 'album from mutations')
    console.log(this.state.albums.albums, 'albums from mutations')
  },
  updateAlbum (state, payload) {
    this.state.albums.albums[payload.index].posters = []
    this.state.albums.albums[payload.index].title = payload.title
    payload.posters.forEach((poster) => {
      if (poster.selected === true) {
        this.state.albums.albums[payload.index].posters.push(poster)
      }
    })
    Notify.create({
      message: 'Album updated',
      type: 'positive',
      color: 'green-6',
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          round: true,
          size: 'sm',
          // for individual action (button):
          attrs: {
            'aria-label': 'Dismiss',
            color: 'white'
          }
        }
      ]
    })
  },
  deleteAlbum (state, payload) {
    console.log(payload, 'payload')
    this.state.albums.albums.splice(payload.deleteAlbumIndex, 1)
    Notify.create({
      message: 'Album deleted',
      type: 'negative',
      color: 'warning',
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          round: true,
          size: 'sm',
          // for individual action (button):
          attrs: {
            'aria-label': 'Dismiss',
            color: 'white'
          }
        }
      ]
    })
  }
}

const actions = {
  uploadAlbum ({ commit }, payload) {
    // console.log(payload, 'albums from actions')
    commit('uploadAlbum', payload)
  },
  updateAlbum ({ commit }, payload) {
    commit('updateAlbum', payload)
  },
  deleteAlbum ({ commit }, payload) {
    commit('deleteAlbum', payload)
  }
}

const getters = {
  poster: (state) => {
    return state.poster
  },
  album: (state) => {
    return state.album
  },
  albums: (state) => {
    return state.albums
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
