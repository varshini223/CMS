import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ComplaintCategory = createAsyncThunk("Category", async (data) => {
    return axio.post(`/api/posttype`, data);
});

export const CategoryReducer = createSlice({
    name: "Category",
    initialState: {
        category: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [ComplaintCategory.pending]: (state, action) => {
            state.loading = true;
        },
        [ComplaintCategory.fulfilled]: (state, action) => {
            state.category = action.payload;
            state.loading = false;
        },
        [ComplaintCategory.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default CategoryReducer.reducer;
