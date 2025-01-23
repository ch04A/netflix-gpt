import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    addUser: (_, action) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
