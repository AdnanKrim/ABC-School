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
