import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { phoneBookSlice } from "./phoneBookSlice";


export const store = configureStore({
reducer: {
  contacts: phoneBookSlice.reducer,
  filter: filterSlice.reducer,
},
});

