<script setup lang="ts"></script>

<template>
  <button>GitHub</button>
</template>

<style lang="scss" scoped>
button {
  color: var(--primary-color);
  background-color: var(--secondary-color);
  padding: 0.02rem 3rem;
  border-radius: var(--radius);
  border: 0.08rem solid transparent;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  transition: ease-in-out;
  transition-duration: 0.2s;
  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border-color: var(--secondary-color);
  }
}
</style>
