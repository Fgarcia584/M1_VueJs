import { defineStore } from "pinia"
import { ref } from "vue"

export const useQuestionsStore = defineStore('questions', () => {
    const quizz = ref({
        questions: [
            {
                title: "What is the capital of France?",
                answers: [
                    { id: 0, text: "Paris", correct: true },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "New York", correct: false },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                title: "What is the capital of Italy?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Rome", correct: true },
                    { id: 3, text: "New York", correct: false }
                ]
            },
            {
                title: "What is the capital of England?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: true },
                    { id: 2, text: "New York", correct: false },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                title: "What is the capital of the United States?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "New York", correct: false },
                    { id: 3, text: "Washington", correct: true }
                ]
            }
           
        ]
    })

    return { quizz }
})