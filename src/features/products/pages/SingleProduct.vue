<template>
  <main class="px-16 mt-24">
    <div class="flex pt-5 gap-5">
      <div>
        <img
          class="w-[304px] h-[378px] shadow-2xl rounded-md"
          :src="'http://localhost:4010/' + singleProduct.image"
          alt=""
        />
      </div>
      <div>
        <div class="px-1">
          <h1 class="text-primary2 text-2xl font-medium">
            {{ singleProduct.name }}
          </h1>
          <h3 class="pt-2">
            By:<span class="text-primary">{{ singleProduct.author }}</span>
          </h3>

          <h4 class="flex items-center mt-4 text-sm">
            <n-rate readonly :default-value="averageRating" />
            {{ averageRating }}
          </h4>
          <h3
            class="text-primary font-semibold flex gap-3 mt-4 text-xl"
            v-if="singleProduct.new_price"
          >
            {{ singleProduct.new_price }}
            <span>$28</span>
            <h4 class="text-[#ADADAD] line-through">
              {{ singleProduct.price }} so'm
            </h4>
          </h3>
          <h3 v-else class="text-primary font-semibold mt-4 text-xl">
            {{ singleProduct.price }} so'm
          </h3>
        </div>
        <div class="border-b-2 w-[424px] mt-3"></div>
        <div class="flex gap-12 mt-7">
          <div>
            <h3>Publisher:</h3>
            <h3 class="mt-3 capitalize">Product:</h3>
            <h3 class="mt-3">Availibility:</h3>
          </div>
          <div>
            <h3>{{ singleProduct.publisher }}</h3>
            <h3 class="mt-3">{{ singleProduct.product_id }}</h3>
            <h3 class="mt-3 capitalize">{{ singleProduct.availibility }}</h3>
          </div>
        </div>
        <div class="flex gap-16 mt-2 items-center">
          <h1>Cover:</h1>
          <h1 class="px-4 py-1">{{ singleProduct.format }}</h1>
        </div>
        <div class="mt-5 flex gap-5">
          <div
            v-if="singleCart"
            class="borde-2 bg-slate-100 shadow-lg flex gap-4 items-center justify-around px-3 py-1"
          >
            <i
              class="bx bx-minus text-primary"
              @click="removeFromCart(singleProduct.id)"
            ></i>
            {{ singleCart.quantity }}
            <i
              class="bx bx-plus text-primary"
              @click="plusIndex(singleProduct.id)"
            ></i>
          </div>

          <button
            class="bg-primary hover:bg-green-600 text-white flex px-20 py-3 items-center gap-1 rounded-xl"
            @click="addToCart(singleProduct)"
            ><img src="@/assets/vectors/Vector.png" alt="" /> Add to
            cart</button
          >
        </div>
      </div>
    </div>
    <div class="bg-[#FAFAFB] pt-8 px-7 mt-9 pb-10">
      <div class="flex gap-20 border-b-2">
        <h1
          @click="openClose1"
          class="text-black cursor-pointer pb-8 text-lg"
          :class="{
            'text-primary  ': info,
            'border-b-2 border-b-primary  ': info,
          }"
        >
          Product Information
        </h1>
        <h1
          @click="openClose2"
          class="text-black cursor-pointer pb-8 text-lg  "
          :class="{
            'text-primary  ': rewiew,
            'border-b-2 border-b-primary  ': rewiew,
          }"
        >
          Reviews <span class="text-gray-400 ">{{ singleProduct?.comments?.length }}</span>
        </h1>
      </div>
      <div class="mt-14 w-[72%]" v-if="info">
        <h3>{{ singleProduct.information }}</h3>
      </div>
      <div v-for="comment in singleProduct?.comments" class="pt-7" v-if="rewiew">
        <div class="flex items-center gap-2">
          <i class="bx bxs-user-circle text-5xl"></i>
          <div class="block">
            <h3 class="text-sm font-bold">James Lawson</h3>
            <n-rate size="small" readonly :default-value="comment.rating" />
          </div>
        </div>
        <div class="pl-2 w-[70%] pt-4">
          <span>{{ comment.text }}.</span>
        </div>
        <div class="pl-2 pt-3">
          <img
            class="w-[36px] h-[54px]"
            :src="'http://localhost:4010/' + singleProduct.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <h1 class="text-primary2 text-2xl font-semibold  mt-6   ">Recommended</h1>
    <div class="flex gap-6">
      <bookCard :items="bookList" />
    </div>
  </main>
</template>

<script setup>
import { NRate } from "naive-ui";
import { onMounted, watch } from "vue";
import { useBooks } from "@/features/products/composables/index";
import baseButton from "@/components/base/base-button.vue";
import bookCard from "@/features/products/components/book-card";
import {
  plusIndex,
  removeFromCart,
  getProductById,
  addToCart,
} from "@/hooks/localeStorage";

const {
  singleProduct,
  fetchSingleBook,
  route,
  averageRating,
  singleCart,
  info,
  rewiew,
  openClose1,
  openClose2,
  bookList,
} = useBooks();

onMounted(async () => {
  const id = String(route.params.id);
  await fetchSingleBook(id);
  getProductById(id);
  window.scrollTo(0, 0)
});

watch(
      () => route.params.id,
      (newId) => {
        fetchSingleBook(newId);
      }
    );

</script>

<style scoped></style>
