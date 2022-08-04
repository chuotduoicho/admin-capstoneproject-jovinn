import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const categories = JSON.parse(localStorage.getItem("categories"));
const initialState = categories
    ?{
        getAllCategories: categories,
        getSubCategories: [],
        status: "idle"
    }
    :{
        getAllCategories: [],
        getSubCategories: [],
        status: "idle"
    };
export const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const data = categoryService.getAllCategories();
        console.log(data);
        return data;
    }
)

export const fetchSubCategories = createAsyncThunk(
  "category/fetchSubCategories",
  async (categoryId) => {
      const data = categoryService.getSubCategories(categoryId);
      console.log(data);
      return data;
  }
)

export const categorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: {
      [fetchCategories.pending]: (state, action) => {
        state.status = "loading";
      },
      [fetchCategories.fulfilled]: (state, { payload }) => {
        state.listCategories = payload;
        state.status = "success";
      },
      [fetchCategories.rejected]: (state, action) => {
        state.status = "failed";
      },
    },
  });

const {reducer} = categorySlice;
export default reducer;
export const selectAllCategories = (state) => state.category.getAllCategories;
export const selectSubcategories = (state) => state.category.getSubCategories;