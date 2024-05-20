<template>
  <div class="">
    <div class="mx-auto pt-10">
      <a href="/">
        <img
        class="mx-auto w-[162px]"
        src="../../../assets/logo/1 599684007.png"
        alt=""
      />
      </a>
    </div>
    <div class="w-[60%] mx-auto mt-[163px] border-b-2 flex justify-between ">
      <div>
        <input
        v-model="inputText"
        class="input-field"
        type="text"
        placeholder="Search"
      />
      </div>
      <div class="px-4">
        
      <button @click="clearInput" class="clear-button mt-2">&times;</button>
      </div>
    </div>
    <div class="flex mx-auto mt-9  w-[60%] gap-2">
      
    <div v-for="index in searchText" :key="index" class="text-white">
        <button @click="changeValue(index)" class="rounded-full border-2 px-3 py-2 transition-colors duration-300 bg-green-400   hover:bg-green-700">{{ index }}</button>
    </div>
    </div>
    <div v-if="searchLoading"><Loading/></div>
    <div v-else class="mt-12 px-16 flex gap-5 flex-wrap">
      <bookCard :items="searchBookList" />
    </div>
  </div>
</template>

<script setup>
import { useBooks } from "@/features/products/composables/index";
import Loading from '@/components/loading.vue'
const {searchBookList, searchLoading, inputText, clearInput,searchText, changeValue } = useBooks()
import bookCard from '@/features/products/components/book-card.vue'


</script>

<style scoped>
.input-field {
  font-size: 23px;
  border: none;
  outline: none;
}

.clear-button {
  width: 12px;
  height: 12px;
  gap: 0px;
  border: 2px 0px 0px 0px;
  opacity: 0px;
  background: none;
  color: #999;
  font-size: 22px;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
}
</style>
