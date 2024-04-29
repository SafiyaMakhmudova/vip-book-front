import { defineStore, storeToRefs } from "pinia";
import { errorToast } from "@/utils/toast";
import { findAllBooks, findAllCanstavar } from "@/api/book";
import { useCategoryMaxStore } from "@/features/categoryMaxs/store/CategoryMaxStore";

const store = useCategoryMaxStore();
const { id } = storeToRefs(store);

export const useBookStore = defineStore("books", {
  state: () => ({
    bookList: [],
    loadingBook: false,
  }),

  actions: {
    async fetchAllBooks(data) {
      this.loadingBook = true;
      try {
        const res = await findAllBooks(data);
        if (res.status !== 200) {
          return;
        }
        this.loadingBook = false;
        this.bookList = res?.data.limit_books;
        id.value = 3;
      } catch (error) {
        this.loadingBook = false;
        errorToast("Not found");
      }
    },
    async fetchAllCanstavar(data) {
      this.loadingBook = true;
      try {
        const res = await findAllCanstavar(data);
        if (res.status !== 200) {
          return;
        }
        this.loadingBook = false;
        this.bookList = res?.data.limit_books;
        id.value = 4;
      } catch (error) {
        this.loadingBook = false;
        errorToast("Not found");
      }
    },
  },
});
