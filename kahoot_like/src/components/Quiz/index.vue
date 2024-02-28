<script setup lang="ts">
import { ref } from 'vue';
import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
import { Quiz } from '../../types';
import { defineProps } from 'vue';

const currentQuestion = ref(0);
const score = ref(0);
const isLoaded = ref(false);
const animation_step = ref(0);
const countdown_value = ref(3);
const submitAnswer = (answer: boolean) => {
    if (answer) {
        score.value += 1;
    }
    currentQuestion.value += 1;
};

const props = defineProps<Quiz>();

setTimeout(() => {
    animation_step.value = 1;
}, 1200);
setTimeout(() => {
    setInterval(() => {
        countdown_value.value -= 1;

        if (countdown_value.value === 0) {
            isLoaded.value = true;
        }
    }, 2000);
}, 1200);

</script>

<template>
    <div>
        <div v-if="isLoaded === false" class="animations-conatiner">
            <div v-if="animation_step === 0" class="quiz-title-container">{{ props.title }}</div>
            <div v-if="animation_step === 1" class="countdown-container">
                <div class="countdown-background"></div>
                <div class="countdown-value">{{ countdown_value }}</div>
            </div>
        </div>

        <div v-else class="quiz-container">
            <div class="quiz-questions">
                <div class="question" v-for="(question, index) in props.questions" :key="index">
                    <div v-if="index === currentQuestion">
                        <QuizQuestion v-bind="question" :id="index" @submitAnswer="answer => submitAnswer(answer)" />
                    </div>
                </div>
            </div>
            <div v-if="currentQuestion >= props.questions.length">

                <div class="final_container">
                    <div class="background">
                        <h1>Quiz Finished!</h1>
                        <div class="final_score">
                            <h1>Score: {{ score }} / {{ props.questions.length }}</h1>
                        </div>
                        <router-link class="btn" to="/">Go back to home</router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animations-conatiner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
    height: calc(100vh - 10rem);
}

.quiz-title-container {
    font-size: 5rem;
    font-weight: bold;
    background-color: #ffffff;
    color: black;
    border-radius: 0.5rem;
    padding: 1rem;
    animation: 0.4s title-lineUp ease-in-out;

}

.countdown-background {
    background-color: #680056;
    height: 8rem;
    width: 8rem;
    border-radius: 0.5rem;
    padding: 1rem;
    animation: 6s rotate ease-in-out;
}

.countdown-value {
    font-size: 5rem;
    font-weight: bold;
    height: 8rem;
    width: 8rem;
    color: rgb(255, 255, 255);
    transform: translateY(-8rem);
}

.final_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: calc(100vh - 10rem);

}
.background {
    background-color: #680056;
    padding: 2rem;
    border-radius: 0.5rem;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}
.btn {
    padding: 1rem 2rem;
    border: #ffffff 2px solid;
    color: white;
    border-radius: 0.5rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

.btn:hover {
    background-color: #ffffff;
    color: #680056
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(45deg);
    }

    75% {
        transform: rotate(90deg);
    }

    100% {
        transform: rotate(135deg);
    }
}

@keyframes title-lineUp {
    0% {
        opacity: 0;
        transform: scale(0);
    }

    20% {
        opacity: 0;
    }

    90% {
        opacity: 1;
        transform: scale(1.12);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
