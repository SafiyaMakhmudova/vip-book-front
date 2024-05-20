import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

import router from '@/router'

import { useBookStore } from "@/features/products/store/BooksStore";
import { useCategoryMaxStore } from "@/features/categoryMaxs/store/CategoryMaxStore";

export const useBooks = () => {
  const paginations = reactive({
    limit: 6,
    skip: 1,
  });
 
  const  options = reactive([
    {
      label: "Toshkent",
      value: "Toshkent",
    },
    {
      label: "Andijon",
      value: "Andijon"
    },
    {
      label: "Buxoro",
      value: "Buxoro"
    },
    {
      label: "Farg'ona",
      value: "Farg'ona",
    },
    {
      label: "Guliston",
      value: "Guliston"
    },
    {
      label: "Jizzax",
      value: "Jizzax"
    },
    {
      label: "Namangan",
      value: "Namangan"
    },
    {
      label: "Qashqadaryo",
      value: "Qashqadaryo",
    },
    {
      label: "Samarqand",
      value: "Samarqand"
    },
    {
      label: "Sirdaryo",
      value: "Sirdaryo"
    },
    {
      label: "Xorazm",
      value: "Xorazm"
    }
  ]
)
  const inputValue = reactive(["Featured", "New", "Popular"]);
  const activeeBook = ref(false);
  const activeeCanstavar = ref(false);
  const activee = ref({});
  const serachObj = reactive({
    name: "",
    author: "",
    category: "",
  });
  const info = ref(true);
  const rewiew = ref(false);

  const inputText = ref("");
  const searchText = ref(["Book name", "Author", "Category"]);

  const storeCategory = useCategoryMaxStore();
  const store = useBookStore();
  const router = useRouter();
  const route = useRoute();

  const { id } = storeToRefs(storeCategory);

  const {
    loadingBook,
    bookList,
    loading2,
    categoryMiniList,
    categoryMini,
    bookSoldList,
    bookRateList,
    searchBookList,
    searchLoading,
    cart,
    totalPrice,
    singleProduct,
    averageRating,
    singleCart,
  } = storeToRefs(store);
  const {
    fetchAllBooks,
    fetchAllCanstavar,
    fetchAllCategoryMini,
    fetchRateBooks,
    fetchSoldBooks,
    fetchSearchBooks,
    fetchSingleBook,
  } = useBookStore();

  const table = reactive({
    index1: {
      name: "Top Sells",
      list: bookSoldList,
    },
    index2: {
      name: "Top Rated",
      list: bookRateList,
    },
    index3: {
      name: "Recently Added",
      list: bookList,
    },
  });

  function clearInput() {
    inputText.value = "";
    serachObj.author = "";
    (serachObj.name = ""), (serachObj.category = "");
  }

  async function changeValue(index) {
    inputText.value =
      inputText.value.charAt(0).toUpperCase() + inputText.value.slice(1);

    if (index == "Author") {
      serachObj.author = inputText.value;
    } else if (index == "category") {
      serachObj.category = inputText.value;
    } else if (index == "Book name") {
      serachObj.name = inputText.value;
    }

    await fetchSearchBooks(serachObj);
  }

  onMounted(async () => {
    await fetchAllBooks(paginations);
    categoryMini.name = "Featured";
    await fetchAllCategoryMini(paginations, categoryMini);

    totalPrice.value = cart.value.reduce((total, book) => {
      const productPrice = book.price * book.quantity; // Kitob narxi va miqdori orqali umumiy narxni hisoblaymiz
      return total + productPrice; // Hisoblangan narxni jami umumiy narxga qo'shamiz
    }, 0);
  });

  onMounted(async () => {
    await fetchRateBooks();
    await fetchSoldBooks();
  });

  async function valueSend(index) {
    categoryMini.name = index;
    activee.value[index] = !activee.value[index];

    for (const key in activee.value) {
      if (key !== index) {
        activee.value[key] = false;
      }
    }
    paginations.limit = 3;
    await fetchAllCategoryMini(paginations, categoryMini);
    id.value = 5;
  }

  async function exchangeApiBook() {
    activeeBook.value = !activeeBook.value;
    activeeCanstavar.value = false;
    paginations.skip = 1;
    id.value = 3;
    await fetchAllBooks(paginations);
  }

  async function exchangeApiCanstavar() {
    activeeCanstavar.value = !activeeCanstavar.value;
    activeeBook.value = false;
    paginations.skip = 1;
    id.value = 4;
    await fetchAllCanstavar(paginations);
  }

  async function RightPagination() {
    if (paginations.skip != 1) {
      paginations.skip = paginations.skip - 1;
      await fetchAllCategoryMini(paginations, categoryMini);
    }
  }

  async function LeftPagination() {
    if (categoryMiniList.value.length > 1) {
      paginations.limit = 2;
      paginations.skip += 1;
      await fetchAllCategoryMini(paginations, categoryMini);
    }
  }

  function openClose1() {
    info.value  = !info.value
    rewiew.value = !rewiew.value
  }
  
  function openClose2() {
    rewiew.value = !rewiew.value
    info.value  = !info.value

  }
  
  async function paymentNext() {
    await router.push({name:'Success'})
  }
  
  return {
    paymentNext,
    options,
    info,
    rewiew,
    openClose1,
    openClose2,
    loadingBook,
    bookList,
    exchangeApiCanstavar,
    exchangeApiBook,
    activeeBook,
    activeeCanstavar,
    valueSend,
    categoryMiniList,
    loading2,
    inputValue,
    activee,
    RightPagination,
    LeftPagination,
    bookRateList,
    bookSoldList,
    table,
    searchBookList,
    searchLoading,
    searchText,
    inputText,
    clearInput,
    changeValue,
    cart,
    totalPrice,
    singleProduct,
    fetchSingleBook,
    route,
    averageRating,
    singleCart,
    
  };
};
