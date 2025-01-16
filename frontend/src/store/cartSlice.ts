import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCardProps } from "../types";

const storedCart = localStorage.getItem("cart");
const parsedCart = storedCart ? JSON.parse(storedCart) : { items: [], totalQuantity: 0 };

const initialState: {
  items: (ProductCardProps & { quantity: number })[];
  totalQuantity: number;
} = {
  items: parsedCart.items || [],
  totalQuantity: parsedCart.totalQuantity || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductCardProps>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity++;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.totalQuantity -= state.items[index].quantity;
        state.items.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items[index].quantity++;
        state.totalQuantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0 && state.items[index].quantity > 1) {
        state.items[index].quantity--;
        state.totalQuantity--;
      } else if (index >= 0 && state.items[index].quantity === 1) {
        if(!window.confirm(`Do you want to remove the ${state.items[index].name} ?`)){
          return;
        }
          state.items.splice(index, 1);
          state.totalQuantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity , emptyCart } =
  cartSlice.actions;
export default cartSlice.reducer;
