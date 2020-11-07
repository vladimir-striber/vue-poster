const state = {
  images: [
    {
      name: 'Aheron',
      country: 'Greece'
    },
    {
      name: 'Dunav',
      country: 'Serbia'
    }
  ]
}

const mutations = {

}

const actions = {

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
