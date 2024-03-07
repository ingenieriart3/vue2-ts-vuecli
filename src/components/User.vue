<template>
  <p>{{ fullName }} </p>
</template>

<script lang="ts">
  // * 1 ) import Vue from 'vue'
  import { User } from '../types/user'
  import { defineComponent } from 'vue'

  // export default Vue.extend({
  // https://vuejs.org/guide/typescript/options-api.html#typing-component-props
  // me esta permitiendo tipar sin usar defineComponent({ linea 8 Helloworld.vue
  // * 1 )lo cambie para usar emit
  export default defineComponent({

    name: 'User-cmp',
    // props: {
    //     name: String,
    //     msg: { type: String, required: true}
    // },
    data() {
      return {
        user: {} as User,
      }
    },
    // emits: {
    //   addBook(payload: { bookName: string }) {
    //       // perform runtime validation
    //       return payload.bookName.length > 0
    //     }
    // },
    // methods: {
    //   onSubmit() {
    //     this.$emit('addBook', {
    //       bookName: 123 // Type error!
    //     })

    //     this.$emit('non-declared-event') // Type error!
    //   }
    // },

    computed: {
      fullName(): string {
        return `${this.user.firstName} ${this.user.lastName}`
      }
    },
    mounted(): void {
      this.user = {
        firstName: `ingenieri`,
        lastName: `art3`,
        twitterHandle: `@iart3.dev`,
        location: {
          city: `Mvd`,
          state: `Mvd`
        }
      }
    }
  })
</script>