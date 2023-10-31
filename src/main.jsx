import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Shared/Layout/Layout';
import ErrorPage from './Components/Shared/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import Teachers from './Components/Pages/Teachers/Teachers';
import Employees from './Components/Pages/Employees/Employees';
import FullMessages from './Components/Shared/Messages/FullMessages';
import OuCampus from './Components/Pages/OuCampus/OuCampus';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Payment from './Components/Pages/Payment/Payment';
import Syllabus from './Components/Pages/Syllabus/Syllabus';
import StudentDetails from './Components/Pages/StudentDetails/StudentDetails';
import AdminPanel from './Components/Pages/AdminPanel/AdminPanel';
import PendingStudent from './Components/Pages/AdminPanel/Navigation/PendingStudent';
import AllStudent from './Components/Pages/AdminPanel/Navigation/AllStudent';
import AdminLogin from './Components/Pages/Login/AdminLogin';
import Notice from './Components/Pages/Notice/Notice';
import EnterPhone from './Components/Pages/Payment/EnterPhone';
import EnterOTP from './Components/Pages/Payment/EnterOTP';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/ourcampus",
        element:<OuCampus/>,
      },
      {
        path:"/teachers",
        element:<Teachers/>,
      },
      {
        path:"/employees",
        element:<Employees/>,
      },
      {
        path:"/fullmessages",
        element:<FullMessages/>,
      },
      {
        path:"/notice",
        element:<Notice/>,
      },
      {
        path:"/Payment",
        element:<Payment/>,
      },
      {
        path:"/enterPhone",
        element:<EnterPhone/>,
      },
      {
        path:"/enterotp",
        element:<EnterOTP/>
      },
      {
        path:"/syllabus",
        element:<Syllabus/>,
      },
      {
        path:"/studentDetails",
        element:<StudentDetails/>,
      },
// admin panel route ------------------------
      {
        path:"/adminlogin",
        element:<AdminLogin/>,
      },
      {
        path:"/dp",
        element:<AdminPanel/>,
      },
      {
        path:"/pendingStudent",
        element:<PendingStudent/>,
      },
      {
        path:"/allStudent",
        element:<AllStudent/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>
  <RouterProvider router={router} />
  </ThemeProvider>
  </React.StrictMode>,
)
