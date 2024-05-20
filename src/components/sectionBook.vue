<template>
  <div class="flex items-center justify-between">
    <h1 class="text-primary2 font-semibold text-3xl">
      <slot />
    </h1>
    <div class="flex gap-8">
      <a class="text-black cursor-pointer" :class="{active: activeeBook}"  @click="exchangeApiBook"
        >Books</a
      >

      <a class="text-black cursor-pointer" :class="{activee: activeeCanstavar}" @click="exchangeApiCanstavar"
        >Stationery goods</a
      >
      <a class="text-black cursor-pointer">Gifts</a>
    </div>
  </div>
</template>

<script setup>
import { useBooks } from "../features/products/composables/index";

const { activeeBook, activeeCanstavar, exchangeApiBook, exchangeApiCanstavar } = useBooks();
</script>

<style scoped>
.active {
  color:#43BB00
}
.activee {
  color:#43BB00
}

</style>
