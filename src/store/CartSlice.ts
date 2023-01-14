import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type cartState = {
  items: [];
  currency: string;
};

const cartInitialState: cartState = {
  items: JSON.parse(localStorage.getItem('cartItems') ?? '[]'),
  currency: localStorage.getItem('currency') ?? 'USD',
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      localStorage.setItem('currency', action.payload);
      return { ...state, currency: action.payload };
    },
  },
});

export const { changeCurrency } = CartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default CartSlice.reducer;
