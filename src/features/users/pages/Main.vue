<template>
  <main class="px-10 h-screen mid:h-[550px] flex flex-col justify-evenly items-center mid:flex-row border-2  border-red-400  bg-gradient-to-t from-green-200 to-white">
    <div class="flex flex-1 flex-col border-4 justify-evenly">
      <h1 class="text-6xl text-text py-5 font-bold">
        Explore Our store the best of all the time
      </h1>
      <span class="text-[#666666] text-xl">Save up to 60% off on your first order</span>
      <baseButton class="bg-buttonColor py-3 px-12 mt-12 text-base font-semibold ">
        Shop now
<!-- buttondagi  arrow rasm ekan  -->
        <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
      </baseButton>
    </div>
    <div class="border-4 border-red-400  flex-1 justify-center items-center">
      <div class="relative m-auto">

        <img
        class="inline-block m-auto"
        src="@/assets/img/main/main_left_01.png"
        alt=""
        />
        <img class="flex mid:hidden  absolute bottom-0 top-[-50px] w-24 " src="@/assets/img/main/main_mobile_arrow.png" alt="" />
        <img class="hidden mid:flex absolute bottom-0 left-[-90px]" src="@/assets/img/main/Vector 26.png" alt="" />
      </div>
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
