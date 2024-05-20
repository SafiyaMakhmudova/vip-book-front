<template>
    <div v-for="item in items" :key="item.id" class=" w-[550px] flex pl-14 items-center border-b-2 mt-1 mb-3 h-[237px] p-2 bg-[#F8F8F8] rounded-md  ">
        <div class="flex justify-around  ">
            <div class="w-[30%]  bg-[#F8F8F8]">
                <img @click="singlePage(item?.id)" class="cursor-pointer  w-[100px] h-[152px] mx-auto" :src="'http://localhost:4010/' + item.image" alt="" />
            </div>
            <div class="w-[40%] px-1 ml-2">
                <h2 class="text-primary2 text-2xl ">{{ item.name }}</h2>
                <h4 class="text-[#666666] mt-2">{{ item.author }}</h4>
                <h4 class="text-[#1D1D1D] mt-4 ">Pickup & delivery</h4>
            </div>
            <div class=" ml-4">
                <div>
                    <h3 class="text-primary mt-1 text-lg  ">{{ item.price }} sum</h3>

                </div>
                <div class=" bg-slate-100  hover:shadow-lg hover:shadow-indigo-500/50 flex gap-4 items-center justify-around rounded-md px-3 py-1 mt-[90px]">
                    <i class='bx bx-minus text-primary ' @click="removeFromCart(item.id)"></i>
                    {{ item.quantity }}
                    <i class='bx bx-plus text-primary ' @click="plusIndex(item.id)"></i>
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
import { plusIndex, removeFromCart } from '@/hooks/localeStorage'
import router from '@/router'
import {productRoute} from '@/constants/routes/product'

async function singlePage(id) {
 await router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } })
}
</script>

<style scoped></style>