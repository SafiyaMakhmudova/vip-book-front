<template>
  <n-result
    status="404"
    title="404 Not Found"
    description="You know life is always ridiculous."
  >
    <template #footer>
      <router-link to="/">
        <n-button>Find Something Funny</n-button></router-link
      >
    </template>
  </n-result>
</template>

<script setup>
import { NResult, NButton } from "naive-ui";
</script>

<style scoped></style>
