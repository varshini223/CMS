import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const complainthistory = createAsyncThunk("complaintHistory", async (data) => {
  return axio.post(`/api/complaints`, data);
});

const historyReducers = createSlice({
  name: "complaintHistory",
  initialState: {
    history: [],
    dataLoading: true,
  },
  reducers: {},
  extraReducers: {
    [complainthistory.pending]: (state, action) => {
      state.dataLoading = true;
    },
    [complainthistory.fulfilled]: (state, action) => {
      state.history = action.payload.data.data;
      state.dataLoading = false;
    },
    [complainthistory.rejected]: (state, action) => {
      state.dataLoading = false;
    },
  },
});

export default historyReducers.reducer;
