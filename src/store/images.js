const state = {
  images: []
}

const mutations = {
  uploadFiles (state, payload) {
    payload.selectedFiles.forEach((image) => {
      this.state.images.images.push(image)
    })

    console.log(this.state.images, 'images from mutation state')
  },
  deleteImage (state, payload) {
    this.state.images.images.splice(payload, 1)
  }
}

const actions = {
  uploadFiles ({ commit }, payload) {
    commit('uploadFiles', payload)
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
