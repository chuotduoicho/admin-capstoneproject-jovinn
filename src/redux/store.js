import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import admminReducer from "./adminSlice";
import categoryReducer from "./categorySlice";
import transactionReducer from "./transactionSlice";
import userReducer from "./userSlice";

const reducer = {
    auth: authReducer,
    admin: admminReducer,
    user: userReducer,
    category: categoryReducer,
    transaction: transactionReducer,

};
export const store = configureStore({
    reducer: reducer,
    devTools: true
});