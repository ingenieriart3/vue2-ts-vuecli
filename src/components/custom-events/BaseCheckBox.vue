<template>
  <div>
    <p>Checkbox (custom event) </p>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
})
</script>