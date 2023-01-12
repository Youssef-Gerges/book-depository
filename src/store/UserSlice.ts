import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type UserState = {
  email: string;
};

const initialState: UserState = {
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      return { ...state, email: action.payload };
    },
  },
});

export const { signIn } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.email;
export default userSlice.reducer;
