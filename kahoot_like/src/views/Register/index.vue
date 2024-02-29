<script setup lang="ts">

import { ref } from 'vue';
// import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/user';

const Email = ref('');
const Password = ref('');
const ConfirmPassword = ref('');
const ErrorMsg = ref('');

// const router = useRouter();
const authStore = useAuthStore();

const RegisterWithGoogle = async () => {
    await authStore.loginUserWithGoogle().then(() => {
    });
};

const SubmitRegister = () => {
  if (Password.value === ConfirmPassword.value) {
    authStore.Register(Email.value, Password.value);
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