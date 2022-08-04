import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../services/admin.service";
const getTotalUsers = JSON.parse(localStorage.getItem("totalUsers"));
const getTotalServices = JSON.parse(localStorage.getItem("totalServices"));
const getTotalRevenue = JSON.parse(localStorage.getItem("totalRevenue"));
const getRevenueByMonth = JSON.parse(localStorage.getItem("revenueByMonth"));
const initialState = getTotalUsers&&getTotalServices
    ?{
        getTotalUsers : getTotalUsers,
        getTotalServices : getTotalServices,
        status: "idle"
    }
    :{
        getTotalUsers : {},
        getTotalServices : {},
        status: "idle"
    };

export const fetchAdmins = createAsyncThunk(
    "admin/fetchAdmins",
    async () =>{
        const data = await AdminService.getAllAdmins();
        console.log(data);
        return data;
    }
);

export const fetchTotalUser = createAsyncThunk(
    "admin/fetchTotalUser",
    async () =>{
        const data = await AdminService.getTotalUsers();
        console.log(data);
        return data;
    }
);

export const fetchTotalRevenue = createAsyncThunk(
    "admin/fetchTotalRevenue",
    async () =>{
        const data = await AdminService.getTotalUsers();
        console.log(data);
        return data;
    }
);

export const fetchTotalService = createAsyncThunk(
    "admin/fetchTotalService",
    async () =>{
        const data = await AdminService.getTotalServices();
        console.log(data);
        return data;
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers:{
        [fetchTotalUser.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchTotalUser.fulfilled]: (state, {payload}) => {
            state.status = "success";
        },
        [fetchTotalUser.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
});

const {reducer} = adminSlice;
export default reducer;
export const selectTotalUsers = (state) => state.admin.getTotalUsers;
export const selectTotalServices = (state) => state.admin.getTotalServices;
