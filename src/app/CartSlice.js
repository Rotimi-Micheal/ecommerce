import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    addItemToCart: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.Quantity++;
        toast.success(`Item QTY Increased`, {
          className: "bg-black shadow-slate-900 text-white",
        });
      } else {
        const newCartItem = { ...action.payload, Quantity: 1 };
        state.cartItems.push(newCartItem);

        toast.success(`${action.payload.title} added to Cart`, {
          className: "bg-black shadow-slate-900 text-white",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {
      const removedItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removedItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Removed From Cart`);
    },
    increaseCartItems: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingCartItem) {
        existingCartItem.Quantity++;
        toast.success(`Item QTY Increased`, {
          className: "bg-black shadow-slate-900 text-white",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseCartItems: (state, action) => {
      const existingCartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem.Quantity > 1) {
        existingCartItem.Quantity--;
        toast.success(`Item QTY Decreased`, {
          className: "bg-black shadow-slate-900 text-white",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  addItemToCart,
  removeItemFromCart,
  increaseCartItems,
  decreaseCartItems,
  clearCartItems,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;
