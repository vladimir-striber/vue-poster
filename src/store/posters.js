import { Notify } from 'quasar'

const state = {
  posters: []
}

const mutations = {
  selectPoster (state, payload) {
    this.state.posters.posters[payload].selected = !this.state.posters.posters[payload].selected
  },
  uploadPoster (state, payload) {
    this.state.posters.posters.push(payload)
    console.log(this.state.posters, 'posters from mutation state')
    Notify.create({
      message: 'Poster created',
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
  updatePoster (state, payload) {
    this.state.posters.posters[payload.editIndex].title = payload.title
    this.state.posters.posters[payload.editIndex].caption = payload.caption
    this.state.posters.posters[payload.editIndex].posterBackground = payload.posterBackground
    console.log(this.state.posters, 'edit poster from mutation state')
    Notify.create({
      message: 'Poster updated',
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
  clearPosterSelections () {
    this.state.posters.posters.forEach((poster) => {
      poster.selected = false
    })
  },
  deletePoster (state, payload) {
    this.state.posters.posters.splice(payload.deletePosterIndex, 1)
    Notify.create({
      message: 'Poster deleted',
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
  selectPoster ({ commit }, payload) {
    commit('selectPoster', payload)
  },
  uploadPoster ({ commit }, payload) {
    commit('uploadPoster', payload)
  },
  updatePoster ({ commit }, payload) {
    commit('updatePoster', payload)
  },
  clearPosterSelections ({ commit }) {
    commit('clearPosterSelections')
  },
  deletePoster ({ commit }, payload) {
    commit('deletePoster', payload)
  }
}

const getters = {
  posters: (state) => {
    return state.posters
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
