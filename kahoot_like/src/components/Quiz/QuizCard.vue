<script setup lang="ts">
import { answer } from '../../types';

const props = defineProps<answer>();

</script>

<template>
  <div>
    <div class="answer" :id="props.id as unknown as string">
      <div>{{ props.text }}</div>
    </div>
  </div>
</template>

<style scoped>
.answer {
  width: 44vw;

  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: left;
  margin: 2rem 0;
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
