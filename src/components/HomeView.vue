<script setup lang="ts">
import GithubButton from "../shared/buttons/githubButton.vue";
import ShapesComp from "../shared/svg-components/shapesComp.vue";
import { useLangStore } from "../app/stores/langStore.ts";
import DonateButton from "../shared/buttons/donateButton.vue";

const store = useLangStore();

const text = store.text.main;
</script>

<template>
  <section>
    <div class="main-container">
      <div>
        <div class="text-container">
          <h1>{{ text.h1 }}</h1>
          <p>{{ text.p }}</p>
        </div>
        <div class="button-container">
          <github-button />
          <donate-button />
        </div>
        <p class="engine">
          Powered by <a href="https://github.com/INTELB0Y/ShapeAPI-Vue">Vue</a>
        </p>
      </div>
      <shapes-comp />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  .main-container {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
  }
  padding: 8rem 3.25rem;
  .engine {
    font-family: "Montserrat", sans-serif;
    color: var(--text-color);
    font-size: 1rem;
    margin-top: 2rem;
    a {
      color: var(--text-color);
      text-decoration: none;
      transition: ease-in-out;
      transition-duration: 0.2s;
      cursor: pointer;
      padding: 0 0.125rem;
      border-radius: 10%;
      &:hover {
        background-color: var(--hover-color);
      }
    }
  }
  .button-container {
    display: flex;
    gap: 1rem;
  }
  .text-container {
    transition: ease-out;
    transition-duration: 0.2s;
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
