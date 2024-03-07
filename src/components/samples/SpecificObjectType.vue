<template>
  <div>

    <p>Add books - Next id: {{ getNextId() }}</p>
    <input 
      v-model="bookTitle"
    > 
    <button v-on:click="consologearName">
        add book
    </button>    <!-- {{ bookTitle }} -->
    <BookC
      v-for="b in variosBooks"
      v-bind:key="b.id"
      v-bind:show-title="b.title"
    ></BookC>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import BookC from './BookC.vue'

var event : Event 

interface Book {
  id: number, // not Number
  title: String
  // author: string
  // year: number
}

export default defineComponent({
  components:{
    BookC,
  },
  props: {
    book: {
      // provide more specific type to `Object`
      type: Object as PropType<Book>,
      // required: true
    },
  },
  data: function(){
    let defaultBook: Book = {
      id: 1,
      title: 'El alquimista'
    }

    let variosBooks: Book[] = [
      defaultBook,
      {id: 2, title: '100 años de soledad'},
      {id: 3, title: 'La divina comedia'},
    ]
    return {
      // books: books as Book[],
      defaultBook,
      variosBooks,
      nextId: 0 as number,
      bookTitle: '' as String,
      message: '' as String
    }
  },
  mounted(){
    console.log('mounted...', JSON.stringify(this.variosBooks))
    console.log('mounted...', this.getNextId())
  },
  methods: {
    onSubmit(): void{
      this.$emit('addBook', {
        bookName: 'book name'
      },)
    },
    getNextId(): number {
      return this.variosBooks[this.variosBooks.length-1].id +1 as number
    },
    onCustomInput: function () : void {
        return this.$emit('input', event.target)
    },
    consologearName: function () : void {
      console.log('this.bookTitle > ', this.bookTitle)
      // let nextId :number = this.getNextId() 
      // nextId ++
      this.variosBooks.push({
        id: this.getNextId(),
        title: this.bookTitle
      })
      this.updateMessage( )
    },
    //debug reactivity con next tick vue 2 docs
    updateMessage: async function () {
      this.message = 'updated'
      // console.log(this.$el.textContent) // => 'not updated'
      //alert(this.$el.textContent) // => 'not updated'
      await this.$nextTick()
      // console.log(this.$el.textContent) // => 'updated'
      //alert(this.$el.textContent) // => 'updated'
    }
  }
})


</script>