<template>
    <div class="border-2 w-[250px] h-[380px] mt-10 px-2" v-for="item in items">
        <img  class="mx-auto w-[137px] h-[190px] py-3 cursor-pointer" :src="'http://localhost:4010/' + item.image" alt="" @click="singlePage(item?.id)">
        <span class="text-[#ADADAD]">{{ item?.category_Max.name }}</span>
      
        <h3 class="text-primary2 font-semibold ">{{ item?.name }}</h3>
        
        <h4
        class="text-gray-400 flex items-center"
      >
        <n-rate readonly :default-value="item?.averageRating " />
        ({{ item?.averageRating  }})
      </h4>
        <h3 class="text-primary font-semibold flex gap-3"  v-if="item?.new_price">
          {{ item?.new_price }} so'm
          <h4 class="text-[#ADADAD] line-through">{{ item?.price }} so'm</h4>
        </h3>
        <h3 v-else class="text-primary font-semibold mt-4">
          {{ item?.price }} so'm
        </h3>

        <n-slider  :default-value="(item?.sold_rating*100)/item?.total_count" disabled />
        <h3 class="text-primary2 font-semibold  text-xs   pb-2">Sold {{ item?.sold_rating }}/{{ item?.total_count }}</h3>
        <button class="bg-[#43BB00] text-white w-full rounded-xl  py-2 hover:bg-green-700 duration-150 ease-out" @click="addToCart(item)"> <i class='bx bxs-basket'></i> Add to cart</button>
    </div>
</template>

<script setup >
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
import {NRate, NSlider} from 'naive-ui'
import baseButton from '@/components/base/base-button'
import {addToCart} from '@/hooks/localeStorage'

import router from '@/router'
import {productRoute} from '@/constants/routes/product'

async function singlePage(id) {
 await router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } })
}
</script>

<style scoped>

</style>