<script setup lang="ts">
import { computed, ref } from "vue";
import { httpGet, httpPost } from "shape-rq";
import { useLangStore } from "../app/stores/langStore.ts";
import type { ApiInfo } from "../shared/types.ts";

const METHODS = ["GET", "POST", "PATCH", "DELETE", "PUT"] as const;

const store = useLangStore();
const text = computed(() => store.text.memes);
const api = ref<ApiInfo | null>(null);
const allowedMethods = ref<string[]>([]);

const email = ref("user@public.ru");
const password = ref("asd123@!");
const result = ref<string>("");
const token = ref<string>("");

async function fetchApiInfo() {
  const res = await httpGet<ApiInfo>("PrivateAPI", "2", { cache: true });
  if (res) {
    api.value = res;
    allowedMethods.value = res.methods.map((method) => method.name);
  }
}
fetchApiInfo();

const show = ref(false);

const changeShow = () => {
  show.value = !show.value;
  console.log(show.value);
};

async function signup() {
  result.value = "";
  try {
    const res = await httpPost<{ tokens: { [key: string]: string } }>(
      "AuthAPI",
      "signup",
      {
        body: { email: email.value, password: password.value },
        xsrf: false,
      },
    );
    result.value = JSON.stringify(res, null, 2);
  } catch (e: any) {
    result.value = e?.message || "Ошибка регистрации";
  }
}

async function getToken() {
  result.value = "";
  try {
    const res = await httpPost<{ access: string; refresh: string }>(
      "AuthAPI",
      "token",
      {
        body: { email: email.value, password: password.value },
        xsrf: false,
      },
    );
    result.value = JSON.stringify(res, null, 2);
    token.value = res?.refresh || "";
  } catch (e: any) {
    result.value = e?.message || "Ошибка получения токена";
  }
}

async function refreshToken() {
  result.value = "";
  try {
    const res = await httpPost("AuthAPI", "token/refresh", {
      body: { refresh: token?.value },
      xsrf: false,
    });
    result.value = JSON.stringify(res, null, 2);
  } catch (e: any) {
    result.value = e?.message || "Ошибка обновления токена";
  }
}
</script>

<template>
  <section>
    <div class="main-container">
      <h1>AuthAPI</h1>
      <div class="api-info-container" v-if="api">
        <div @click="changeShow" class="selector">
          {{ api.url }}
        </div>
        <div class="options" v-if="show">
          <div>http://127.0.0.1:8000/public/auth/token</div>
          <div>http://127.0.0.1:8000/public/auth/refressh</div>
        </div>
        <div class="methods-container">
          <span
            v-for="method in METHODS"
            :key="method"
            :class="allowedMethods.includes(method) ? `allowed` : `denied`"
            >{{ method }}</span
          >
        </div>
      </div>
      <p v-else>{{ text.apiNotAvailable }}</p>
      <form class="auth-form" @submit.prevent>
        <label>
          Email:
          <input type="email" v-model="email" />
        </label>
        <label>
          Пароль:
          <input type="password" v-model="password" />
        </label>
        <div class="button-container">
          <button type="button" @click="signup">Зарегистрироваться</button>
          <button type="button" @click="getToken">Получить токен</button>
          <button type="button" @click="refreshToken">Обновить токен</button>
        </div>
      </form>
      <div v-if="result" class="result-block">
        <pre><code>{{ result }}</code></pre>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@mixin monoStyles {
  font-family: "JetBrains Mono", sans-serif;
  padding: 0.3rem 1rem;
  background-color: var(--mono-links-color);
  border: 1px solid var(--mono-links-border-color);
  border-radius: 0.625rem;
}

section {
  padding: 3rem 3.25rem;
  font-family: "Montserrat", sans-serif;
  .main-container {
    margin-top: 80px;
    h1 {
      color: var(--secondary-color);
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      label {
        font-size: 1rem;
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        input {
          font-family: "Montserrat", sans-serif;
          padding: 0.5rem 1rem;
          border-radius: var(--radius);
          border: 1px solid var(--mono-links-border-color);
          background: var(--primary-color);
          color: var(--text-color);
        }
      }
      .button-container {
        display: flex;
        gap: 1rem;
        button {
          font-family: "Montserrat", sans-serif;
          padding: 0.5rem 1rem;
          background-color: var(--secondary-color);
          color: var(--primary-color);
          border: none;
          border-radius: var(--radius);
          cursor: pointer;
          transition: background-color 0.2s ease-in-out;
          &:hover {
            color: var(--secondary-color);
            background-color: var(--hover-color);
          }
        }
      }
    }
    .result-block {
      margin-top: 2rem;
      pre {
        font-family: "JetBrains Mono", monospace;
        background: var(--mono-links-color);
        border: 1px solid var(--mono-links-border-color);
        border-radius: 0.625rem;
        padding: 1rem;
        color: var(--text-color);
        word-break: break-all;
        font-size: 0.95rem;
        white-space: pre-wrap;
      }
    }
  }
  .api-info-container {
    margin-top: 1rem;
    max-width: fit-content;
    align-items: center;
    .selector {
      @include monoStyles;
      transition: background-color 0.1s ease-in;
      &:hover {
        background-color: var(--primary-color);
      }
    }
    .options {
      @include monoStyles;
      margin-top: 0.2rem;
      border-radius: 0.625rem;
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
      justify-content: space-between;
      font-family: "Montserrat", sans-serif;
      .allowed {
        color: var(--allowed-methods-color);
      }
      .denied {
        color: var(--prohibited-methods-color);
      }
    }
  }
}
</style>
