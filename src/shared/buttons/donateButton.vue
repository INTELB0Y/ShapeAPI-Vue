<script setup lang="ts"></script>

<template>
  <button>donate</button>
</template>

<style scoped>
button {
  background-color: var(--primary-color);
  padding: 0.02rem 1rem;
  border-radius: var(--radius);
  border: 0.08rem solid var(--secondary-color);
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  color: var(--secondary-color);
  transition: ease-in-out;
  transition-duration: 0.2s;
  &:hover {
    background-color: var(--hover-color);
  }
}
</style>
