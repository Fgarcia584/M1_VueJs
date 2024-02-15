<template>
    <div>
        <h1>Todo List {{ selectedTodoCount }}/{{ todos.length }}</h1>
        <div v-on:click="toggleShowModal" >Add Todo</div>
        <div v-if="selectedTodoCount > 0" v-on:click="deleteSelectedTodos" >Delete</div>
        <ul class="todo-list">
            <Todo v-on:click="selectTodo(todo.id)" v-for="todo in todos" :key="todo.id" :title="todo.title"
                :hours="todo.hours" :manager="todo.manager" />
        </ul>
        <div class="modal" v-if="showModal === true" >
            <h2>Add Todo</h2>
            <input type="text" v-model="newTodo.title" placeholder="Title" />
            <input type="number" v-model="newTodo.hours"  placeholder="Hours" />
            <input type="text" v-model="newTodo.manager"  placeholder="Manager" />
            <div class="error-msg">{{ errorMsg }}</div>
            <div v-on:click="toggleShowModal" >Cancel</div>
            <div v-on:click="AddTodo" >Add</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Todo from './Todo.vue'

const selectedTodoCount = ref(0)
const selectedTodos = ref([])
const showModal = ref(false)
const errorMsg = ref('')
const newTodo = ref({
    title: '',
    hours: 0,
    manager: ''
})



function selectTodo(todoId) {

    if (selectedTodos.value.includes(todoId)) {
        selectedTodos.value = selectedTodos.value.filter(id => id !== todoId)
        selectedTodoCount.value--
    } else {
        selectedTodos.value.push(todoId)
        selectedTodoCount.value++
    }
}

function AddTodo() {
    if (newTodo.value.title === '' || newTodo.value.hours === 0 || newTodo.value.manager === '') {
        errorMsg.value = 'All fields are required'
        return
    }
    if (typeof newTodo.value.hours !== 'number') {
        errorMsg.value = 'Hours must be a number'
        return
    }

    if (todos.value.filter(todo => todo.manager === newTodo.value.manager).length >= 3) {
        errorMsg.value = 'Manager has too much todos'
        return
    }
    if( todos.value.filter(todo => todo.title === newTodo.value.title).length > 0) {
        errorMsg.value = 'Title already exists'
        return
    }
    if (newTodo.value.hours < 0) {
        errorMsg.value = 'Hours must be greater than 0'
        return
    }
    if ((todos.value.filter(todo => todo.manager === newTodo.value.manager).reduce((acc, todo) => acc + todo.hours, 0) + newTodo.value.hours) > 10) {
        errorMsg.value = 'Manager has too much hours'
        return
    }

    todos.value.push({
        id: todos.value.length + 1,
        title: newTodo.value.title,
        hours: newTodo.value.hours,
        manager: newTodo.value.manager
    })
    newTodo.value = {
        title: '',
        hours: 0,
        manager: ''
    }
    toggleShowModal()
}   


function deleteSelectedTodos() {
    todos.value = todos.value.filter(todo => !selectedTodos.value.includes(todo.id))
    selectedTodos.value = []
    selectedTodoCount.value = 0
    console.log(todos.value)
}

function toggleShowModal() {
    showModal.value = !showModal.value
}

const todos = ref([
    { id: 1, title: 'Do the dishes', hours: 1, manager: 'John' },
    { id: 2, title: 'Take out the trash', hours: 0.5, manager: 'John' },
    { id: 3, title: 'Mow the lawn', hours: 2, manager: 'Dave' }
]);

</script>

<style>
.todo-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #3c3c3c;
    padding: 10px;
    width: 30%;
    background-color: rgb(246, 246, 246);
    border-radius: 4px;
    color: rgb(57, 57, 57);
    z-index: 100;
}
.modal input {
    display: block;
    margin: 10px 0;
}
.modal div:not(.error-msg) {
    display: inline-block;
    border: 1px solid #d7d7d7;
    cursor: pointer;
    padding: 4px;
    margin: 0 8px;
}
.error-msg {
    color: red;
}
</style>