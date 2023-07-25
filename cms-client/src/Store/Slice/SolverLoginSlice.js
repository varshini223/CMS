import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SolverLoginData = createAsyncThunk("Login", async (data) => {
    return axio.post(`/api/solverlogin`, data);
});

export const SolverLoginReducer = createSlice({
    name: "login",
    initialState: {
        SolverLogin: [],
        loading: false,
    },
    reducer: {},
    extraReducers: {
        [SolverLoginData.pending]: (state, action) => {
            state.loading = true;
        },
        [SolverLoginData.fulfilled]: (state, action) => {
            state.SolverLogin = action.payload;
            state.loading = false;
        },
        [SolverLoginData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
});

export default SolverLoginReducer.reducer;
