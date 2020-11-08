const state = {
  album: [],
  albums: []
}

const mutations = {
  uploadAlbum (state, payload) {
    payload.posters.forEach((poster) => {
      if (poster.selected === true) {
        this.state.albums.album.push(poster)
      }
    })
    this.state.albums.albums.push(this.state.albums.album)
    this.state.albums.album = []
    console.log(this.state.albums.album, 'album from mutations')
    console.log(this.state.albums.albums, 'albums from mutations')
    // this.state.albums.albums.push(payload)
    // console.log(payload, this.state.album, 'albums from mutation state')
  },
  deleteAlbum (state, payload) {
    // console.log(payload, this.state.albums, 'albums delete from mutation state')
    this.state.albums.albums.splice(payload, 1)
  }
}

const actions = {
  uploadAlbum ({ commit }, payload) {
    // console.log(payload, 'albums from actions')
    commit('uploadAlbum', payload)
  },
  deleteAlbum ({ commit }, payload) {
    commit('deleteAlbum', payload)
    // console.log(payload, 'payload from actions')
  }
}

const getters = {
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
