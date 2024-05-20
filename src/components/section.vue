<template>
  <div class="flex items-center justify-between">
    <h1 class="text-primary2 font-semibold text-3xl">
      <slot />
    </h1>
    <div class="flex gap-8">
      <a
        class="text-black cursor-pointer"
        :class="{ active: activeeBook }"
        @click="exchangeApi"
        >Books</a
      >

      <a
        :class="{ activee: activeeCanstavar }"
        class="text-black cursor-pointer"
        @click="exchangeApi2"
        >Stationery goods</a
      >
      <a class="text-black cursor-pointer">Gifts</a>
    </div>
  </div>
</template>

<script setup>
import { useCategoryMax } from "@/features/categoryMaxs/composables/index";

const { activeeBook, activeeCanstavar, exchangeApi, exchangeApi2 } =
  useCategoryMax();
</script>

<style scoped>
.active {
  color: #43bb00;
}
.activee {
  color: #43bb00;
}
</style>
