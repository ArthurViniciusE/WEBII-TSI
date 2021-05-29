import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  },
  mutations: {
    setTask(state,valor){
      state.tasks.push(valor)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    delTask(state, index) {
      state.tasks.splice(index,1)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
  },
  modules: {
  }
})
