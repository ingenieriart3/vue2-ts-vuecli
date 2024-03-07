<template>
    <div>
        <p> {{ title }} </p>
        <!-- <button v-on:click="$emit('enlarge-text', 0.1)"> -->
        <button v-on:click="onEnlargeText(0.1)">
            Enlarge text
        </button>
        <button v-on:click="$emit('reset-text-size')">
            Reset text size
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Blogs-cmp',
    props: {
        title: {type: String, required: true}
    },
    data: function () {
        return {
            count: 0
        }
    },
    methods:{
        onEnlargeText: function (enlargeAmount: any) {
            this.$emit('enlarge-text', enlargeAmount)
        }
    }
})
</script>