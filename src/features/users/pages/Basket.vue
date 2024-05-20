<template>
  <main class="px-[64px] mt-28">
    <dir class="flex items-center bg-[#DEF9EC] rounded-md">
      <img src="../../../assets/img/logos/carbon_delivery.png" alt="" />
      <h3 class="text-black text-xl px-2 py-3">
        Shipping arrives with in 2 days
      </h3>
    </dir>
    <div class="flex justify-around items-start" v-if="cart.length">
      <div>
        <basketCard :items="cart" />
      </div>
      <div class="rounded-md w-[370px] h-[296px] bg-[#F8F8F8] py-6 px-7">
        <div class="flex justify-between text-xl text-black">
          <h2>Subtotal</h2>
          <h4>{{ totalPrice }} sum</h4>
        </div>
        <div class="border-b-2 flex justify-between py-6">
          <h4>Select delivery or pick to visit fees</h4>
          <h4>Select</h4>
        </div>
        <div class="text-black text-2xl py-6 flex justify-between">
          <h2>Total</h2>
          <h2>{{ totalPrice }} sum</h2>
        </div>
        <router-link to="/payment">
          <button
            class="animated-button bg-primary py-4 px-32 rounded-xl text-white"
          >
            Continue
          </button></router-link
        >
      </div>
    </div>
    <div v-else>
      <emptyBasket/>
    </div>
  </main>
</template>

<script setup>
import {onMounted} from 'vue';
import basketCard from "../../products/components/basket-card";
import { useBooks } from "@/features/products/composables/index";
import emptyBasket from '@/components/empty-basket'
const { cart, totalPrice } = useBooks();

window.scrollTo(0, 0)

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
