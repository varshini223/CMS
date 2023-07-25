import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UserLoginData = createAsyncThunk("Login", async (data) => {
    return axio.post(`/api/userlogin`, data);
});

export const UserLoginReducer = createSlice({
    name: "login",
    initialState: {
        UserLogin: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [UserLoginData.pending]: (state, action) => {
            state.loading = true;
        },
        [UserLoginData.fulfilled]: (state, action) => {
            state.UserLogin = action.payload;
            state.loading = false;
        },
        [UserLoginData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default UserLoginReducer.reducer;
