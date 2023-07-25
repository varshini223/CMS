import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const complaintDetails = createAsyncThunk("Complaint", async (data) => {
    return axio.post(`/api/postcomplaint`, data);
});

export const ComplaintReducer = createSlice({
    name: "complaint",
    initialState: {
        Complaint: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [complaintDetails.pending]: (state, action) => {
            state.loading = true;
        },
        [complaintDetails.fulfilled]: (state, action) => {
            state.Login = action.payload;
            state.loading = false;
        },
        [complaintDetails.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default ComplaintReducer.reducer;
