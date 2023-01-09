import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photos/photosSlice";

export const store = configureStore({
  reducer: { photos: photosReducer },
});
