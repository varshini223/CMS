import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const inprogresscomplaints = createAsyncThunk("Inprogress", async (data) => {
  return axio.get(`/api/inprogress`, data);
});

const InprogressCompReducers = createSlice({
  name: "Inprogress",
  initialState: {
    inprogress: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [inprogresscomplaints.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [inprogresscomplaints.fulfilled]: (state, action) => {
      state.inprogress = action.payload.data.data;
      state.dataLoading = false;
    },
    [inprogresscomplaints.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default InprogressCompReducers.reducer;
