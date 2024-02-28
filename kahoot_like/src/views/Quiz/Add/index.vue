<script setup lang="ts">

import { reactive, ref } from 'vue';
import { addQuiz } from '@/composables/request';

let current_question = ref(0);

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

const setCurrentQuestion = (index: number) => {
    current_question.value = index;
};

const addQuestion = () => {
    newQuiz.questions.push({ title: '', answers: [{ text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }, { text: '', correct: false }] });
};


const submitQuiz = async () => {
    await addQuiz(newQuiz);
    console.log(newQuiz);
};

</script>

<template>
    <div>
        <div class="container">
            <div class="header">
                <div class="left_part">
                    <router-link class="kahoot_btn" to="/">Kahoot_like</router-link>
                    <input type="text" id="title" v-model="newQuiz.title" placeholder="Quiz's name" />
                    <input type="text" id="title" v-model="newQuiz.category" placeholder="Quiz's categories" />
                </div>

                <div class="right_part">
                    <button class="submit_btn" @click="submitQuiz">Submit</button>
                </div>
            </div>


            <div class="main_part">


                <div class="left_column">
                    <button class="add_qestion_btn" @click="addQuestion">Add Question </button>
                    <div class="" v-for="index in newQuiz.questions.length" :key="index">
                        <div @click="setCurrentQuestion(index-1)" class="question_selector">Question {{ index }}</div>
                    </div>
                </div>


                <div class="main_column">
                    <div class="question-form-container" v-for="(question, index) in newQuiz.questions " :key="index">
                        <div v-if="current_question === index" class="question-form">
                            
                            <div class="question_title_container">
                                <input class="question_title" type="text" id="question" v-model="question.title"
                                    placeholder="Write your question" />
                            </div>


                            <div class="media_part"></div>


                            <div class="question_part">
                                <div class="answer-form" v-for="(answer, answerIndex) in question.answers"
                                    :key="answerIndex">
                                    <div class="color"></div>
                                    <input class="answer_input" type="text" id="answer" v-model="answer.text"
                                        :placeholder="'Answer Number ' + (answerIndex + 1)" />
                                    <input class="answer_correct" type="checkbox" id="correct" v-model="answer.correct" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_column"></div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #daf4ff;
    height: 100vh;
}


.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: rgb(255, 255, 255);
    height: 4vh;
}

.kahoot_btn {
    color: rgb(107, 0, 89);
    font-weight: 600;
    padding: 8px 16px;
    font-size: large;
    cursor: pointer;
}

.submit_btn {
    color: white;
    background-color: rgb(0, 78, 151);
    font-weight: 600;
    padding: 8px 16px;
    font-size: large;
    cursor: pointer;
    margin-right: 2rem;
    border-radius: 5px;
}


.main_part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 100vw;
    height: 96vh;
}

.left_column,
.right_column {
    width: 8vw;
    height: 100%;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

.add_qestion_btn {
    width: 6vw;
    height: 4vh;
    padding: 1rem;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    margin: 1rem 0;
    background-color: #0033db;
    text-align: center;
    cursor: pointer;
}

.question_selector{
    width: 7vw;
    height: 4vh;
    padding: 1rem;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1rem;
    margin: 1rem 0;
    background-color: #41b9ff;
    text-align: center;
    cursor: pointer;

}



/* .main_column {
    height: 96vh;
}
.question-form-container {
    height: 96vh;
} */
.question-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 84vw;
    height: 96vh;
}

.question_title {
    width: 80vw;
    height: 5vh;
    padding: 1rem;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    margin: 2rem 0;
    background-color: #f0f0f0;
    text-align: center;
    color: black;
}

.question_title:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.question_part {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 80vw;
    max-width: 80vw;
    height: 24vh;
    margin: 2rem 0;
}

.answer-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e7e7e7;
    width: 39vw;
    height: 10vh;
    border-radius: 5px;
    background-color: #f0f0f0;
}

.answer_input {
    width: 28vw;
    height: 5vh;
    padding: 1rem;
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    margin: 2rem 0;
    background-color: #f0f0f0;
    text-align: left;
    color: black;
}

.answer_input:focus {
    outline: none;
}

.answer_correct {
    width: 0.8vw;
    padding: 1rem;
    border-radius: 5px;
    font-weight: 700;
    font-size: 2rem;
    margin: 1rem;
    background-color: #f0f0f0;
    text-align: left;
    color: black;
}

.color {
    width: 2vw;
    height: 10vh;
    border-radius: 5px;
    margin-left: 0.8rem;
    scale: 0.7;

}

.question_part .answer-form:nth-child(1) .color {
    background-color: #d30000;
}

.question_part .answer-form:nth-child(2) .color {
    background-color: #0015d1;
}

.question_part .answer-form:nth-child(3) .color {
    background-color: #f0cc00;
}

.question_part .answer-form:nth-child(4) .color {
    background-color: #00b600;
}
</style>