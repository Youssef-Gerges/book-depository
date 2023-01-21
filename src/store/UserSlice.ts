import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type UserState = {
  email: string | null;
};

const initialState: UserState = {
  email: sessionStorage.getItem('user'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      sessionStorage.setItem('user', action.payload);
      return { ...state, email: action.payload };
    },
    logoutUser: (state, action) => {
      sessionStorage.removeItem('user');
      state.email = '';
    },
  },
});

export const { signIn, logoutUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
