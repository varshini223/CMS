import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UpdateView = createAsyncThunk("update", async (data) => {
    return axio.put(`/api/updateview`, data);
});

export const UpdateViewReducer = createSlice({
    name: "update",
    initialState: {
        updateview: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [UpdateView.pending]: (state, action) => {
            state.loading = true;
        },
        [UpdateView.fulfilled]: (state, action) => {
            state.updateview = action.payload;
            state.loading = false;
        },
        [UpdateView.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default UpdateViewReducer.reducer;
