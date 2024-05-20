<template>
  <div class="mt-28 px-16">
    <h1 class="text-primary2 text-2xl font-medium">Enter your address</h1>
    <div class="flex gap-2 items-start mt-10">
      <div class="w-[50%]">
        <n-space vertical>
          <n-select
            class="w-[400px] text-xl focus:border-green-600"
            v-model:value="value"
            size="large"
            :options="options"
          />
        </n-space>
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="text"
          placeholder="District"

        />
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="text"
          placeholder="Home"
        />
      </div>
      <div class="w-[50%]">
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black border-2 rounded-sm px-5 text-lg py-1"
          type="text"
          placeholder="Apartment"
        />
        <input
          class="w-[400px] outline-none focus:border-green-600 text-black mt-5 border-2 rounded-sm px-5 text-lg py-1"
          type="tel"
          placeholder="901221234"
        />
      </div>
    </div>
    <h1 class="text-primary2 text-2xl font-medium mt-12">Payment method</h1>
    <div class="mt-10 flex gap-4 items-start">
      <img 
        class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6922.png"
        alt=""
        @click="toggleBorder('click')"

      />
      <img
        class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6923.png"
        alt=""
        @click="toggleBorder('payme')"
      />
      <img
        class="w-[121px] h-[90px] cursor-pointer hover:border-2  hover:border-primary2"
        src="@/assets/img/payment/Group 6924.png"
        alt=""
        @click="toggleBorder('naqd')"
      />
    </div>

    <div class=" flex justify-center  mx-auto mt-10 mb-4 ">
        
    <button @click="paymentNext" class="animated-button bg-primary py-4 px-32 rounded-xl text-white">
      Continue
    </button>
    </div>
  </div>
</template>

<script setup>
import { NSelect, NSpace } from "naive-ui";
import { useBooks } from "@/features/products/composables/index";

const { options, paymentNext } = useBooks();

const toggleBorder = (value) => {
console.log(value);
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
