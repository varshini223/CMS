import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import ComplaintHistory from "./component/ComplaintHistory";
import AdminHome from "./component/AdminHome";
import Solvers from "./component/Solvers";
import UserLogin from "./component/UserLogin";
import SolversLogin from "./component/SolversLogin";
import AdminLogin from "./component/AdminLogin";
import SolverHistory from "./component/SolverHistory";

function App() {

  const route = useRoutes([
    {path: '/', element: <Login />},
    {path: '/userlogin', element: <UserLogin /> },
    {path: '/solverslogin', element: <SolversLogin /> },
    {path: '/adminlogin', element: <AdminLogin /> },
    {path: '/home', element: <Home /> },
    {path: '/history', element: <ComplaintHistory /> },
    {path: '/admin', element: <AdminHome />},
    {path: '/solver', element: <Solvers />},
    {path: '/solverhistory', element: <SolverHistory />}
  ])
  return (
    <div>
      {route}
    </div>
  );
}

export default App;
