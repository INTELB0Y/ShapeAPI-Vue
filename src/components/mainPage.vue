<script setup lang="ts">
import GithubButton from "../shared/buttons/githubButton.vue";
</script>

<template>
  <section>
    <div>
      <div class="text-container">
        <h1>Бесплатный учебный REST API для работы с JSON</h1>
        <p>Практика работы с JSON для вашего frontend’а</p>
      </div>
      <github-button />
    </div>
    <img src="/smth.svg" alt="smth" />
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 8rem 3.25rem;
  display: flex;
  justify-content: space-between;
  .text-container {
    h1 {
      font-family: "Montserrat", sans-serif;
      color: var(--secondary-color);
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
      max-width: 25ch;
    }
    p {
      font-family: "Montserrat", sans-serif;
      color: var(--text-color);
      font-size: 1rem;
      margin-bottom: 2rem;
      max-width: 40ch;
    }
  }
}
</style>
