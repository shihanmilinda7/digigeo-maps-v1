import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MapSelectorState {
  selectedMap: string;
}

const initialState: MapSelectorState = {
  selectedMap: "Area",
};

const mapSelectorSlice = createSlice({
  name: "MapSelector",
  initialState,
  reducers: {
    setSelectedMap: (state, action) => {
      state.selectedMap = action.payload;
    },
  },
});

export const { setSelectedMap } = mapSelectorSlice.actions;

export default mapSelectorSlice.reducer;
