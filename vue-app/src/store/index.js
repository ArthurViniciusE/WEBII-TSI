import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'Fafnir'
  },
  mutations: {
    setUsername(state,val){
      state.username = val
    }
  },
  actions: {
    async changeName({ commit }, name) {
      commit('setUsername', name)
    }
  },
  modules: {
  }
})
