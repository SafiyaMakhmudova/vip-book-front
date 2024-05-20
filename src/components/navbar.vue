<template>
  <div class="pt-[16px] px-[50px] pb-3  nav flex items-center w-full justify-between  fixed  top-0   bg-white   ">
    <div class="navbar">
      <div class="dropdown items-center">
        <!-- <button class=" border-2"> -->
        <router-link to="/book" class="dropbtn">
          <span class="text-lg">Books</span>
          <i class="bx bxs-chevron-down"></i>
        </router-link>

        <!-- </button> -->
        <div class="dropdown-content">
          <div class="flex flex-wrap gap-2 px-5 py-4">
            <div class="row" v-for="category in categoryMaxList">
              <div v-if="category.book.length >= 1" class="column">
                <h3 class="capitalize px-4 text-primary2 text-xl">
                  {{ category.name }}
                </h3>
                <div v-for="book in category.book.slice(0, 6)">
                  <a href='javascript:void(0)' @click="singlePage(book?.id)" >{{ book.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#news">Stationary</a>
      <a href="/about">About us</a>
    </div>

    <div class="flex">
      <i class="bx bx-menu cursor-pointer desktop:hidden" @click="showMenu = !showMenu"></i>

      <h2 class="text-[#43BB00] font-bold navh2">
        <span class="text-4xl mr-3 text-primary"><a href="/">VIP</a></span>books
      </h2>
    </div>
    <div class="flex items-center navdiv">
      <div class="flex navicons">
        <i class="bx bx-heart text-2xl text-green-950 mr-10"></i>
        <i class="bx bx-user text-2xl text-green-950 mr-10"></i>
      </div>
      <div class="navinput border-2 rounded-3xl shadow-md shadow-green-200 px-4 py-2 items-center flex">
        <i class="bx bx-search text-green-950 mr-5 text-xl"></i>
        <router-link to="/search">
          <input type="text" class="outline-none" placeholder="Search" />
        </router-link>

        <span class="text-xl text-gray-500">|</span>

        <router-link to="/basket" class="relative cursor-pointer " v-if="cart.length">
          <i class="bx bx-basket text-green-950 text-2xl ml-3 hover:text-primary "></i>
          <div 
            class="cart-item-count absolute bg-[#FFB531] text-black rounded-full w-[20px] h-[20px] flex items-center justify-center text-sm  ">
            {{ cart.length }}</div>
        </router-link>
        <div v-else>
          <i class="bx bx-basket text-green-950 text-2xl ml-3 hover:text-primary "></i>
              
        </div>
      </div>

    </div>
  </div>

  <div v-if="showMenu"
    class="w-[100%] h-[500px] border-2 z-[1001] absolute top-12 text-left bg-white py-2 desktop:hidden">
    <div class="flex justify-between items-center border-b-2 w-full">
      <a class="p-2">Books</a>
      <i class="bx bx-chevron-down text-xl"></i>
    </div>
    <div class="flex justify-between items-center border-b-2 w-full">
      <a class="p-2">Stationary</a>
      <i class="bx bx-chevron-down text-xl"></i>
    </div>
    <a class="border-b-2 block p-2" href="/about">About us</a>
  </div>

  <div class="nav-input border-2 rounded-3xl shadow-md mx-4 shadow-green-200 px-2 py-2 items-center text-center flex">
    <i class="bx bx-search text-green-950 mr-5 text-xl"></i>
    <input type="text" class="outline-none w-[70%]" placeholder="Search" />
    <span class="text-xl text-gray-500">|</span>
    <i class="bx bx-basket text-green-950 text-2xl"></i>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { fetchCartFromLocalStorage } from '@/hooks/localeStorage'

import { useCategoryMax } from "@/features/categoryMaxs/composables/index";
const { categoryMaxList } = useCategoryMax();

import { useBooks } from "@/features/products/composables/index";
const { cart } = useBooks();

import router from '@/router'
import {productRoute} from '@/constants/routes/product'

async function singlePage(id) {
 await router.push({ name: productRoute.RT_SINGLE_PRODUCT, params: { id } })

}
onMounted(() => {
    fetchCartFromLocalStorage();
  });
  


</script>

<style scoped>
.cart-item-count {
  top: -18px;
  right: -10px;
}

.navbar {
  overflow: hidden;
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar a {
  float: left;
  font-size: 18px;
  color: #1a4900;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 20px;
  border: none;
  outline: none;
  color: #1a4900;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  color: #43bb00;
}

.dropdown-content {
  top: 60px;
  display: none;
  position: absolute;
  background-color: white;
  margin: 0 auto;
  margin-left: 64px;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  background-color: white;
}

.column a {
  float: none;
  color: #666666;
  text-decoration: none;
  display: block;
  size: 10px;
  text-align: left;
}

.column a:hover {
  background-color: #ddddddbb;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

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
