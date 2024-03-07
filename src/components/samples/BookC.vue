<template>
    <p> {{ showTitle }} </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Book-cmp',
    props: {
        showTitle: {type: String}
    }
})
</script>