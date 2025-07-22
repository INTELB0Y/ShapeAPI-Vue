<script setup lang="ts">
import themeButton from "../../components/svg-components/themeButton.vue";
import LangButton from "../../components/svg-components/langButton.vue";
import LogoComponent from "../../components/svg-components/logoComponent.vue";
</script>

<template>
  <header class="header-root">
    <div class="header-container">
      <logo-component />
      <nav class="header-nav">
        <div class="header-nav-list">
          <RouterLink to="/auth-api" class="header-nav-item">
            AuthAPI
          </RouterLink>
          <RouterLink to="/meme-api" class="header-nav-item">
            MemeAPI
          </RouterLink>
        </div>
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
