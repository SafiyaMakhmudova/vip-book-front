import { defineStore } from "pinia";
import { errorToast } from "@/utils/toast";
import {
  findAllBooks,
  findAllCanstavar,
  findAllBookCategoryMiniApi,
} from "@/api/book";
import {
  SearchBookApi,
  SingleBookApi,
  findTopRatedBookApi,
  findTopSoldBookApi,
} from "../../../api/book";

export const useBookStore = defineStore("books", {
  state: () => ({
    bookList: [],
    loadingBook: false,
    loading2: false,
    categoryMiniList: [],
    categoryMini: {
      name: "Featured",
    },
    bookRateList: [],
    bookSoldList: [],
    searchBookList: [],
    searchLoading: false,
    cart: [],
    totalPrice: [],
    singleProduct: [],
    averageRating: 0,
    singleCart:[],
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
        this.bookList = this.bookList.map((product) => {
          // ratings summation
          const totalRatings = product.comments.reduce(
            (acc, { rating }) => (acc += Number(rating)),
            0
          );
          const averageRating = totalRatings / product.comments.length;
          // returning the merge of the current product with averageRating
          return { ...product, averageRating };
        });
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
      } catch (error) {
        this.loadingBook = false;
        errorToast("Not found");
      }
    },
    async fetchAllCategoryMini(data1, data2) {
      this.loading2 = true;
      try {
        const res = await findAllBookCategoryMiniApi(data1, data2);
        if (res.status !== 200) {
          return;
        }
        this.loading2 = false;
        this.categoryMiniList = res?.data?.limit_books;
        this.categoryMiniList = this.categoryMiniList.map((product) => {
          // ratings summation
          const totalRatings = product.comments.reduce(
            (acc, { rating }) => (acc += Number(rating)),
            0
          );
          const averageRating = totalRatings / product.comments.length;
          // returning the merge of the current product with averageRating
          return { ...product, averageRating };
        });
      } catch (error) {
        this.loading2 = false;
        errorToast("Not found");
      }
    },
    async fetchRateBooks() {
      try {
        const res = await findTopRatedBookApi();
        if (res.status !== 200) {
          return;
        }
        this.bookRateList = res?.data;
        this.bookRateList = this.bookRateList.map((product) => {
          // ratings summation
          const totalRatings = product.comments.reduce(
            (acc, { rating }) => (acc += Number(rating)),
            0
          );
          const averageRating = totalRatings / product.comments.length;
          // returning the merge of the current product with averageRating
          return { ...product, averageRating };
        });
      } catch (error) {
        errorToast("Not found");
      }
    },
    async fetchSoldBooks() {
      try {
        const res = await findTopSoldBookApi();
        if (res.status !== 200) {
          return;
        }
        this.bookSoldList = res?.data;
        this.bookSoldList = this.bookSoldList.map((product) => {
          // ratings summation
          const totalRatings = product.comments.reduce(
            (acc, { rating }) => (acc += Number(rating)),
            0
          );
          const averageRating = totalRatings / product.comments.length;
          // returning the merge of the current product with averageRating
          return { ...product, averageRating };
        });
      } catch (error) {
        errorToast("Not found");
      }
    },
    async fetchSearchBooks(data) {
      this.searchLoading = true;
      try {
        const res = await SearchBookApi(data);
        if (res?.data?.status !== 200) {
          return;
        }
        this.searchLoading = false;
        this.searchBookList = res?.data?.books;
        this.searchBookList = this.searchBookList.map((product) => {
          // ratings summation
          const totalRatings = product.comments.reduce(
            (acc, { rating }) => (acc += Number(rating)),
            0
          );
          const averageRating = totalRatings / product.comments.length;
          // returning the merge of the current product with averageRating
          return { ...product, averageRating };
        });
      } catch (error) {
        this.loadingBook = false;
        errorToast("Not found");
      }
    },
    async fetchSingleBook(id) {
      this.loading2 = true;
      try {
        const res = await SingleBookApi(id);
        if (res.status !== 200) {
          return;
        }

        this.loading2 = false;
        this.singleProduct = res?.data;
        
        const calculateAverageRating = (comments) => {
          if (comments.length === 0) return 0;
        
          const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0);
          return totalRating / comments.length;
        };
        this.averageRating = calculateAverageRating(this.singleProduct.comments);

      } catch (error) {
        this.loading2 = false;
        errorToast(error.message);
      }
    },
  },
});
