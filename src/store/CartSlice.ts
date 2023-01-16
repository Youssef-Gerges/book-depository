import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type cartState = {
  items: Array<{
    id: number;
    qty: number;
  }>;
  currency: string;
  totalCart: number;
};

const cartInitialState: cartState = {
  items: JSON.parse(localStorage.getItem('cartItems') ?? '[]'),
  currency: localStorage.getItem('currency') ?? 'USD',
  totalCart: Number.parseInt(localStorage.getItem('totalCart') ?? '0'),
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,

  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      localStorage.setItem('currency', action.payload);
      return { ...state, currency: action.payload };
    },

    addItemToCart: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      let newItems;
      state.totalCart = state.totalCart + action.payload.price;
      let item = state.items.find((item) => item.id === action.payload.id);

      if (!item) {
        state.items.push({ id: action.payload.id, qty: 1 });
      } else {
        item.qty++;
      }

      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalCart', JSON.stringify(state.totalCart));
    },

    RemoveItemFormCart: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        let price = item.qty * action.payload.price;
        state.totalCart = state.totalCart - price;
        let index = state.items.indexOf(item);
        state.items.splice(index, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalCart', JSON.stringify(state.totalCart));
    },

    addQty: (state, action: PayloadAction<{ id: number; price: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty++;
        state.totalCart = state.totalCart + action.payload.price;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
      localStorage.setItem('totalCart', JSON.stringify(state.totalCart));
    },

    removeQty: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        const index = state.items.indexOf(item);
        state.items.splice(index, 1);

        if (item?.qty !== 1) {
          state.items.push({ id: action.payload.id, qty: item.qty - 1 });
        }
        state.totalCart = state.totalCart - action.payload.price;
        localStorage.setItem('cartItems', JSON.stringify(state.items));
        localStorage.setItem('totalCart', JSON.stringify(state.totalCart));
      }
    },
  },
});

export const {
  changeCurrency,
  addItemToCart,
  RemoveItemFormCart,
  removeQty,
  addQty,
} = CartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default CartSlice.reducer;
