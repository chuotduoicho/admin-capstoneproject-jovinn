import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";
const admin = JSON.parse(localStorage.getItem("admin"));
const initialState = admin
  ? { isLoggedIn: true, admin }
  : { isLoggedIn: false, admin: null, isFetching: false };
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      console.log(data);
      return { admin: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.admin = action.payload.admin;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.admin = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.admin = null;
    }
  },
});

const { reducer } = authSlice;
export default reducer;