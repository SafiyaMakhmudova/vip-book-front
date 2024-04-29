<template>
  <div class="flex items-center justify-between">
    <h1 class="text-primary2 font-semibold text-3xl">
      <slot />
    </h1>
    <div class="flex gap-8">
      <a class="text-black cursor-pointer" to="/" @click="exchangeApiBook"
        >Books</a
      >

      <router-link to="/" @click="exchangeApiCanstavar"
        >Stationery goods</router-link
      >
      <router-link to="/">Gifts</router-link>
    </div>
  </div>
</template>

<script setup>
import { useBooks } from "../features/products/composables/index";

const { exchangeApiBook, exchangeApiCanstavar } = useBooks();
</script>

<style scoped></style>
