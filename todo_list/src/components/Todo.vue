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

</script>

<style>
.todo {
    border: 1px solid #d7d7d7;
    padding: 10px;
    margin: 10px;
    width: 30%;
}

.todo:hover {
    box-shadow: 0 0 10px 0 #d7d7d7;
    cursor: pointer;
    transform: translate(0, -5px) scale(1.05);
    transition: all 0.3s;
}
</style>