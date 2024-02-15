<template>
    <div class="todo-list">
        <h1>Todo List</h1>
        <ul>
            <Todo v-for="todo in todos" :key="todo" :props="todo"  />
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import Todo from './Todo.vue'


export default {
    name: 'TodoList',
    components: {
        Todo
    },
    setup() {
        const todos = ref([
            { id: 1, title: 'Do the dishes', hours: 1, manager: 'John' },
            { id: 2, title: 'Take out the trash', hours: 0.5, manager: 'Jane' },
            { id: 3, title: 'Mow the lawn', hours: 2, manager: 'John' }
        ])
        return {
            todos
        }
    }
}
</script>