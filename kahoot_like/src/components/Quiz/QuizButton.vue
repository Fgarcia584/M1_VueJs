<script setup lang="ts">
import { Answer } from '../../types';

const props = defineProps<Answer>();
const emit = defineEmits(['submitAnswer']); 

const SubmitAnswer = () => {
  emit('submitAnswer', props.correct);
};

</script>

<template>
  <div>
    <div class="answer-button" @click="SubmitAnswer">
      <div>{{ props.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.answer-button {
  width: 46vw;
  height: 10vh;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 2rem 0;
}
</style>
