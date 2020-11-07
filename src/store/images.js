const state = {
  images: []
}

const mutations = {
  uploadFile (state, payload) {
    // Object.assign(state.images, payload)
    this.state.images.images.push(payload)
    console.log(this.state.images, 'images from mutation state')
  },
  deleteImage (state, payload) {
    // Object.assign(state.images, payload)
    this.state.images.images.splice(payload, 1)
    // console.log(payload, 'from mutations')
  }
}

const actions = {
  uploadFile ({ commit }, payload) {
    // this.state.images.images.push(this.state.selectedFile)
    // console.log(this.images, 'images')
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
