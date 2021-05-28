import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'Hagen'
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
