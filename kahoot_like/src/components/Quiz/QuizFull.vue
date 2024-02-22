<script setup lang="ts">
import { ref } from 'vue';
import { useQuestionsStore } from '../../store'
import QuizQuestion from './QuizQuestion.vue';

const questionsStore = useQuestionsStore();
const currentQuestion = ref(0);
const score = ref(0);
const submitAnswer = (answer: boolean) => {
    if (answer) {
        score.value += 1;
    }
    currentQuestion.value += 1;
};
</script>

<template>
    <div>
        <h1>{{ questionsStore.quizz.title }}</h1>
        <div class="quiz-container">
            <div class="quiz-questions">
                <div class="question" v-for="question in questionsStore.quizz.questions" :key="question.id"
                    :id="question.id as unknown as string">
                    <div v-if="question.id === currentQuestion">
                        <QuizQuestion v-bind="question" @submitAnswer="answer => submitAnswer(answer)" />
                    </div>
                </div>
            </div>
            <div v-if="currentQuestion >= questionsStore.quizz.questions.length">
                <h1>Score: {{ score }} / {{ questionsStore.quizz.questions.length }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
