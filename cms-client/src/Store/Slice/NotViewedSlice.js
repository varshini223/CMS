import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const notviewedcomplaints = createAsyncThunk("Notviewed", async (data) => {
  return axio.get(`/api/notviewed`, data);
});

const NotViewedCompReducers = createSlice({
  name: "Notviewed",
  initialState: {
    notviewed: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [notviewedcomplaints.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [notviewedcomplaints.fulfilled]: (state, action) => {
      state.notviewed = action.payload.data.data;
      state.dataLoading = false;
    },
    [notviewedcomplaints.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default NotViewedCompReducers.reducer;
