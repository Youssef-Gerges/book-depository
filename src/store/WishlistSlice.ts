import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type wishlistState = {
  items: Array<{
    id: number;
    qty: number;
  }>;
};

const wishlistInitialState: wishlistState = {
  items: JSON.parse(localStorage.getItem('wishItems') ?? '[]'),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: wishlistInitialState,
  reducers: {
    addItemToWish: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      let item = state.items.find((item) => item.id === action.payload.id);

      if (!item) {
        state.items.push({ id: action.payload.id, qty: 1 });
        localStorage.setItem('wishItems', JSON.stringify(state.items));
      }
    },

    RemoveItemFormWish: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        let index = state.items.indexOf(item);
        state.items.splice(index, 1);
      }
      localStorage.setItem('wishItems', JSON.stringify(state.items));
    },
  },
});

export const { addItemToWish, RemoveItemFormWish } = wishlistSlice.actions;
export const selectWishlist = (state: RootState) => state.wishlist;
export default wishlistSlice.reducer;
