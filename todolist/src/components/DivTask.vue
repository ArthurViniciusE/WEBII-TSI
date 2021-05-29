<template>
    <div class="flex items-center justify-between px-4 bg-gray-600 w-80 h-8 mt-2" >
        {{task}}
    <button @click="deletar" class="focus:outline-none bg-blue-600 px-1 rounded-md text-white m">Done</button>
    </div>

</template>

<script>


export default {
    name:'Divtask',
    props: {
        task: String,
        index: Number,
    },
    methods: {
        deletar(){
         this.$store.commit('delTask', this.index) 
            
        }   
    }
}
</script>