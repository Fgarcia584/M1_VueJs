<script setup lang="ts">
import { ref } from 'vue';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/user';

const Email = ref('');
const Password = ref('');

const router = useRouter();
const ErrorMsg = ref('');
const userStore = useAuthStore();

const SubmitLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Email.value, Password.value)
        .then((result) => {
            userStore.setUser(result.user);
            router.push('/');
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
                    console.log(error);
                    ErrorMsg.value = 'An error occurred';
                    break;
            }
        });
};

const LoginwithGoogle = async () => {
    await userStore.loginUserWithGoogle().then(() => {
        // router.push('/');
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
                    <button @click="LoginwithGoogle" class="login-button">Login with Google</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 5rem)
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background-color: rgb(61, 61, 61);
    border: 1px solid #ccc;
}

.login-title {
    font-size: 2rem;
    margin: 1rem;
}

.login-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-input {
    width: 20vw;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-button {
    width: 20vw;
    padding: 1rem;
    margin: 1rem;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.login-button:hover {
    background-color: rgb(0, 0, 0);
}

.error-container {
    border: 1px solid red;
    border-radius: 5px;
    background-color: red;
    width: 20vw;
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
}
</style>