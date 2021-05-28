<template>
    <div>
        <h1>Hello Test</h1>
        <h2>Username:{{ username }}</h2>
        <ul>
            <li v-for="nome of connected" :key="nome"> 
                {{nome}}
            </li>
        </ul>
        <input type="text" v-model="form.nome"> <button @click="add">Adicionar</button>
        <br>
        <a href="#" @click.prevent="change">Click</a>
        <!-- <hello-world/> -->
    </div>
</template>

<script>
import {mapState} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default{
    data(){
        return{
        connected: JSON.parse(localStorage.getItem('connected')) ?? [],
        form: {
            nome:''
        }
        }
    },
    computed: {
        ...mapState(['username'])
    },
    methods: {
        change() {
            this.$store.dispatch('changeName', Math.random())
        },
        add() {
            if (this.form.nome.length == 0){
                return
            }
            this.connected.push(this.form.nome)
            this.form.nome = ''
            localStorage.setItem('connected', JSON.stringify(this.connected))
        }
    },
    components: {
    HelloWorld
  }
}
</script>