<template>
  <div class="px-20 py-10 mx-auto  text-center">
    <div class="mx-auto flex justify-center">
      <img src="../animation/empty.gif" alt="Loading">
    </div>
    <h1 class="text-primary2 font-medium text-xl">
      There are currently no products in your cart
    </h1>
    <span class="block mb-5 text-sm"
      >Start with the collections on the home page or find the product you need
      by searching</span
    >
    <router-link to="/"
      ><button
        class="bg-primary rounded-xl text-sm px-4 py-2 text-white hover:bg-primary2"
      >
        Home page
      </button>
    </router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>
