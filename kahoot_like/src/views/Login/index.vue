<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const Email = ref('');
const Password = ref('');

const router = useRouter();
const ErrorMsg = ref('');

const SubmitLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email.value, Password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            router.push('/home');
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/user-not-found':
                    ErrorMsg.value = 'User not found';
                    break;
                case 'auth/wrong-password':
                    ErrorMsg.value = 'Wrong password';
                    break;
                case 'auth/invalid-email':
                    ErrorMsg.value = 'Invalid email';
                    break;
                default:
                    ErrorMsg.value = 'An error occurred';
                    break;
            }
        });
};

</script>

<template>
    <div>
        <div class="login-container">
            <div class="login-form">
                <div class="login-title">Login</div>
                <div class="login-inputs">
                    <input type="text" placeholder="Email" class="login-input" v-model="Email" />
                    <input type="password" placeholder="Password" class="login-input" v-model="Password" />
                    <div v-if="ErrorMsg" class="error-container">{{ ErrorMsg }}</div>
                    <button @click="SubmitLogin" class="login-button">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>