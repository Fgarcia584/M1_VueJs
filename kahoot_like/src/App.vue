<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
import { useAuthStore } from '@/stores/user';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});

</script>

<template>
  <header>
    <TheNavbar />
  </header>
  <main>
    <router-view />
  </main>

</template>

<style scoped></style>
