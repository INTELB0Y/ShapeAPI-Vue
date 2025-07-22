<script setup lang="ts">
import { ref, computed } from "vue";
import { httpGet } from "shape-rq";
import { useLangStore } from "../app/stores/langStore.ts";
import type { ApiInfo } from "../shared/types.ts";

const METHODS = ["GET", "POST", "PATCH", "DELETE", "PUT"] as const;

type Meme = {
  id: number;
  title: string;
  image: string;
};

const api = ref<ApiInfo | null>(null);
const allowedMethods = ref<string[]>([]);
const memes = ref<Meme[] | null>(null);

const store = useLangStore();
const text = computed(() => store.text.memes);

async function fetchApiInfo() {
  const res = await httpGet<ApiInfo>("PrivateAPI", "1", { cache: true });
  if (res) {
    api.value = res;
    allowedMethods.value = res.methods.map((method) => method.name);
  }
}

async function fetchMemes() {
  const res = await httpGet<{ data: Meme[] }>("MemeAPI", "", { cache: true });
  if (res) {
    memes.value = res.data;
  }
}

fetchApiInfo();

const getElements = fetchMemes;
</script>

<template>
  <section>
    <div class="main-container">
      <h1>{{ text.h1 }}</h1>
      <div class="api-info-container" v-if="api">
        <p>{{ api.url }}</p>
        <div class="methods-container">
          <span
            v-for="method in METHODS"
            :key="method"
            :class="allowedMethods.includes(method) ? `allowed` : `denied`"
            >{{ method }}</span
          >
          <button class="test-button" @click="getElements">gimme</button>
        </div>
      </div>
      <p v-else>{{ text.apiNotAvailable }}</p>
    </div>
    <TransitionGroup name="fade" tag="div" class="memes-container">
      <div class="memes-card-container" key="memes-card-container">
        <div class="meme-card" v-for="meme in memes" :key="meme.id">
          <img :src="meme.image" :alt="meme.title" />
          <p>{{ meme.title }}</p>
        </div>
      </div>
      <pre v-if="memes"><code>{{ JSON.stringify(memes, null, 2) }}</code></pre>
    </TransitionGroup>
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

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active {
  transition: all 0.5s ease;
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
