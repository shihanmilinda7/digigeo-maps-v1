import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MapSelectorState {
  selectedMap: string;
  isAreaSideNavOpen: boolean;
}

const initialState: MapSelectorState = {
  selectedMap: "Area",
  isAreaSideNavOpen: true,
};

const mapSelectorSlice = createSlice({
  name: "MapSelector",
  initialState,
  reducers: {
    setSelectedMap: (state, action) => {
      state.selectedMap = action.payload;
    },
    setIsAreaSideNavOpen: (state, action) => {
      state.isAreaSideNavOpen = action.payload;
    },
  },
});

export const { setSelectedMap, setIsAreaSideNavOpen } = mapSelectorSlice.actions;

export default mapSelectorSlice.reducer;
