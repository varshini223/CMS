import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const Categorybasedsolvers = createAsyncThunk("CategoryBasedSolvers", async (data) => {
  return axio.post(`/api/getsolvers`, data);
});

const CatBasedSolversReducers = createSlice({
  name: "CategoryBasedSolvers",
  initialState: {
    CategoryBasedSolvers: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [Categorybasedsolvers.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [Categorybasedsolvers.fulfilled]: (state, action) => {
      state.CategoryBasedSolvers = action.payload.data.data;
      state.dataLoading = false;
    },
    [Categorybasedsolvers.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default CatBasedSolversReducers.reducer;
