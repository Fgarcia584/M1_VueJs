<script setup lang="ts">
import { getQuizzes } from '@/composables/request';
import TheNavbar from '@/components/TheNavbar.vue';
import { Quiz } from 'src/types';
import { onBeforeMount, reactive, ref } from 'vue';

let isLoaded = ref(false);
let quizzes: Quiz[] = reactive([]);


onBeforeMount(async () => {
  isLoaded.value = true;

  quizzes = await getQuizzes();
  isLoaded.value = false;
});

</script>

<template>
  <div>
    <header>
      <TheNavbar />
    </header>
    <div v-if="isLoaded">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <div v-if="quizzes.length === 0">
        <h2>No quizzes found</h2>
      </div>
      <div v-else class="quizzes-container">
        <div v-for="quiz in quizzes" class="quiz-card">
          <img :src="quiz.thumbmail || `https://picsum.photos/140/140?sig=${Math.random()}`" alt="quiz thumbmail" />
          <h2>{{ quiz.title }}</h2>
          <router-link :to="'/quiz/' + quiz.id">Play</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quizzes-container {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.quiz-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: rgb(241, 241, 241);
  color: black;
  border: 1px solid rgb(0, 0, 0);
}

.quiz-card img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.quiz-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.quiz-card:hover {
  transform: scale(0.95);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgb(228, 228, 228);
  cursor: pointer;
}
</style>