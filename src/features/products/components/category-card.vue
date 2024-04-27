<template>
  <div class="w-[15%] mt-10 text-center" v-for="item in items" :key="item.id" >
    <img class="h-[50%]" :src="'http://localhost:4010/' + item.img" alt="" />
    <div class="text-center pt-4 pb-5  ">
      <h5 class="font-semibold ">{{ item.name }}</h5>
      <span class="text-[#ADADAD] ">{{ item.total }} items</span>
    </div>
  </div>
</template>

<script setup>

defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style scoped></style>
