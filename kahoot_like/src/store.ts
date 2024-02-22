import { defineStore } from "pinia"
import { ref } from "vue"

export const useQuestionsStore = defineStore('questions', () => {
    const quizz = ref({
        id: 0,
        title: "Europe Capitals",
        questions: [
            {
                id: 0,
                title: "What is the capital of France?",
                answers: [
                    { id: 0, text: "Paris", correct: true },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "New York", correct: false },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                id: 1,
                title: "What is the capital of Spain?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Madrid", correct: true },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                id: 2,
                title: "What is the capital of Italy?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Rome", correct: true },
                    { id: 3, text: "Madrid", correct: false }
                ]
            },
            {
                id: 3,
                title: "What is the capital of the United Kingdom?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: true },
                    { id: 2, text: "Rome", correct: false },
                    { id: 3, text: "Madrid", correct: false }
                ]
            },
            {
                id: 4,
                title: "What is the capital of Germany?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "Berlin", correct: true },
                    { id: 2, text: "Rome", correct: false },
                    { id: 3, text: "Madrid", correct: false }
                ]
            },
            {
                id: 5,
                title: "What is the capital of Portugal?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Rome", correct: false },
                    { id: 3, text: "Lisbon", correct: true }
                ]
            },
            {
                id: 6,
                title: "What is the capital of the Netherlands?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Amsterdam", correct: true },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                id: 7,
                title: "What is the capital of Belgium?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "Brussels", correct: true },
                    { id: 2, text: "Rome", correct: false },
                    { id: 3, text: "Madrid", correct: false }
                ]
            },
            {
                id: 8,
                title: "What is the capital of Switzerland?",
                answers: [
                    { id: 0, text: "Paris", correct: false },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Bern", correct: true },
                    { id: 3, text: "Rome", correct: false }
                ]
            },
            {
                id: 9,
                title: "What is the capital of Sweden?",
                answers: [
                    { id: 0, text: "Stockholm", correct: true },
                    { id: 1, text: "London", correct: false },
                    { id: 2, text: "Rome", correct: false },
                    { id: 3, text: "Madrid", correct: false }
                ]
            }
            
        ]
    })

    return { quizz }
})