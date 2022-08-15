import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import admminReducer from "./adminSlice";
import categoryReducer from "./categorySlice";
import transactionReducer from "./transactionSlice";

const reducer = {
    auth: authReducer,
    admin: admminReducer,
    category: categoryReducer,
    transaction: transactionReducer,

};
export const store = configureStore({
    reducer: reducer,
    devTools: true
});