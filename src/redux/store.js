import { configureStore } from "@reduxjs/toolkit";
import admminReducer from "./adminSlice";
import categoryReducer from "./categorySlice";

const reducer = {
    admin: admminReducer,
    category: categoryReducer
};
export const store = configureStore({
    reducer: reducer,
    devTools: true
});