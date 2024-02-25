<script setup lang="ts">

import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user.ts';

const Email = ref('');
const Password = ref('');
const ConfirmPassword = ref('');
const ErrorMsg = ref('');
const router = useRouter();

const RegisterWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const userStore = useUserStore();
  signInWithPopup(auth, provider)
    .then(() => {
      if (auth.currentUser) {
        userStore.setUser(auth.currentUser);
        console.log(auth.currentUser);
        // router.push('/');
      }
    }).catch((error) => {
      handleErrors(error);
    });
};

const SubmitRegister = () => {
  if (Password.value === ConfirmPassword.value) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Email.value, Password.value)
      .then(() => {
        router.push('/login');

      })
      .catch((error) => {
        handleErrors(error);
      });
  } else {
    ErrorMsg.value = 'Passwords do not match';
  }
};

const handleErrors = (error: any) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      ErrorMsg.value = 'Email already in use';
      break;
    case 'auth/invalid-email':
      ErrorMsg.value = 'Invalid email';
      break;
    case 'auth/weak-password':
      ErrorMsg.value = 'Weak password';
      break;
    default:
      ErrorMsg.value = 'An error occurred';
      break;
  }
};


</script>

<template>
  <div>
    <div class="register-container">
      <div class="register-form">
        <div class="register-title">Register</div>
        <div class="register-inputs">
          <input type="text" placeholder="Email" class="register-input" v-model="Email" />
          <input type="password" placeholder="Password" class="register-input" v-model="Password" />
          <input type="password" placeholder="Confirm Password" class="register-input" v-model="ConfirmPassword" />
          <div v-if="ErrorMsg" class="error-container">{{ ErrorMsg }}</div>
          <button @click="SubmitRegister" class="register-button">Register</button>
          <button @click="RegisterWithGoogle" class="register-button">Register with Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem)
}

.register-title {
  font-size: 2rem;
  margin: 1rem;
}

.register-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(61, 61, 61);
  width: 24vw;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.register-inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-input {
  width: 20vw;
  height: 5vh;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-button {
  height: 5vh;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: rgb(61, 61, 61);
  line-height: 5px;
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