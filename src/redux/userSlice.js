import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/user.service";

const getAllUsers = JSON.parse(localStorage.getItem("users"));
const initialState = {
    listUsers : getAllUsers ? getAllUsers : [],
    status: "idle"
};

export const fetchAllUsers = createAsyncThunk(
    "user/fetchAllUsers",
    async () => {
        const data = await userService.getAllUsers();
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
    extraReducers:{
        [fetchAllUsers.pending]:(state, action) => {
            state.status = "loading";
        },
        [fetchAllUsers.fulfilled]:(state, { payload }) => {
            state.listUsers = payload;
            state.status = "success";
        },
        [fetchAllUsers.pending]:(state, action) => {
            state.status = "loading";
        },
        [banOrUnbanUser.pending]:(state, action) => {
            state.status = "loading";
        },
        [banOrUnbanUser.fulfilled]:(state, { payload }) => {
            state.status = "success";
        },
        [banOrUnbanUser.pending]:(state, action) => {
            state.status = "loading";
        },
    }
});

const { reducer } = userSlice;
export default reducer;

export const selectAllUsers = (state) => state.user.listUsers;
