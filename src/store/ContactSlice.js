import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contactElement",
  initialState: [
    {
      name: "seif redux",
      LastName: "redux Last name",
      age: 29,
      email: "seif@redux.com",
    },
    {
      name: "hamza redux",
      LastName: "redux Last name",
      age: 30,
      email: "hamza@redux.com",
    },
  ],
  reducers: {
    setContact: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;
