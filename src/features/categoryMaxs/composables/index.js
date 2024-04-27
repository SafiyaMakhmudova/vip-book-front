import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { useCategoryMaxStore } from "@/features/categoryMaxs/store/CategoryMaxStore";
import { reactive, onMounted } from "vue";

export const useCategoryMax = () => {
  const paginations = reactive({
    limit: 6,
    skip: 1,
  });
  const store = useCategoryMaxStore();
  const router = useRouter();
  const route = useRoute();

  const { loading, categoryMaxList } = storeToRefs(store);
  const { fetchAllCategory, fetchAllCategory2 } = useCategoryMaxStore();

  onMounted(async () => {
    await fetchAllCategory(paginations);
  });

  async function exchangeApi1() {
    await fetchAllCategory2(paginations)
  }



  async function setPagination1() {
    if (paginations.skip != 1) {
      paginations.skip = paginations.skip - 1;
      await fetchAllCategory(paginations);

    }
  }

  async function setPagination2() {
    paginations.skip += 1;
    await fetchAllCategory(paginations);
  }

  return {
    loading,
    categoryMaxList,
    route,
    router,
    fetchAllCategory,
    paginations,
    setPagination1,
    setPagination2,
    exchangeApi1,
  };
};
