import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const solvedcomplaints = createAsyncThunk("Solved", async (data) => {
  return axio.get(`/api/solved`, data);
});

const SolvedComplaintReducers = createSlice({
  name: "Solved",
  initialState: {
    solved: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [solvedcomplaints.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [solvedcomplaints.fulfilled]: (state, action) => {
      state.solved = action.payload.data.data;
      state.dataLoading = false;
    },
    [solvedcomplaints.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default SolvedComplaintReducers.reducer;
