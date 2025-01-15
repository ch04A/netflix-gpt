// import { createSlice } from "@reduxjs/toolkit";
// import { useReducer } from "react";
// import { addUser, removeUser } from "./userSlice";

// const userSlice = createSlice({
//   name: "user",
//   initialState: null,
//   reducers: {
//     addUser: (state, action) => {
//       return action.payload;
//     },
//     removeUser: (state, action) => {
//       return null;
//     },
//   },
// });
// export const { addUser, removeUser } = userSlice.actions;
// export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    removeUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, removeUser, useReducer } = userSlice.actions; // Error if 'addUser' was declared before
export default userSlice.reducer;
