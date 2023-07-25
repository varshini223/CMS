import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UpdateInprogress = createAsyncThunk("update", async (data) => {
    return axio.put(`/api/updateinprogress`, data);
});

export const UpdateInprogReducer = createSlice({
    name: "update",
    initialState: {
        updateinprogress: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [UpdateInprogress.pending]: (state, action) => {
            state.loading = true;
        },
        [UpdateInprogress.fulfilled]: (state, action) => {
            state.updateinprogress = action.payload;
            state.loading = false;
        },
        [UpdateInprogress.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default UpdateInprogReducer.reducer;
