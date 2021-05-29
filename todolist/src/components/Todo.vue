<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-gray-700 flex flex-col  items-center w-1/3 h-auto pb-5" >
      
      <h1 class="mb-14 mt-5 text-3xl text-white">Todo List</h1>
      <input v-model="form.nome" class="rounded-b-md border-2 border-gray-200 focus:outline-none" type="text" placeholder="Todo">
      <button @click="add" class="mt-5 bg-blue-600 px-4 py-2 rounded-lg text-white focus:outline-none">Adicionar</button>
      <h2 class="text-2xl text-white mr-60 mt-3 ">Todo</h2>
      <div class="flex flex-col ">
        <DivTask v-for="(task, index) of tasks" :key="task" :task="task" :index="index" class="text-gray-200" /> 
      </div>
    </div>
  
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import DivTask from './DivTask.vue'

export default {
  data(){
        return{
        form: {
          nome:''
      }
    }
  },
  computed:{
    ...mapState(['tasks'])
  },
  methods: {
    add() {
      if (this.form.nome.length == 0){
        return
      }
      this.$store.commit('setTask',this.form.nome)
      this.form.nome = ''
    }
  },
  components: {
    DivTask
  }
  

}
</script>




