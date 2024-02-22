<script setup lang="ts">
import { question } from '../../types';
import QuizCard from './QuizCard.vue';

const props = defineProps<question>();
const emit = defineEmits(['submitAnswer']);

const submitAnswer = (answer: boolean) => {
    emit('submitAnswer', answer);
};

</script>

<template>
    <div>
        <div class="question-title">{{ props.title }}</div>

        <div class="answers-container">
            <div class="question-answers">
                <div class="answer" v-for="answer in props.answers" :key="answer.id">
                    <QuizCard v-bind="answer" @submitAnswer="answer => submitAnswer(answer)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background-color: #ccc;
    color: black;
    padding: 1rem 0;
}

.answers-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.question-answers {
    max-width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

</style>
