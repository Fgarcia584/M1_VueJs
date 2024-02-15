<template>
    <div class="todo">
        <h2>{{ title }}</h2>
        <p>{{ hours }}</p>
        <p>{{ manager }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    id: Number,
    title: String,
    hours: Number,
    manager: String
})

// export default {
//     name: 'TodoList',
//     props: props
// }
</script>