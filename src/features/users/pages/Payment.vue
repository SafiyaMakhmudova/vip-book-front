<template>
  <div class="mt-28 px-16" :class="{ 'opacity-50': loading }">
    <h1 class="text-primary2 text-2xl font-medium">Enter your address</h1>
    <div class="flex gap-2 items-start mt-10">
      <div class="w-[50%]">
        <n-space vertical>
          <n-select class="w-[400px] text-xl focus:border-green-600 text-gray-500 " v-model:value="orders.city"
            default-value="Select options" size="large" :options="options" />
        </n-space>
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="text" placeholder="District" v-model="orders.district" />
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="text" placeholder="Home" v-model="orders.home" />
      </div>
      <div class="w-[50%]">
        <input class="w-[400px] outline-none focus:border-green-600 text-black border-2 rounded-sm px-5 text-lg py-1"
          type="text" placeholder="Apartment" v-model="orders.appartment" />
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="tel" placeholder="+998901221234" v-model="user.phone_number" size="13" />
      </div>
    </div>
    <h1 class="text-primary2 text-2xl font-medium mt-12">Payment method</h1>
    <div class="mt-10 flex gap-4 items-start">
      <img class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6922.png" alt="" @click="toggleBorder('click')" />
      <img class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6923.png" alt="" @click="toggleBorder('payme')" />
      <img class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6924.png" alt="" @click="toggleBorder('naqd')" />
    </div>

    <div class=" flex justify-center  mx-auto mt-10 mb-4 ">

      <button @click="paymentNext" :disabled="loading"
        class="animated-button bg-primary py-4 px-32 rounded-xl text-white">
        Continue
      </button>
    </div>
  </div>
  <div v-if="loading" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <loading-spinner />
  </div>
</template>

<script setup>
import { NSelect, NSpace } from "naive-ui";
import loadingSpinner from '@/components/loadingSpinner.vue';

import { useBooks } from "@/features/products/composables/index";
const { options } = useBooks();

import { useUsers } from '@/features/users/composables/index';
const { user, payment, orders, paymentNext, loading } = useUsers()


const toggleBorder = (value) => {
  payment.payment_type = value
};


</script>

<style scoped>
.animated-button {
  background: linear-gradient(to right, #54db0b, rgb(6, 114, 3));
  background-size: 200% auto;
  color: white;
  border: none;
  transition: background-position 0.5s ease-out, background-color 0.5s ease-out;
}

.animated-button:hover {
  background-position: -100% 0;
}
</style>
