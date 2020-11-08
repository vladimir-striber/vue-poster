const state = {
  posters: []
}

const mutations = {
  uploadPoster (state, payload) {
    this.state.posters.posters.push(payload)
    console.log(this.state.posters, 'posters from mutation state')
  },
  deletePoster (state, payload) {
    // console.log(payload, this.state.posters, 'posters delete from mutation state')
    this.state.posters.posters.splice(payload, 1)
  }
}

const actions = {
  uploadPoster ({ commit }, payload) {
    // console.log(payload, 'poster from actions')
    commit('uploadPoster', payload)
  },
  deletePoster ({ commit }, payload) {
    commit('deletePoster', payload)
    // console.log(payload, 'payload from actions')
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
