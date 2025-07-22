<script setup lang="ts"></script>

<template>
  <a href="https://github.com/INTELB0Y/PublicWebApi">GitHub</a>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
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
