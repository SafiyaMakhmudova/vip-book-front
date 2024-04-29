<template>
  <div
    v-for="item in items"
    :key="item.id"
    class="mt-10 p-2 w-[202px] h-[374px] border-2 rounded-md mb-[40px]"
  >
    <img
      class="w-[154px] h-[238px]"
      :src="'http://localhost:4010/' + item.image"
      alt=""
    />
    <div>
      <span class="text-[#ADADAD]">Novel</span>
      <h3 class="text-primary2 font-semibold">{{ item.name }}</h3>
      <h4
        v-for="index in item.comments"
        class="text-gray-400 flex items-center"
      >
        <n-rate readonly :default-value="index.rating" />
        ({{ index.rating }})
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
          <baseButton class="bg-primary w-[75px] h-[27px] text-white">
            <i class="bx bxs-basket"></i>
            Add</baseButton
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
</script>

<style scoped></style>
