import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/user.service";
const initialState = {
  listUsers: [],
  userDetail: {},
  listTransactions: [],
  status: "idle",
};

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const data = await userService.getAllUsers();
    console.log(data);
    return data;
  }
);
export const fetchUserDetail = createAsyncThunk(
  "user/fetchUserDetail",
  async (id) => {
    const data = await userService.getUserById(id);
    console.log(data);
    return data;
  }
);
export const fetchUserTransactions = createAsyncThunk(
  "user/fetchUserTransactions",
  async (id) => {
    const data = await userService.getTransactions(id);
    console.log(data);
    return data;
  }
);

export const banOrUnbanUser = createAsyncThunk(
  "user/banOrUnbanUser",
  async (userId) => {
    const data = await userService.banOrUnbanUser(userId);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [fetchAllUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllUsers.fulfilled]: (state, { payload }) => {
      state.listUsers = payload;
      state.status = "success";
    },
    [fetchAllUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserTransactions.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserTransactions.fulfilled]: (state, { payload }) => {
      state.listTransactions = payload;
      state.status = "success";
    },
    [fetchUserTransactions.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchUserDetail.fulfilled]: (state, { payload }) => {
      state.userDetail = payload;
      state.status = "success";
    },
    [fetchUserDetail.pending]: (state, action) => {
      state.status = "loading";
    },
    [banOrUnbanUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [banOrUnbanUser.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [banOrUnbanUser.pending]: (state, action) => {
      state.status = "loading";
    },
  },
});

const { reducer } = userSlice;
export default reducer;

export const selectAllUsers = (state) => state.user.listUsers;
export const selectAllTransactions = (state) => state.user.listTransactions;
export const selectUserDetail = (state) => state.user.userDetail;
