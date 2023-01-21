import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice';
import cartReducer from './CartSlice';
import wishlistReducer from './WishlistSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
