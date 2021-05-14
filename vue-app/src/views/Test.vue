<template>
    <div>
        <h1>Hello Test</h1>
        <h2>Username: {{ username }}</h2>
        <a href="#" @click.prevent="change">Click</a>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    computed: {
        ...mapState(['username'])
    },
    methods: {
        change() {
            this.$store.dispatch('changeName', Math.random())
        }
    },
}
</script>