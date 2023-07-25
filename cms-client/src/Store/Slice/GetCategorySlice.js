import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const GetCategory = createAsyncThunk("category", async (data) => {
  return axio.get(`/api/gettype`, data);
});

const GetCategoryReducers = createSlice({
  name: "category",
  initialState: {
    complaintCategory: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [GetCategory.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [GetCategory.fulfilled]: (state, action) => {
      state.complaintCategory = action.payload.data.data;
      state.dataLoading = false;
    },
    [GetCategory.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default GetCategoryReducers.reducer;
