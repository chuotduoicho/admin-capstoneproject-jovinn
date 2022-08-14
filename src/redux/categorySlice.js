import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const categories = JSON.parse(localStorage.getItem("categories"));
//const subcategories = JSON.parse(localStorage.getItem("subCategories"));
const initialState = {
  getAllCategories: categories ? categories : [],
  getSubCategories: [],
  getSkills: [],
  status: "idle"
}
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const data = await categoryService.getAllCategories();
    console.log(data);
    return data;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategories",
  async (category) => {
    const data = await categoryService.addCategory(category);
    console.log(data);
    return data;
  }
);

export const fetchSubCategories = createAsyncThunk(
  "category/fetchSubCategories",
  async (categoryId) => {
    const data = await categoryService.getSubCategories(categoryId);
    return data;
  }
);

export const fetchSkills = createAsyncThunk(
  "category/fetchSkills",
  async (subCategoryId) => {
    const data = await categoryService.getSkill(subCategoryId);
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
      state.getAllCategories = payload;
      state.status = "success";
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
    },
    [fetchSubCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubCategories.fulfilled]: (state, { payload }) => {
      state.getSubCategories = payload;
      state.status = "success";
    },
    [fetchSubCategories.rejected]: (state, action) => {
      state.status = "failed";
    },
    [fetchSkills.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSkills.fulfilled]: (state, { payload }) => {
      state.getSkills = payload;
      state.status = "success";
    },
    [fetchSkills.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { reducer } = categorySlice;
export default reducer;
export const selectAllCategories = (state) => state.category.getAllCategories;
export const selectSubcategories = (state) => state.category.getSubCategories;
export const selectSkills = (state) => state.category.getSkills;