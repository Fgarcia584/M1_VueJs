<script setup lang="ts">
import { ref } from 'vue';
import { useQuestionsStore } from '../../store'
import QuizQuestion from './QuizQuestion.vue';

const questionsStore = useQuestionsStore();
const currentQuestion = ref(1);
</script>

<template>
    <div>
        <h1>Quizz Full</h1>
        <div class="quiz-container">
            <div class="quiz-questions">
                <div class="question" v-for="question in questionsStore.quizz.questions" :key="question.id"
                    :id="question.id as unknown as string">
                    <div v-if="question.id === currentQuestion">
                        <QuizQuestion v-bind="question"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
