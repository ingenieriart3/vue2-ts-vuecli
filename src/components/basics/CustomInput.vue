<template>
    <div>
        <p>custom input </p>
        <input 
          v-model="searchText"
          v-on:input="onCustomInput"
        >
        <!-- v-on:input="$emit('input', $event.target)" -->
        <br>
        {{ searchText }}
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  // deprecado event but..
  var event : Event 
  
  export default defineComponent({
      data: function () {
        return {
            searchText: '' as String
          }
      },
      methods:{
          onCustomInput: function () : void {
          return this.$emit('input', event.target)
      },
      updated(){
        console.log('1 updated')
        // alert('0 beforeCreate')
      },
    }
  })
  </script>