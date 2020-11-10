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
  },
  // clearPosterSelections () {
  //   this.state.posters.posters.forEach((poster) => {
  //     poster.selected = false
  //   })
  // },
  deletePoster (state, payload) {
    this.state.posters.posters.splice(payload, 1)
  }
}

const actions = {
  selectPoster ({ commit }, payload) {
    commit('selectPoster', payload)
  },
  uploadPoster ({ commit }, payload) {
    commit('uploadPoster', payload)
  },
  // clearPosterSelections ({ commit }) {
  //   commit('clearPosterSelections')
  // },
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
