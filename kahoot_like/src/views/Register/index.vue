<script setup lang="ts">

import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Email = ref('');
const Password = ref('');
const ConfirmPassword = ref('');
const ErrorMsg = ref('');


const SubmitRegister = () => {
  console.log(Email.value, Password.value, ConfirmPassword.value);
  if (Password.value === ConfirmPassword.value) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, Email.value, Password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
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
      });
  } else {
    ErrorMsg.value = 'Passwords do not match';
  }
};


</script>

<template>
  <div>
    <div class="register-container">
      <div class="register-form">
        <div class="register-title">Register</div>
        <div class="register-inputs">
          <input type="text" placeholder="Email" class="register-input" v-model="Email"/>
          <input type="password" placeholder="Password" class="register-input" v-model="Password" />
          <input type="password" placeholder="Confirm Password" class="register-input" v-model="ConfirmPassword" />
          <div v-if="ErrorMsg" class="error-container">{{ ErrorMsg }}</div>
          <button @click="SubmitRegister" class="register-button">Register</button>
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
  height: 100vh;
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