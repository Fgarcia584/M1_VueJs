<script setup lang="ts">
import { Question } from '../../types';
import QuizCard from './QuizCard.vue';

const props = defineProps<Question>();
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
                <div v-for="(answer, index) in props.answers" >
                    <QuizCard class="answer" v-bind="answer" :id="index" @submitAnswer="answer => submitAnswer(answer)"/>
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

.answer[id="0"] {
  background-color: rgb(181, 0, 0);
}

.answer[id="0"]:hover {
  background-color: rgb(255, 0, 0);
}

.answer[id="1"] {
  background-color: rgb(0, 0, 171);
}

.answer[id="1"]:hover {
  background-color: rgb(103, 103, 255);
}

.answer[id="2"] {
  background-color: rgb(196, 134, 0);
}

.answer[id="2"]:hover {
  background-color: rgb(255, 225, 0);
}

.answer[id="3"] {
  background-color: green;
}

.answer[id="3"]:hover {
  background-color: rgb(0, 255, 0);
}
</style>
