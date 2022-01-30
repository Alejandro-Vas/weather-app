import { createSlice } from "@reduxjs/toolkit";

interface IForecastState {
  value: number[];
}

const initialState = { value: [58.5966, 49.6601] } as IForecastState;

const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    setCoordinates(state, action) {
      state.value = action.payload;
    },
  },
});

export default coordinatesSlice;
export const coordinatesActions = coordinatesSlice.actions;
