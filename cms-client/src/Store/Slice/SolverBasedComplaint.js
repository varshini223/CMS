import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const solverBased = createAsyncThunk("SolverBased", async (data) => {
  return axio.post(`/api/solvercomplaint`, data);
});

const SolverBasedReducers = createSlice({
  name: "solverBased",
  initialState: {
    solvercomplaint: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [solverBased.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [solverBased.fulfilled]: (state, action) => {
      state.solvercomplaint = action.payload.data.data;
      state.dataLoading = false;
    },
    [solverBased.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default SolverBasedReducers.reducer;
