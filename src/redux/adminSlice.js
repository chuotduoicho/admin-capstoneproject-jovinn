import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AdminService from "../services/admin.service";
const getTotalUsers = JSON.parse(localStorage.getItem("totalUsers"));
const getTotalServices = JSON.parse(localStorage.getItem("totalServices"));
const getTotalRevenue = JSON.parse(localStorage.getItem("totalRevenue"));
const getRevenueByMonth = JSON.parse(localStorage.getItem("revenueByMonth"));
const initialState = getTotalUsers&&getTotalRevenue&&getTotalServices
    ?{
        getTotalUsers : getTotalUsers,
        getTotalRevenue : getTotalRevenue,
        getTotalServices : getTotalServices,
        status: "idle"
    }
    :{
        getTotalUsers : [],
        getTotalRevenue : [],
        getTotalServices : [],
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

    }
});

const {reducer} = adminSlice;
export default reducer;
export const selectTotalUsers = (state) => state.admin.totalUser;
export const selectTotalServices = (state) => state.admin.totalService;
export const selectTotalRevenue = (state) => state.admin.totalRevenue;
export const selectRevenueByMonth = (state) => state.admin.revenueByMonth;
