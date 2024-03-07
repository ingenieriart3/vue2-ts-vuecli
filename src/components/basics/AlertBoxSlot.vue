<template>
    <div class="demo-alert-box">
    <!-- <p>Alert Box </p> -->
      <strong>Error!</strong>
      <slot></slot>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
   
  })
  </script>

<style>
.demo-alert-box{
    padding: 10px 20px;
    background: #f3beb8;
    border: 1px solid #f09898;
    max-width: 400px;
    margin: auto
}
</style>