<template>
  <div
    v-for="item in items"
    class="mt-10 p-2 pt-4 w-[202px] h-[330px] border-2  rounded-md mb-[40px]" 
  >
  <div class="flex justify-center" >
    <img
      class="w-[124px] h-[190px] cursor-pointer"
      :src="'http://localhost:4010/' + item.image"
      alt="" 
      @click="singlePage(item?.id)"
    />
  </div>
    <div>
      <span class="text-[#ADADAD]">Novel</span>
      <h3 class="text-primary2 font-semibold">{{ item.name }}</h3>
      <h4
        class="text-gray-400 flex items-center"
      >
        <n-rate readonly :default-value="item.averageRating " />
        ({{ item.averageRating  }})
      </h4>
      <div class="flex justify-between">
        <h3 class="text-primary font-semibold" v-if="item.new_price">
          {{ item.new_price }}
          <span>$28</span>
          <h4 class="text-[#ADADAD] line-through">{{ item.price }} so'm</h4>
        </h3>
        <h3 v-else class="text-primary font-semibold mt-4">
          {{ item.price }} so'm
        </h3>

        <div class="pt-4">
          <button class="bg-[#43BB00] hover:bg-green-600 duration-300 ease-out   w-[75px] h-[27px] text-white rounded-xl"  @click="addToCart(item)">
            <i class="bx bxs-basket"></i>
            Add</button
          >
        </div>
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
import baseButton from "@/components/base/base-button";
import {addToCart} from '@/hooks/localeStorage'

import router from '@/router'
import {productRoute} from '@/constants/routes/product'

async function singlePage(id) {
 await router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } })
}

</script>

<style scoped></style>
