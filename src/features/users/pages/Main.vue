<template>
  <main class="px-10 h-screen mid:h-[550px] flex flex-col justify-evenly items-center mid:flex-row border-2  border-red-400  bg-gradient-to-t from-green-200 to-white">
    <div class="flex flex-1 flex-col border-4 justify-evenly">
      <h1 class="text-6xl text-text py-5 font-bold">
  <!-- 1-section -->
  <main class="px-10 h-screen mid:h-[550px] flex flex-col justify-evenly items-center mid:flex-row   bg-gradient-to-t from-green-200 to-white">
    <div class="flex flex-1 flex-col  justify-evenly">
      <h1 class="text-6xl text-text py-5 font-bold">
        Explore Our store the best of all the time
      </h1>
      <span class="text-[#666666] text-xl">Save up to 60% off on your first order</span>
      <baseButton class="bg-buttonColor py-3 px-12 mt-12 text-base font-semibold ">
        Shop now
<!-- buttondagi  arrow rasm ekan  -->
        <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
<!-- buttondagi  arrow rasm ekan  -->
        <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
      </baseButton>
    </div>
    <div class=" flex-1 justify-center items-center">
      <div class="relative m-auto">

        <img
        class="inline-block m-auto"
        src="@/assets/img/main/main_left_01.png"
    <div class="border-4 border-red-400  flex-1 justify-center items-center">
      <div class="relative m-auto">

        <img
        class="inline-block m-auto"
        src="@/assets/img/main/main_left_01.png"
        alt=""
        />
        <img class="flex mid:hidden  absolute bottom-0 top-[-50px] w-24 " src="@/assets/img/main/main_mobile_arrow.png" alt="" />
        <img class="hidden mid:flex absolute bottom-0 left-[-90px]" src="@/assets/img/main/main_mobile_arrow.png" alt="" />
      </div>
        />
        <img class="flex mid:hidden  absolute bottom-0 top-[-50px] w-24 " src="@/assets/img/main/main_mobile_arrow.png" alt="" />
        <img class="hidden mid:flex absolute bottom-0 left-[-90px]" src="@/assets/img/main/Vector 26.png" alt="" />
      </div>
    </div>
  </main>
  <!-- 2-section -->
  <section class="px-12 py-28">
    <Section>Explore Categories</Section>
    <div v-if="loading"><Loading /></div>
    <div v-else>
      <div  class="flex gap-6">
      <categoryCard :items = 'categoryMaxList' />
      </div>
    </div>
    <Pagination/>
  </section>
  <!-- 3-section -->
  <div class="px-12 py-10">
    <sectionBook>Featured Products</sectionBook>
    <div v-if="loadingBook"><Loading/></div>
    <div v-else>
      <div class="flex gap-6">
      <bookCard :items="bookList"/>
    </div>
    </div>
    <Pagination/>
  </div>
</template>

<script setup>
import baseButton from "@/components/base/base-button.vue";
import Loading from "@/components/loading.vue";
import Section from "@/components/section"
import sectionBook from "@/components/sectionBook.vue";
import Pagination from "@/components/paginationn"
import bookCard from '../../products/components/book-card'
import categoryCard from "../../categoryMaxs/components/category-card";

import { useCategoryMax } from "@/features/categoryMaxs/composables/index";
import {useBooks} from '@/features/products/composables/index'

const { loading, categoryMaxList } = useCategoryMax();
const { bookList, loadingBook} = useBooks()

</script>

<style scoped>

</style>
