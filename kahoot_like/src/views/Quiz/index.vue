<script setup lang="ts">

import { onBeforeMount, ref } from 'vue';
import type  { Quiz } from '@/types.ts';
import { getQuizById } from '@/composables/request';
import { defineProps } from 'vue';
import QuizFull from '@/components/Quiz/index.vue'

const props = defineProps({
    id: String
});

const id = props.id;

let isLoading = ref(false);
// let quiz
let data: Quiz = ref(null);

onBeforeMount( async () => {
    isLoading.value = true;
    await getQuizById(id ?? '').then((res) => {
        data = res;
        isLoading.value = false;
    }); 
});



</script>

<template>
   	<div v-if="isLoading">
		<p>Loading...</p>
	</div>
    <div v-else>
        <QuizFull v-bind="data" />
    </div>
</template>

<style scoped>
</style>