<template>
  <div class="pt-[52px] px-[50px] pb-[42px] nav flex   items-center w-full justify-between">
    <div class="flex   gap-8 text-text text-lg navmenu">
      <h3>Books</h3>
      <h3>Stationary</h3>
      <a href="/about">About us</a>
    </div>
    <div class="flex">
      <i
        class="bx bx-menu cursor-pointer desktop:hidden "
        @click="showMenu = !showMenu"
      ></i>

      <h2 class="text-[#43BB00] font-bold navh2">
        <span class="text-4xl mr-3 text-primary"><a href="/">VIP</a></span>books
      </h2>
    </div>
    <div class="flex items-center navdiv">
      <div class="flex navicons">
        <i class="bx bx-heart text-2xl text-green-950 mr-10"></i>
        <i class="bx bx-user text-2xl text-green-950 mr-10"></i>
      </div>
      <div
        class="navinput border-2 rounded-3xl shadow-md shadow-green-200 px-4 py-2 items-center flex"
      >
        <i class="bx bx-search text-green-950 mr-5 text-xl"></i>
        <input
          type="text"
          class="outline-none"
          placeholder="Search"
        />
        <span class="text-xl text-gray-500">|</span>
        <i class="bx bx-basket text-green-950 text-2xl ml-3"></i>
      </div>
    </div>
  </div>

  
  <div
      v-if="showMenu"
      class="w-[100%] h-[500px] border-2 z-[1001]  absolute top-12   text-left bg-white py-2 desktop:hidden"
    >
      <div class="flex justify-between items-center border-b-2 w-full">
        <a class="p-2">Books</a>
        <i class="bx bx-chevron-down text-xl"></i>
      </div>
      <div class="flex justify-between items-center border-b-2 w-full">
        <a class="p-2">Stationary</a>
        <i class="bx bx-chevron-down text-xl"></i>
      </div>
      <a
        class="border-b-2 block p-2"
        href="/about"
        >About us</a
      >
    </div>

  <div
    class="nav-input border-2 rounded-3xl shadow-md mx-4  shadow-green-200 px-2 py-2 items-center text-center flex"
  >
    <i class="bx bx-search text-green-950 mr-5 text-xl"></i>
    <input
      type="text"
      class="outline-none w-[70%]"
      placeholder="Search"
    />
    <span class="text-xl text-gray-500">|</span>
    <i class="bx bx-basket text-green-950 text-2xl"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showMenu = ref(false);
</script>

<style scoped>
@media only screen and (min-width: 330px) and (max-width: 871px) {
  .nav {
    padding: 10px;
    text-align: center;
    align-items: center;
    width: 100%;
  }

  .navmenu {
    display: none;
  }

  .bx-menu {
    font-size: xx-large;
  }

  .bx {
    margin: 5px;
  }

  .navdiv {
    padding: 0;
  }

  .navinput {
    display: none;
  }

  .nav-input {
    margin-bottom: 20px;
    display: block;
  }
}

@media only screen and (min-width: 617px) and (max-width: 1600px) {
  .bx-menu {
    display: none;
  }

  .nav-input {
    display: none;
  }
}
</style>
