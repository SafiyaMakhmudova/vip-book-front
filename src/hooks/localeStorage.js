import { successToast } from "../utils/toast";
import { useBooks } from "@/features/products/composables/index";
const { cart, totalPrice, singleCart } = useBooks();

// Add to LocalStorage
export const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if(cart) {
    
  let existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  successToast("Product added to cart", { timeout: 2000 });

  fetchCartFromLocalStorage();
  getProductById(item.id);
  }
};

// Get LocalStorage
export const fetchCartFromLocalStorage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  if (storedCart) {
    cart.value = storedCart;
  }
};

// Remove LoclStorage
export const removeFromCart = (productId) => {
  const index = cart.value.findIndex((item) => item.id === productId);
  if (index !== -1) {
    if (cart.value[index].quantity > 1) {
      // Decrease the quantity by 1

      cart.value[index].quantity -= 1;

      getProductById(productId);
    } else {
      // Remove the item from the cart if the quantity is 1
      cart.value.splice(index, 1);
    }
  }

  // Recalculate total price
  totalPrice.value = cart.value.reduce((total, book) => {
    const productPrice = book.price * book.quantity;
    return total + productPrice;
  }, 0);

  // Update local storage
  updateLocalStorage();

  getProductById(productId);
};

// LocalStore ni yangilash funktsiyasi
const updateLocalStorage = () => {
  // LocalStore ga yangilangan ma'lumotlarni qo'yish
  localStorage.setItem("cart", JSON.stringify(cart.value));
};

export const plusIndex = (productId) => {
  const index = cart.value.findIndex((item) => item.id === productId);
  if (index !== -1) {
    cart.value[index].quantity += 1;
    updateLocalStorage();
  }
  totalPrice.value = cart.value.reduce((total, book) => {
    const productPrice = book.price * book.quantity; // Kitob narxi va miqdori orqali umumiy narxni hisoblaymiz
    return total + productPrice; // Hisoblangan narxni jami umumiy narxga qo'shamiz
  }, 0);
  getProductById(productId);
};

export function getProductById(id) {
  if (id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    singleCart.value = cart.find((product) => product.id == id);
    if (singleCart.value) {
      return singleCart;
    } else {
      return;
    }
  } else {
    return;
  }
}
