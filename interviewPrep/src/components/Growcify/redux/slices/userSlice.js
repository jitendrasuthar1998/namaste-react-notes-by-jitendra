import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    handleAuthentication: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const {handleAuthentication} = userSlice.actions;

export default userSlice.reducer;