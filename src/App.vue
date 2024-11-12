<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/navigation/SideBar.vue'
</script>

<template>
  <main class="flex flex-col lg:flex-row">
    <SideBar />
    <RouterView />
  </main>
</template>

<style scoped></style>
