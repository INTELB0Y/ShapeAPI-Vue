<script setup lang="ts">
import themeButton from "../buttons/themeButton.vue";
import LangButton from "../buttons/langButton.vue";
import LogoComponent from "../logoComponent.vue";
</script>

<template>
  <header class="header-root">
    <div class="header-container">
      <logo-component />
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li class="header-nav-item">
            <button>AuthAPI</button>
          </li>
          <li class="header-nav-item">
            <button>MemeAPI</button>
          </li>
        </ul>
        <div class="header-actions">
          <themeButton />
          <langButton />
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import "styles.module.scss";
</style>
