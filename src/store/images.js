import { Notify } from 'quasar'

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
    this.state.images.images.splice(payload.deleteImageIndex, 1)
    console.log('deleteImage is happening')
    Notify.create({
      message: 'Image deleted',
      type: 'negative',
      color: 'warning',
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
