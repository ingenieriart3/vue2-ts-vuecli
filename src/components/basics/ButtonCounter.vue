<template>
  <div>
    <p>{{text}} </p>
    <button v-on:click="counting">You clicked me {{ count }} times.</button>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    props: {
        text: {type: String, required: true}
    },
    data: function () {
      return {
        count: 0,
        // text: 'hola'
      }
    },
    methods:{
      counting(){
        this.count ++
      }
    }
  })
  </script>