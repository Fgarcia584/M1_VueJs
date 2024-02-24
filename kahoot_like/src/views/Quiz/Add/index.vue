<script setup lang="ts">

import { ref } from 'vue';
import { Question, Quiz } from '../../../types';
// import { addQuiz } from '@/composables/request';

const newQuizTitle: Quiz = ref({
    title: '',
});

const newQuizQuestions: Question[] = ref([]);

const numberOfQuestions = ref(2);


const submitQuiz = async () => {
    // await addQuiz(newQuiz);
    // newQuiz.questions.push({ title: '', answers: [{ text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }] })
};



</script>

<template>
    <div>
        <div class="container">
            <h1>Add Quiz</h1>
            <div class="quiz-form">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" id="title" v-model="newQuizTitle" />
                </div>
                <div class="form-group">
                    <label for="questions">Questions</label>
                    <div class="question-form" v-for="index in numberOfQuestions" :key="index">
                        <label for="question">Question {{ index }}</label>
                        <input type="text" id="question" v-model="newQuizQuestions[index - 1].title" />
                        <div class="answer-form" v-for="answerIndex in 4" :key="answerIndex">
                            <label for="answer">Answer {{ answerIndex }}</label>
                            <input type="text" id="answer" v-model="newQuizQuestions[index - 1].answers[answerIndex].text" />
                            <label for="correct">Correct</label>
                            <input type="checkbox" id="correct" v-model="newQuizQuestions[index - 1].answers[answerIndex].correct" />+
                        </div>
                    </div>
                </div>
                <button @click="submitQuiz">Submit</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>