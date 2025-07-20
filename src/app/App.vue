<script setup lang="ts">
import Header from "../shared/header/Header.vue";
import HomeView from "../views/HomeView.vue";
</script>

<template>
  <Header />
  <!--  <HomeView />-->
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@import "../shared/styles/main.scss";
</style>
