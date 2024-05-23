import api from "@/plugins/axios";

const url = import.meta.env.VITE_BASE_URL;

export function createUserApi(data) {
  return api.post(url + "user/create", data);
}

export function createOrderApi(data) {
  return api.post(url + "order/create", data);
}

export function createCartApi(data) {
  return api.post(url + "cart/create", data);
}

export function createCartItemApi(data) {
  return api.post(url + `cart-item/create`, data);
}

export function createOrderItemApi(data) {
    console.log("api", data);
  return api.post(url + "order-item/create", data);
}
