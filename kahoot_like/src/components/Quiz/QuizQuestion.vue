<script setup lang="ts">
import { Question } from '../../types';
import Quizbutton from './QuizButton.vue';

const props = defineProps<Question>();
const emit = defineEmits(['submitAnswer']);

const submitAnswer = (answer: boolean) => {
    emit('submitAnswer', answer);
};

</script>

<template>
    <div class="question-container">
        <div class="question-title">{{ props.title }}</div>
        <div class="middle-container">
            <!-- <img v-if="props.image" :src="props.image" alt="Question image" /> -->
        </div>
        <div class="answers-container">
            <div class="question-answers">
                <div v-for="(answer, index) in props.answers" >
                    <Quizbutton class="answer" v-bind="answer" :id="index" @submitAnswer="answer => submitAnswer(answer)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.question-container {
  height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}
.question-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background-color: #f0f0f0;
    color: black;
    padding: 1rem 0;
    width: 100vw;
}

.answers-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.question-answers {
    max-width: 94vw;
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
