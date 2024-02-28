<script setup lang="ts">
import { ref } from 'vue';
import { Question } from '../../types';
import Quizbutton from './QuizButton.vue';

const props = defineProps<Question>();
const emit = defineEmits(['submitAnswer']);

let countdown_value = ref(25);


let countdown_interval = setInterval(() => {
  countdown_value.value -= 1;

  if (countdown_value.value === 0) {
    emit('submitAnswer', false);
  }
}, 1000);



const submitAnswer = (answer: boolean) => {
  emit('submitAnswer', answer);
  clearInterval(countdown_interval);
};

</script>

<template>
  <div class="question-container">
    <div class="question-title">{{ props.title }}</div>
    <div class="middle-container">

      <div class="left_column">
        <div class="countdown_container">
          <div class="countdown-background"></div>
          <div class="countdown-value">{{ countdown_value }}</div>
        </div>
      </div>

      <div class="middle_column">

      </div>
    </div>
    <div class="right_column"></div>

    <div class="answers-container">
      <div class="question-answers">
        <div v-for="(answer, index) in props.answers">
          <Quizbutton class="answer" v-bind="answer" :id="index" @submitAnswer="answer => submitAnswer(answer)" />
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
  height: 7vh;
}

.middle_column {
  width: 86vw;
}

.answers-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.question-answers {
  max-width: 94vw;
  height: 24vh;
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

.countdown-background {
  background-color: #680056;
  height: 8rem;
  width: 8rem;
  border-radius: 0.5rem;
  padding: 1rem;
  animation: 6s rotate ease-in-out infinite;
}

.countdown-value {
  font-size: 5rem;
  font-weight: bold;
  height: 8rem;
  width: 8rem;
  color: rgb(255, 255, 255);
  transform: translateY(-8rem);
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(90deg);
  }
}
</style>
