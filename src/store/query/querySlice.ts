import { createSlice } from "@reduxjs/toolkit";

interface IQueryState {
  value: string;
}

const initialState = { value: "Киров" } as IQueryState;

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.value = action.payload;
    },
    clearQuery(state) {
      state.value = "";
    },
  },
});

export default querySlice;
export const queryActions = querySlice.actions;
