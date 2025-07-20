<script setup lang="ts">
import { ref } from "vue";
import { httpGet } from "shape-rq";

const METHODS = ["GET", "POST", "PATCH", "DELETE", "PUT"] as const;

const api = ref<{
  title: string;
  url: string;
  methods: { title: string }[];
} | null>(null);

const getApi = async () => {
  const res = await httpGet<{
    title: string;
    url: string;
    methods: { title: string }[];
  }>("PrivateAPI", "1", {
    cache: true,
  });
  if (res) {
    api.value = res;
  }
};
getApi();

const memes = ref<
  | {
      id: number;
      title: string;
      image: string;
    }[]
  | null
>(null);

const getMemes = async () => {
  const res = await httpGet<{
    data: { id: number; title: string; image: string }[];
  }>("MemeAPI");
  if (res) {
    memes.value = res.data;
  }
};
</script>

<template>
  <section>
    <div class="main-container">
      <h1>Мемы</h1>
      <div class="api-info-container">
        <p>{{ api?.url }}</p>
        <div class="methods-container">
          <span class="allowed">GET</span>
          <span class="allowed">POST</span>
          <span class="allowed">PATCH</span>
          <span class="allowed">DELETE</span>
          <span class="denied">PUT</span>
          <button class="test-button" @click="getMemes">gimme</button>
        </div>
      </div>
    </div>
    <div class="memes-container">
      <div class="memes-card-container">
        <div class="meme-card" v-for="meme in memes">
          <img :src="meme.image" :alt="meme.title" />
          <p>{{ meme.title }}</p>
        </div>
      </div>
      <pre v-if="memes"><code>{{ JSON.stringify(memes, null, 2) }}</code></pre>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@mixin monoStyles {
  font-family: "JetBrains Mono", sans-serif;
  padding: 0.3rem 1rem;
  background-color: var(--mono-links-color);
  border: 1px solid var(--mono-links-border-color);
  border-radius: 0.625rem;
}

section {
  .main-container {
    margin-top: 80px;
  }
  padding: 3rem 3.25rem;
  font-family: "Monserrat", sans-serif;
  transition: ease-in;
  transition-duration: 0.2s;
  .api-info-container {
    margin-top: 1rem;
    max-width: fit-content;
    align-items: center;
    p {
      @include monoStyles;
    }
    .test-button {
      font-family: "Montserrat", sans-serif;
      padding: 0.5rem 1rem;
      background-color: var(--secondary-color);
      color: var(--primary-color);
      border: none;
      border-radius: 0.625rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      &:hover {
        color: var(--secondary-color);
        background-color: var(--hover-color);
      }
    }
    .methods-container {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-family: "Montserrat", sans-serif;
      .allowed {
        color: var(--allowed-methods-color);
      }
      .denied {
        color: var(--prohibited-methods-color);
      }
    }
  }
  .memes-container {
    margin-top: 1rem;
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto auto;
    .memes-card-container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto auto;
      gap: 2rem;
      .meme-card {
        width: fit-content;
        padding: 0.9rem;
        border: 1px solid var(--secondary-color);
        border-radius: 1.5rem 1.5rem 0.8rem 0.8rem;
        p {
          font-family: "Montserrat", sans-serif;
          color: var(--secondary-color);
          font-size: 1.125rem;
          margin-top: 0.5rem;
        }
        img {
          max-width: 19.875rem;
          height: auto;
          border-radius: 0.625rem;
        }
      }
    }
    pre {
      @include monoStyles;
      height: fit-content;
    }
  }
}
</style>
