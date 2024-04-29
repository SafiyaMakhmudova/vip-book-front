<template>
  <!-- 1-section -->
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
