<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/user';
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => {
  authStore.init();
});

</script>

<template>
  <div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
