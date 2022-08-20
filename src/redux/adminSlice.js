import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../services/admin.service";
const getCountData = JSON.parse(localStorage.getItem("countData"));
const getTotalServices = JSON.parse(localStorage.getItem("totalServices"));
const getTotalRevenue = JSON.parse(localStorage.getItem("totalRevenue"));
const getRevenueByMonth = JSON.parse(localStorage.getItem("revenueByMonth"));
const initialState = getCountData
    ?{
        getCountData : getCountData,
        getTotalServices : getTotalServices,
        getTotalRevenue : getTotalRevenue,
        getRevenueByMonth : getRevenueByMonth,
        status: "idle"
    }
    :{
        getCountData : {},
        getTotalServices : {},
        getTotalRevenue : {},
        getRevenueByMonth : [],
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

export const fetchCountData = createAsyncThunk(
    "admin/fetchCountData",
    async () =>{
        const data = await AdminService.getCountData();
        console.log(data);
        return data;
    }
);

export const fetchTotalRevenue = createAsyncThunk(
    "admin/fetchTotalRevenue",
    async () =>{
        const data = await AdminService.getTotalRevenue();
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

export const fetchRevenueByMonths = createAsyncThunk(
    "admin/fetchRevenueByMonths",
    async () =>{
        const data = await AdminService.getRevenueByMonth();
        console.log(data);
        return data;
    }
);

const adminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers:{
        [fetchCountData.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchCountData.fulfilled]: (state, {payload}) => {
            state.getCountData = payload;
            state.status = "success";
        },
        [fetchCountData.rejected]: (state, action) => {
            state.status = "failed";
        },
        [fetchTotalService.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchTotalService.fulfilled]: (state, {payload}) => {
            state.getTotalServices = payload;
            state.status = "success";
        },
        [fetchTotalService.rejected]: (state, action) => {
            state.status = "failed";
        },
        [fetchRevenueByMonths.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchRevenueByMonths.fulfilled]: (state, {payload}) => {
            state.getRevenueByMonth = payload;
            state.status = "success";
        },
        [fetchRevenueByMonths.rejected]: (state, action) => {
            state.status = "failed";
        },
        [fetchTotalRevenue.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchTotalRevenue.fulfilled]: (state, {payload}) => {
            state.getTotalRevenue = payload;
            state.status = "success";
        },
        [fetchTotalRevenue.rejected]: (state, action) => {
            state.status = "failed";
        },
    }
});

const {reducer} = adminSlice;
export default reducer;
export const selectCountData = (state) => state.admin.getCountData;
export const selectTotalServices = (state) => state.admin.getTotalServices;
export const selectTotalRevenue = (state) => state.admin.getTotalRevenue;
export const selectRevenueByMonth = (state) => state.admin.getRevenueByMonth;
