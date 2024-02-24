<script setup lang="ts">
import { ref } from 'vue';
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
import { Quiz } from '../../types';
import { defineProps } from 'vue';

const currentQuestion = ref(0);
const score = ref(0);

const submitAnswer = (answer: boolean) => {
    if (answer) {
        score.value += 1;
    }
    currentQuestion.value += 1;
};

const props = defineProps<Quiz>();



</script>

<template>
    <div>
        <h1>{{ props.title }}</h1>
        <div class="quiz-container">
            <div class="quiz-questions">
                <div class="question" v-for="(question, index) in props.questions" :key="index">
                    <div v-if="index === currentQuestion">
                        <QuizQuestion v-bind="question" :id="index" @submitAnswer="answer => submitAnswer(answer)" />
                    </div>
                </div>
            </div>
            <div v-if="currentQuestion >= props.questions.length">
                <h1>Score: {{ score }} / {{ props.questions.length }}</h1>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
