import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AdminLoginData = createAsyncThunk("Login", async (data) => {
    return axio.post(`/api/adminlogin`, data);
});

export const AdminLoginReducer = createSlice({
    name: "login",
    initialState: {
        AdminLogin: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [AdminLoginData.pending]: (state, action) => {
            state.loading = true;
        },
        [AdminLoginData.fulfilled]: (state, action) => {
            state.AdminLogin = action.payload;
            state.loading = false;
        },
        [AdminLoginData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default AdminLoginReducer.reducer;
