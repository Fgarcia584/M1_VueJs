<script setup lang="ts">
import { useAuthStore } from '@/stores/user';

import { ref } from 'vue';


const authStore = useAuthStore();

let isLogged = ref(false);


</script>

<template>
    <div class="navbar">
        <div class="navbar__logo">
            <router-link to="/">
                Kahoot_like
            </router-link>
        </div>
        <div class="navbar__links">
            <router-link to="/quiz/add">Create Quiz</router-link>
            <router-link to="/quiz/mIWK3itcyouTP75ErqtW">Quizzes</router-link>
            <div>
                <button @click="authStore.logoutUser()">Logout</button>
            </div>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
    </div>
</template>


<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f2f2f2;
    color: #000;
    max-width: 100vw;
}

.navbar__logo {
    font-size: 1.5rem;
    color: rgb(107, 0, 89);
    font-weight: 600;
}

.navbar__links {
    display: flex;
    gap: 1rem;
}

.navbar__links a {
    text-decoration: none;
    color: #000;
}</style>