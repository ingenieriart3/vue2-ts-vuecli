<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    // handleChange(event) {
    //   // `event` implicitly has `any` type
    //   console.log(event.target.value)
    // }
    handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
  }
})
</script>

<template>
  <input type="text" @change="handleChange" />
</template>
</script>