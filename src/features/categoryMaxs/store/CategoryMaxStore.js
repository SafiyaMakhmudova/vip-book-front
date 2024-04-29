import { defineStore } from "pinia";
import router from "@/router";
import { findAllBookCategoryApi } from "@/api/category-max";
import { errorToast } from "@/utils/toast";
import { findAllCansCategoryApi } from "@/api/category-max";

export const useCategoryMaxStore = defineStore("categoryMax", {
  state: () => ({
    categoryMaxList: [],
    loading: false,
    id: 0,
  }),
  actions: {
    async fetchAllCategory(data) {
      this.loading = true;
      try {
        const res = await findAllBookCategoryApi(data);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.categoryMaxList = res?.data?.limit_cateMaxs;
        this.id = 1;
      } catch (error) {
        this.loading = false;
        errorToast("Not found");
      }
    },
    async fetchAllCategory2(data) {
      this.loading = true;
      try {
        const res = await findAllCansCategoryApi(data);
        if (res.status !== 200) {
          return;
        }
        this.loading = false;
        this.categoryMaxList = res?.data?.limit_cateMaxs;
        this.id = 2;
      } catch (error) {
        this.loading = false;
        errorToast("Not found");
      }
    },
  },
});
