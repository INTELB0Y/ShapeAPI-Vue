<script setup lang="ts">
import { useLangStore } from "../../app/stores/langStore.ts";

const store = useLangStore();

const changeLanguage = () => {
  store.changeLang();
};
</script>

<template>
  <button class="langChange" @click="changeLanguage">
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8833 25.6667L19.1916 11.6667H21.6416L26.95 25.6667H24.5L23.2458 22.1083H17.5875L16.3333 25.6667H13.8833ZM4.66663 22.1667L3.03329 20.5333L8.92496 14.6417C8.2444 13.9611 7.62704 13.1833 7.07288 12.3083C6.51871 11.4333 6.00829 10.4417 5.54163 9.33333H7.99163C8.38052 10.0917 8.7694 10.7528 9.15829 11.3167C9.54718 11.8806 10.0138 12.4444 10.5583 13.0083C11.2 12.3667 11.8659 11.4674 12.5562 10.3104C13.2465 9.15347 13.7666 8.05 14.1166 7H1.16663V4.66667H9.33329V2.33333H11.6666V4.66667H19.8333V7H16.45C16.0416 8.4 15.4291 9.83889 14.6125 11.3167C13.7958 12.7944 12.9888 13.9222 12.1916 14.7L14.9916 17.5583L14.1166 19.95L10.5583 16.3042L4.66663 22.1667ZM18.3166 20.0667H22.5166L20.4166 14.1167L18.3166 20.0667Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<style scoped>
.langChange {
  color: var(--secondary-color);
}
</style>
