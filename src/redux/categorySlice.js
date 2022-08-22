import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

const initialState = {
  getAllCategories: [],
  getSubCategories: [],
  getSkills: [],
  status: "idle",
};
export const addCategory = createAsyncThunk(
  "category/addCategories",
  async (category) => {
    const data = await categoryService.addCategory(category);
    console.log(data);
    return data;
  }
);
export const addSubcate = createAsyncThunk(
  "category/addSubcate",
  async (category) => {
    const data = await categoryService.addSubCategory(category);
    console.log(data);
    return data;
  }
);
export const addSkill = createAsyncThunk(
  "category/addSkill",
  async (category) => {
    const data = await categoryService.addSkill(category);
    console.log(data);
    return data;
  }
);
export const deleteSkill = createAsyncThunk(
  "category/deleteSkill",
  async (category) => {
    const data = await categoryService.deleteSkill(category);
    console.log(data);
    return data;
  }
);
export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const data = await categoryService.getAllCategories();
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
    const data = await categoryService.getSkills(subCategoryId);
    console.log(data);
    return data;
  }
);

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
      state.subcategoryStatus = "failed";
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
    [addCategory.pending]: (state, action) => {
      state.status = "loading";
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [addCategory.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addSubcate.pending]: (state, action) => {
      state.status = "loading";
    },
    [addSubcate.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [addSubcate.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addSkill.pending]: (state, action) => {
      state.status = "loading";
    },
    [addSkill.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [addSkill.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteSkill.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteSkill.fulfilled]: (state, { payload }) => {
      state.status = "success";
    },
    [deleteSkill.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { reducer } = categorySlice;
export default reducer;
export const selectAllCategories = (state) => state.category.getAllCategories;
export const selectSubcategories = (state) => state.category.getSubCategories;
export const selectSubcategoryStatus = (state) =>
  state.category.subcategoryStatus;
export const selectSkillStatus = (state) => state.category.skillStatus;
export const selectSkills = (state) => state.category.getSkills;
