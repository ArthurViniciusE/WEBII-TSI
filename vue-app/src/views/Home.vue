<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ username }}
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

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
