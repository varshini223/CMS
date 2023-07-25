import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const Solverhistory = createAsyncThunk("SolverComplaintHistory", async (data) => {
  return axio.post(`/api/solverhistory`, data);
});

const SolverHistoryReducers = createSlice({
  name: "SolverComplaintHistory",
  initialState: {
    solverhistory: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [Solverhistory.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [Solverhistory.fulfilled]: (state, action) => {
      state.solverhistory = action.payload.data.data;
      state.dataLoading = false;
    },
    [Solverhistory.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default SolverHistoryReducers.reducer;
