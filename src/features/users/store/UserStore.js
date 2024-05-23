import { defineStore } from "pinia";
import { errorToast } from "@/utils/toast";
import { createUserApi, createOrderApi, createCartApi } from "@/api/user";
import { createCartItemApi, createOrderItemApi } from "../../../api/user";

import { useBooks } from "@/features/products/composables/index";
const { cart } = useBooks();

export const useUserStore = defineStore("users", {
  state: () => ({
    userList:{},
    loading: false,
    order_id:0,
    cart_item_id:0,
  }),

  actions: {
    async createUser(data) {
      try {
        const res = await createUserApi(data);
        if (res.status !== 201) {
          return;
        }
        this.userList = res?.data?.user;

        if (res?.data.token?.access_token) {
          localStorage.setItem('access_token', res.data.token.access_token);
        }
        if (res?.data?.user.id) {
          localStorage.setItem('user_id', res.data?.user?.id);
        }
        console.log("successs");
      } catch (error) {
        errorToast("user",error.message);
      }
    },
    async createOrder(data) {
      try {
        const res = await createOrderApi(data);
        if (res.status !== 201) {
          return;
        }
        this.order_id  = res?.data.id;
        console.log("order");
      } catch (error) {
        errorToast("order",error.message);
      }
    },
    async createCart(data) {
      try {
        const res = await createCartApi(data);
        if (res.status !== 201) {
          return;
        }
        console.log("++");
      } catch (error) {
        errorToast("cart",error.message);
      }
    },
    async createCartItem(data) {
      try {
        const res = await createCartItemApi(data);
        if (res.status !== 201) {
          return;
        }
        this.cart_item_id = res?.data?.id
        console.log("-", this.cart_item_id);
      } catch (error) {
        errorToast("cartItem",error.message);
      }
    },  
    async createOrderItem(data) {
      this.loading = true;
      try {
        const res = await createOrderItemApi(data);
        if (res.status !== 201) {
          return;
        }
        console.log("Success");
        
        
        localStorage.removeItem("cart");
        this.loading = false;
      } catch (error) {
        this.loading = false;
        errorToast("OrderItem",error.message);
      }
    },
  },
});
