import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // mutating the state over here
    addItem: (state, action) => {
      // Vanilla (older) Redux => don't mutate the state, and returning was mandatory
      // const newState = [...state];
      // newState.push(action.payload);
      // return newState;

      // Redux toolkit
      // We have to mutate the state
      console.log(current(state));
      console.log("action", action);
      state.items.push(action.payload);
    },
    remoteItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;

      //  RTK says that you can either mutate the existing state or return a new state
      // return {items:[]}; this new object {items:[]} will be replace inside original state = []
    },
  },
});

export const { addItem, remoteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
