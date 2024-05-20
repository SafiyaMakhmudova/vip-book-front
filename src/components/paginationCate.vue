<template>
  <div class="flex justify-between mx-auto w-[18%]">
    <button class="rounded-full bg-[#E9E9E9]" @click="RightPagination">
      <i class="bx bx-left-arrow-alt text-primary2 text-2xl px-2 py-1"></i>
    </button>
    <button
      class="rounded-full bg-[#E9E9E9] text-primary2 text-2xl px-2 py-1"
      @click="LeftPagination"
    >
      <i class="bx bx-right-arrow-alt"></i>
    </button>
  </div>
</template>

<script setup>
import { useBooks } from "@/features/products/composables/index";

const { LeftPagination, RightPagination } = useBooks();
</script>

<style lang="scss" scoped></style>
