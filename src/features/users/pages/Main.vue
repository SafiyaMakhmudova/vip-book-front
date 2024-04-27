<template>
  <main class="flex justify-between bg-gradient-to-t from-green-200 to-white">
    <div class="ml-14 w-[40%]">
      <h1 class="text-5xl text-text py-5 font-medium">
        Explore Our store the best of all the time
      </h1>
      <span class="text-[#666666]">Save up to 60% off on your first order</span>
      <baseButton class="bg-buttonColor py-3 px-12 mt-12">
        Shop now

        <i class="bx bx-up-arrow-alt"></i>
      </baseButton>
    </div>
    <div class="px-12 border-4">
      <img
        class="w-[70%] border-4"
        src="@/assets/img/main/Store_Screenshots_Book-1568632074.svg"
        alt=""
      />
      <img
        class="border-2 w-[30%]"
        src="@/assets/img/main/creative-composition-with-books-flower-removebg-preview.png"
        alt=""
      />
      <img class="w-[12%]" src="@/assets/img/main/Vector 26.png" alt="" />
    </div>
  </main>
  <section class="px-12 py-28">
    <div class="flex items-center justify-between">
      <h1 class="text-primary2 font-semibold text-3xl">Explore Categories</h1>
      <div class="flex gap-8">
        <a :class="{ 'text-red': isActive }" class="text-black" to="/">Books</a>

        <router-link to="/">Stationery goods</router-link>
        <router-link to="/">Gifts</router-link>
      </div>
    </div>

    <div v-if="loading"><Loading /></div>
    <div v-else>
      <div  class="flex gap-6">
      <categoryCard :items = 'categoryMaxList' />
      </div>
      <div class="flex justify-between mx-auto w-[18%]">
        <button class="rounded-full bg-[#E9E9E9]" @click="setPagination1">
          <i class="bx bx-left-arrow-alt text-primary2 text-2xl px-2 py-1"></i>
        </button>
        <button
          class="rounded-full bg-[#E9E9E9] text-primary2 text-2xl px-2 py-1"
          @click="setPagination2"
        >
          <i class="bx bx-right-arrow-alt"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import baseButton from "@/components/base/base-button.vue";
import categoryCard from "../../products/components/category-card";
import { useCategoryMax } from "@/features/categoryMaxs/composables/index";
import Loading from "@/components/loading.vue";
const { loading, categoryMaxList, setPagination1, setPagination2 } = useCategoryMax();

</script>

<style scoped>
.router-link-exact-active {
  color: #43BB00;
}
</style>
