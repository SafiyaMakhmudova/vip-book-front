import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useCategoryMaxStore } from "@/features/categoryMaxs/store/CategoryMaxStore";
import { useBookStore } from "@/features/products/store/BooksStore";
import { reactive, onMounted } from "vue";

export const useCategoryMax = () => {
  const paginations = reactive({
    limit: 6,
    skip: 1,
  });
  const store = useCategoryMaxStore();
  const storBook = useBookStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, categoryMaxList, id } = storeToRefs(store);
  const { fetchAllCategory, fetchAllCategory2 } = useCategoryMaxStore();

  const { bookList } = storeToRefs(storBook);
  const { fetchAllBooks, fetchAllCanstavar } = useBookStore();

  onMounted(async () => {
    await fetchAllCategory(paginations);
  });

  async function exchangeApi2() {
    await fetchAllCategory2(paginations);
  }

  async function exchangeApi() {
    await fetchAllCategory(paginations);
  }

  async function RightPagination() {
    if (paginations.skip != 1) {
      paginations.skip = paginations.skip - 1;
      if (id.value == 1) {
        //1-categories books
        await fetchAllCategory(paginations);
      } else if (id.value == 2) {
        //2-categories canstavar
        await fetchAllCategory2(paginations);
      } else if (id.value == 3) {
        //3-books book
        await fetchAllBooks(paginations);
      } else if (id.value == 4) {
        //4-books canstavar
        await fetchAllCanstavar(paginations);
      }
    }
  }

  async function LeftPagination() {
    if (categoryMaxList.value.length > 5) {
      paginations.skip += 1;
      if (id.value == 1) {
        await fetchAllCategory(paginations);
      } else if (id.value == 2) {
        await fetchAllCategory2(paginations);
      } else if (id.value == 3) {
        console.log("book1");
        if (bookList.value.length > 5) {
          await fetchAllBooks(paginations);
        } else {
          paginations.skip -= 1;
        }
      } else if (id.value == 4) {
        if (bookList.value.length > 5) {
          await fetchAllCanstavar(paginations);
        } else {
          paginations.skip -= 1;
        }
      }
    }
  }
  return {
    loading,
    categoryMaxList,
    route,
    router,
    fetchAllCategory,
    paginations,
    RightPagination,
    LeftPagination,
    exchangeApi2,
    exchangeApi,
    id,
  };
};
