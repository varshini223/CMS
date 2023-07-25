import { configureStore, combineReducers } from "@reduxjs/toolkit";
import UserLoginReducer from "./Slice/UserLoginSlice";
import ComplaintReducer from "./Slice/ComplaintDetails";
import historyReducers from "./Slice/HistorySlice";
import NotViewedCompReducers from "./Slice/NotViewedSlice";
import InprogressCompReducers from "./Slice/InprogressSlice";
import UpdateViewReducer from "./Slice/UpdateView";
import UpdateInprogReducer from "./Slice/UpdateInprogress";
import SolvedComplaintReducers from "./Slice/SolvedComplaints";
import CategoryReducer from "./Slice/CategorySlice";
import GetCategoryReducers from "./Slice/GetCategorySlice";
import CatBasedSolversReducers from "./Slice/CategoryBasedSolvers";
import SolverLoginReducer  from "./Slice/SolverLoginSlice";
import SolverBasedReducers from "./Slice/SolverBasedComplaint";
import SolverHistoryReducers from "./Slice/SolverHistorySlice";
import AdminLoginReducer from "./Slice/AdminLoginSlice";

const rootReducer = combineReducers({
  UserLoginData: UserLoginReducer,
  Complaints: ComplaintReducer,
  history: historyReducers,
  notviewed: NotViewedCompReducers,
  inprogress: InprogressCompReducers,
  updateview: UpdateViewReducer,
  updateinprogress: UpdateInprogReducer,
  solved: SolvedComplaintReducers,
  category: CategoryReducer,
  complaintCategory: GetCategoryReducers,
  CategoryBasedSolvers: CatBasedSolversReducers,
  SolverLoginData: SolverLoginReducer,
  AdminLoginData: AdminLoginReducer,
  solvercomplaint: SolverBasedReducers,
  solverhistory: SolverHistoryReducers,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
