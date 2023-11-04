import { combineReducers } from "@reduxjs/toolkit";
import saveReducer from "./saveSlice";
import mapSelectorReducer from "./map-selector/map-selector-slice";

const rootReducer = combineReducers({
  saveReducer,
  mapSelectorReducer,
});

export default rootReducer;
