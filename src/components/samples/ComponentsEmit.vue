<template>
  <p>template </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: {
    addBook(payload: { bookName: string }) {
      // perform runtime validation
      return payload.bookName.length > 0
    }
  },
  methods: {
    // onSubmit() {
    //   this.$emit('addBook', {
    //     bookName: 123 // Type error!
    //   })

    //   this.$emit('non-declared-event') // Type error!
    // }
    onSubmit() {
        this.$emit('addBook', {
          bookName: 'El Alquimista' // Type error!
        })

        // this.$emit(['non-declared-event']) // Type error!
        this.$emit("addBook", {
          bookName: 'El Alquimista' // Type error!
        })
      }
  }
})
</script>