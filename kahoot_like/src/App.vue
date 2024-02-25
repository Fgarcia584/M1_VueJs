<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
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
