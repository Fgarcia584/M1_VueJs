<script setup lang="ts">

import { reactive } from 'vue';
// import { NewQuiz } from '../../../types';
import { addQuiz } from '@/composables/request';


// const newQuizQuestions: Question[] = ref([]);

// export interface NewQuiz {
//     title: string;
//     questions: [
//         {
//             title: string;
//             answers: [
//                 {
//                     text: string;
//                     correct: boolean;
//                 }
//             ]
//         }
//     ]
// }

const newQuiz = reactive({
    title: '',
    category: '',
    questions: [
        {
            title: '',
            answers: [
                {
                    text: '',
                    correct: false
                },
                {
                    text: '',
                    correct: false
                },
                {
                    text: '',
                    correct: false
                },
                {
                    text: '',
                    correct: false
                }
            ]
        }
    ]
});

// const numberOfQuestions = ref(2);


const submitQuiz = async () => {
    await addQuiz(newQuiz);
    console.log(newQuiz);
};



</script>

<template>
    <div>
        <div class="container">
            <div class="quiz-form">
                <h1>Add Quiz</h1>
                <div class="form-group">
                    <input type="text" id="title" v-model="newQuiz.title" placeholder="Quiz's name" /> |
                    <input type="text" id="title" v-model="newQuiz.category" placeholder="Quiz's categories" />
                </div>
                <div class="form-group">
                    <label for="questions">Questions</label>
                    <div class="question-form" v-for="(question, index) in newQuiz.questions " :key="index">
                        <label for="question">Question {{ index + 1 }}</label>
                        <input type="text" id="question" v-model="question.title" placeholder="Write your question" />
                        <div class="answer-form" v-for="(answer, answerIndex) in question.answers" :key="answerIndex">
                            <input type="text" id="answer" v-model="answer.text" placeholder="Answer Number {{ answerIndex + 1 }}"/>
                            <label for="correct">Correct Anwser ? </label>
                            <input type="checkbox" id="correct" v-model="answer.correct"/>
                        </div>
                    </div>
                </div>
                <button @click="newQuiz.questions.push({ title: '', answers: [{ text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }] })"> Add Question  </button>
                <button @click="submitQuiz">Submit</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 5rem);
}

.quiz-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(61, 61, 61);
    color: white;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 2rem;
}

.form-group {
    margin: 1rem 0;
}

.question-form {
    margin: 1rem 0;
}

.answer-form {
    margin: 1rem 0;
}


</style>