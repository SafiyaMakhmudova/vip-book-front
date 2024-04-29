<template>
  <div class="flex items-center justify-between">
    <h1 class="text-primary2 font-semibold text-3xl">
      <slot />
    </h1>
    <div class="flex gap-8">
      <a class="text-black cursor-pointer" to="/" @click="exchangeApi">Books</a>

      <router-link to="/" @click="exchangeApi2">Stationery goods</router-link>
      <router-link to="/">Gifts</router-link>
    </div>
  </div>
</template>

<script setup>
import { useCategoryMax } from "@/features/categoryMaxs/composables/index";

const { exchangeApi, exchangeApi2 } = useCategoryMax();
</script>

<style scoped></style>
