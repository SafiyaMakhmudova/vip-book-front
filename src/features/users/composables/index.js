import { storeToRefs } from "pinia";
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import router from "@/router";
import { warningToast } from "@/utils/toast";
import { useUserStore } from "@/features/users/store/UserStore";

import { useBooks } from "@/features/products/composables/index";
const { cart } = useBooks();

export const useUsers = () => {
  const user = reactive({
    phone_number: "",
  });

  const orders = reactive({
    city: "Select options",
    district: "",
    home: "",
    appartment: "",
    user_id: "",
  });

  const payment = reactive({
    cart_item_id: 0,
    user_id: 0,
    order_id: 0,
    payment_type: "",
  });

  const store = useUserStore();
  const router = useRouter();
  const route = useRoute();
  const loading = ref(false);

  const { userList, order_id, cart_item_id } = storeToRefs(store);
  const {
    createUser,
    createOrder,
    createCart,
    createCartItem,
    createOrderItem,
  } = useUserStore();

  async function paymentNext() {
    if (!user.phone_number) {
      warningToast("Fill the phone number");
      return;
    }
    if (!orders.district || !orders.appartment || !orders.home) {
      warningToast("Fill the blanck");
      return;
    }
    if (orders.city == "Select options") {
      warningToast("Fill the blanck");
      return;
    }
    if (!payment.payment_type) {
      warningToast("Select the payment method");
      return;
    }
    loading.value = true;

    try {
      await createUser(user);
    } catch (error) {
      console.log(error);
    }

    let user_id = JSON.parse(localStorage.getItem("user_id")) || [];

    (async () => {
      for (const item of cart.value) {
        const cartValue = {
          book_id: item.id,
          count: item.quantity,
          price: item.price,
          user_id: user_id,
        };

        await createCart(cartValue);
      }
    })();

    try {
      orders.user_id = user_id;
      await createOrder(orders);

      await createCartItem({ user_id: user_id });
      payment.cart_item_id = cart_item_id;
      payment.user_id = user_id;
      payment.order_id = order_id;

      await createOrderItem(payment);

      user.phone_number = "";
      orders.appartment = "";
      orders.district = "",
      orders.home = "",
      orders.city = "Select options";
      payment.payment_type = "";
      orders.user_id = 0;
  
      await router.push({ name: "Success" });
      loading.value = false
    } catch (error) {
      console.log(error.message);
    }


  }
  return {
    paymentNext,
    user,
    orders,
    payment,
    loading,
  };
};
