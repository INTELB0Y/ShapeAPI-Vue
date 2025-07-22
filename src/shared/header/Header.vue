<script setup lang="ts">
import themeButton from "../svg-components/themeButton.vue";
import LangButton from "../svg-components/langButton.vue";
import LogoComponent from "../svg-components/logoComponent.vue";
</script>

<template>
  <header class="header-root">
    <div class="header-container">
      <logo-component />
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li class="header-nav-item">
            <RouterLink to="/auth-api">AuthAPI</RouterLink>
          </li>
          <li class="header-nav-item">
            <RouterLink to="/meme-api">MemeAPI</RouterLink>
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
