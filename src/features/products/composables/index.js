import { useRoute, useRouter } from "vue-router";
import { useBookStore } from "../store/BooksStore";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

export const useBooks = () => {
  const paginations = reactive({
    limit: 6,
    skip: 1,
  });

  const store = useBookStore();
  const router = useRouter();
  const route = useRoute();

  const { loadingBook, bookList } = storeToRefs(store);
  const { fetchAllBooks, fetchAllCanstavar } = useBookStore();

  onMounted(async () => {
    await fetchAllBooks(paginations);
    console.log(bookList.value);
  });

  async function exchangeApiBook() {
    await fetchAllBooks(paginations);
  }

  async function exchangeApiCanstavar() {
    await fetchAllCanstavar(paginations);
  }

  return {
    loadingBook,
    bookList,
    exchangeApiCanstavar,
    exchangeApiBook,
  };
};
