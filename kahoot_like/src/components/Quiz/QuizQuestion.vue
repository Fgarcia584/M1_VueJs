<script setup lang="ts">
import { useQuestionsStore } from '../../store'

const questionsStore = useQuestionsStore();
console.log(questionsStore.quizz.questions[0]);
</script>

<template>
    <div>
        <h1>QuizQuestion</h1>
        <div class="question-title">{{ questionsStore.quizz.questions[0].title }}</div>

        <div class="question-answers">
            <div class="answer" v-for="answer in questionsStore.quizz.questions[0].answers" :key="answer.id">
                <div>{{ answer.text }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
