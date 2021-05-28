<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span class="primary-button">{{ username }}</span>
    <a href="" class="primary-button">Botão</a>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<style lang="scss">
  .primary-button{
    font-weight: bold;
    @apply
    text-gray-200 
    p-2
    rounded-md
    bg-gradient-to-t from-blue-400 via-blue-800 to-blue-600
    transition cursor-pointer;
    &:hover{
      @apply bg-gradient-to-l from-pink-400 via-blue-800 to-pink-600;
    }
  }
</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['username'])
  },
  components: {
    //HelloWorld
  }
}
</script>
