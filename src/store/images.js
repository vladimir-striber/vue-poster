const state = {
  images: []
}

const mutations = {
  uploadFile (state, payload) {
    this.state.images.images.push(payload)
    console.log(this.state.images, 'images from mutation state')
  },
  deleteImage (state, payload) {
    this.state.images.images.splice(payload, 1)
  }
}

const actions = {
  uploadFile ({ commit }, payload) {
    commit('uploadFile', payload)
  },
  deleteImage ({ commit }, payload) {
    commit('deleteImage', payload)
  }
}

const getters = {
  images: (state) => {
    return state.images
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
