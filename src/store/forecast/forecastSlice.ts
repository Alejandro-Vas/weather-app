import { createSlice } from "@reduxjs/toolkit";

interface IForecastState {
  value: number[];
}

const initialState = { value: [58.5966, 49.6601] } as IForecastState;

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.value = action.payload;
    },
    clearQuery(state) {
      state.value = [];
    },
  },
});

export default querySlice;
export const queryActions = querySlice.actions;
