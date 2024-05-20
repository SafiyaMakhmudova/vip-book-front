<template>
  <main
    class="px-10 mt-28   h-screen mid:h-[350px] flex flex-col justify-evenly items-center mid:flex-row bg-gradient-to-t from-green-200 to-white  "
  >
    <!-- 1-section -->
    <div class="flex flex-1 flex-col justify-evenly ">
      <h1 class="text-5xl text-text py-5 font-bold">
        Explore Our store the best of all the time
      </h1>
      <span class="text-[#666666] text-xl"
        >Save up to 60% off on your first order</span
      >
      <baseButton
        class="bg-buttonColor flex gap-2 items-center py-2 px-12 mt-10 text-base rounded-xl font-semibold"
      >
        Shop now
        <!-- buttondagi arrow rasm ekan -->
        <img src="@/assets/vectors/call_received.png" alt="">
      </baseButton>
    </div>
    <div class="flex-1 justify-center items-center">
      <div class="relative m-auto">
        <img
          class="inline-block m-auto"
          src="@/assets/img/main/main_left_01.png"
          alt=""
        />
        <img
          class="flex mid:hidden absolute bottom-0 top-[-50px] w-24"
          src="@/assets/img/main/main_mobile_arrow.png"
          alt=""
        />
        <img
          class="hidden mid:flex absolute bottom-0 left-[-90px]"
          src="@/assets/img/main/main_mobile_arrow.png"
          alt=""
        />
      </div>
    </div>
  </main>
  <!-- 2-section -->
  <section class="px-16  pt-16">
    <Section>Explore Categories</Section>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <div class="flex justify-between ">
        <categoryCard :items="categoryMaxList" />
      </div>
    </div>
    <Pagination />
  </section>
  <!-- 3-section -->
  <div class="px-16 py-10">
    <sectionBook>Featured Products</sectionBook>
    <div v-if="loadingBook">
      <Loading />
    </div>
    <div v-else>
      <div class="flex gap-6">
        <bookCard :items="bookList" />
      </div>
    </div>
    <Pagination />
  </div>
  <!-- 4-section -->
  <div class="flex px-16  gap-5">
    <div class="bg-[#FFF5E1] w-[50%] px-14 py-10 mb-12">
      <button
        class="rounded-sm px-2 py-1 text-xs  text-white bg-gradient-to-r from-[#85DF00] to-[#FFB531]"
      >
        Free delivery
      </button>
      <h1 class="text-primary2 font-semibold text-2xl mt-[27px] mb-5">
        Free delivery over 250 000 Sum
      </h1>
      <span class="text-[#B5B5B5] text-base  "
        >Shop $50 product and get free delivery anywhre.</span
      >
      <baseButton
        class="bg-buttonColor py-2 rounded-xl text-white flex items-center px-3 mt-6 text-sm  font-semibold"
        >Shop Now
        <i class="bx bx-right-arrow-alt text-white mt-1"></i>
      </baseButton>
    </div>
    <div class="bg-[#DEF9EC] w-[50%] py-10 px-14  mb-12">
      <button
        class="rounded-sm px-5 py-1 text-xs  text-white bg-gradient-to-r from-[#85DF00] to-[#FFB531]"
      >
        60% off
      </button>
      <h1 class="text-primary2 font-semibold text-2xl mt-[27px] mb-5">
        Islamic books are on sale for Eid
      </h1>
      <span class="text-[#B5B5B5] text-base">Save up to 60% off on your first order</span>
      <baseButton
        class="bg-buttonColor py-2 rounded-xl text-white flex items-center px-4 mt-6 text-sm font-semibold"
        >Order Now
        <i class="bx bx-right-arrow-alt text-white mt-1"></i>
      </baseButton>
    </div>
  </div>
  <!-- 5-section -->
  <div>
    <div class="px-16 py-3">
      <div class="flex justify-between items-center">
        <div class="flex gap-7 items-center text-primary2">
          <h1 class="font-semibold text-3xl">Daily Best Sells</h1>
          <div v-for="item in inputValue" :key="item">
            <span
              class="cursor-pointer font-semibold"
              :class="{ active: activee[item] }"
              @click="valueSend(item)"
              >{{ item }}</span
            >
          </div>
        </div>
        <div class="pr-10">
          <paginationCate class="gap-4" />
        </div>
      </div>

      <div v-if="loading2">
        <Loading />
      </div>
      <div v-else>
        <div class="flex gap-6">
          <bookCard2 :items="categoryMiniList" />
        </div>
      </div>
    </div>
  </div>
  <!-- 6-section -->
  <div class="flex justify-between  px-16 py-5">
    <div class="w-[313px] h-[370px]" v-for="book in table">
      <h1 class="text-primary2 font-semibold text-2xl border-b-2 m-2 pb-2">
        {{ book.name }}
      </h1>
      <bookCard3 :items="book.list.slice(0, 3)" />
    </div>
  </div>
  <!-- 7-section -->
  <h1 class="text-primary2 font-semibold text-3xl mb-3  px-16 py-3">
    Partners
  </h1>
  <div class="bg-[#F8F8F8] px-16 py-10 mb-12">
    <div class="flex justify-between">
      <img class="w-[140px]" src="@/assets/img/logos/4.png" alt="" />
      <img class="w-[140px]" src="@/assets/img/logos/1.png" alt="" />
      <img class="w-[140px]" src="@/assets/img/logos/2.png" alt="" />
      <img class="w-[140px]" src="@/assets/img/logos/3.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import baseButton from "@/components/base/base-button.vue";
import Loading from "@/components/loading.vue";
import Section from "@/components/section";
import sectionBook from "@/components/sectionBook.vue";
import Pagination from "@/components/paginationn";
import paginationCate from "@/components/paginationCate.vue";
import bookCard from "@/features/products/components/book-card";
import categoryCard from "@/features/categoryMaxs/components/category-card";
import bookCard2 from "@/features/products/components/book-card2.vue";
import bookCard3 from "@/features/products/components/book-card3";

import { useCategoryMax } from "@/features/categoryMaxs/composables/index";
import { useBooks } from "@/features/products/composables/index";

const { loading, categoryMaxList } = useCategoryMax();
const {
  bookList,
  loadingBook,
  inputValue,
  valueSend,
  loading2,
  categoryMiniList,
  activee,
  table,
} = useBooks();
</script>

<style scoped>
.active {
  color: #43bb00;
}
</style>
