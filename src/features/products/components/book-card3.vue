<template>
  <div
    class="flex items-center gap-5 mb-5  mt-4"
    v-for="(book, index) in items"
    :key="index"
  >
    <div>
      <img
        class="w-[80px] h-[80px] cursor-pointer"
        :src="'http://localhost:4010/' + book.image"
        alt=""
        @click="singlePage(book?.id)"
      />
    </div>
    <div>
      <h1 class="text-primary2 font-semibold text-base">{{ book.name }}</h1>
      <h4 class="text-gray-400 flex items-center">
        <n-rate readonly size="small" :default-value="book.averageRating" />
        ({{ book.averageRating }})
      </h4>
      <div class="flex gap-2 items-center" v-if="book.new_price">
        <h3 class="text-primary2 font-semibold text-base">
          {{ book.new_price }}
        </h3>
        <h4 class="text-[#B5B5B5] line-through text-sm">
          {{ book.price }} so'm
        </h4>
      </div>
      <div v-else>
        <h4 class="text-primary2 text-sm">{{ book.price }} so'm</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});

import { NRate } from "naive-ui";
import router from '@/router'
import {productRoute} from '@/constants/routes/product'

async function singlePage(id) {
 await router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } })
}
</script>

<style scoped></style>
