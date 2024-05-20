<template>
  <div class="px-16 mt-32 flex text-center">
    <div class="mx-auto">
      <div class="flex justify-center items-center">
        <img class="w-[220px]" src="@/animation/gif.gif" alt="Loading" />
      </div>
      <h1 class="text-3xl mx-auto text-primary2">Thank you!</h1>
      <h3>Payment done Successfully</h3>
      <span class="block my-4 w-[58%] mx-auto"
        >You will be redirected to the home page shortly or click here to return
        to home page</span
      >
      <router-link to="/"
        ><button
          class="bg-primary px-12 py-2 rounded-xl text-white hover:bg-green-500 shadow-xl"
        >
          Home
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
