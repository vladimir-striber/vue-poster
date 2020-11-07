const state = {
  images: []
}

const mutations = {
  fileAdded (state, payload) {

    // this.state.selectedFile = payload[0]
    // console.log(this.state.selectedFile, 'selectedFile from mutation')
  },
  uploadFile (state, payload) {
    // Object.assign(state.images, payload)
    this.state.images.images.push(payload)
    console.log(this.state.images, 'images from mutation state')
  }
}

const actions = {
  uploadFile ({ commit }, payload) {
    // this.state.images.images.push(this.state.selectedFile)
    // console.log(this.images, 'images')
    commit('uploadFile', payload)
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
