import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Shared/Layout/Layout";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Employees from "./Components/Pages/About/Employees";
import FullMessages from "./Components/Pages/Home/FullMessages";
import OurCampus from "./Components/Pages/Academic/OurCampus";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Payment from "./Components/Pages/Payment/Payment";
import Syllabus from "./Components/Pages/Academic/Syllabus";
import StudentDetails from "./Components/Pages/StudentDetails/StudentDetails";
import AdminPanel from "./Components/Pages/AdminPanel/AdminPanel";
import PendingStudent from "./Components/Pages/AdminPanel/Navigation/PendingStudent";
import AllStudent from "./Components/Pages/AdminPanel/Navigation/AllStudent";
import AdminLogin from "./Components/Pages/Login/AdminLogin";
import Notice from "./Components/Pages/Notice/Notice";
import EnterPhone from "./Components/Pages/Payment/EnterPhone";
import EnterOTP from "./Components/Pages/Payment/EnterOTP";
import AcademicRules from "./Components/Pages/Academic/AcademicRules";
import AcademicCalender from "./Components/Pages/Academic/AcademicCalender";
import Routine from "./Components/Pages/Academic/Routine";
import ApplyOnline from "./Components/Pages/Admission/ApplyOnline";
import ApplyMethod from "./Components/Pages/Admission/ApplyMethod";
import OurHistory from "./Components/Pages/About/OurHistory";
import StudentEdit from "./Components/Pages/AdminPanel/Navigation/StudentEdit";
import AdminPayment from "./Components/Pages/Payment/AdminPayment";
import AdminTeachers from "./Components/Pages/AdminPanel/Navigation/AdminTeachers";
import AdminTeachersEdit from "./Components/Pages/AdminPanel/Navigation/AdminTeachersEdit";
import AdminTeachersAdd from "./Components/Pages/AdminPanel/Navigation/AdminTeachersAdd";
import AdminStudentAdd from "./Components/Pages/AdminPanel/Navigation/AdminStudentAdd";
import Teachers from "./Components/Pages/About/Teachers";
import AdminNotices from "./Components/Pages/AdminPanel/Navigation/AdminNotices";
import AdminNoticesAdd from "./Components/Pages/AdminPanel/Navigation/AdminNoticeAdd";
import AdminNoticesEdit from "./Components/Pages/AdminPanel/Navigation/AdminNoticesEdit";
import AdminRoutine from "./Components/Pages/AdminPanel/Navigation/AdminRoutine";
import AdminRoutineAdd from "./Components/Pages/AdminPanel/Navigation/AdminRoutineAdd";
import AdminRoutineEdit from "./Components/Pages/AdminPanel/Navigation/AdminRoutineEdit";
import AdminSyllabus from "./Components/Pages/AdminPanel/Navigation/AdminSyllabus";
import AdminSyllabusAdd from "./Components/Pages/AdminPanel/Navigation/AdminSyllabusAdd";
import AdminSyllabusEdit from "./Components/Pages/AdminPanel/Navigation/AdminSyllabusEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
// default panel route ---------------------------
      // Home section
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fullMessages",
        element: <FullMessages />,
      },
      // Academic section
      {
        path: "/ourCampus",
        element: <OurCampus />,
      },
      {
        path: "/academicRules",
        element: <AcademicRules />,
      },
      {
        path: "/academicCalender",
        element: <AcademicCalender />,
      },
      {
        path: "/routine",
        element: <Routine />,
      },
      {
        path: "/syllabus",
        element: <Syllabus />,
      },
      // Admission section
      {
        path: "/applyOnline",
        element: <ApplyOnline />,
      },
      {
        path: "/applyMethod",
        element: <ApplyMethod />,
      },
      // About section
      {
        path: "/ourHistory",
        element: <OurHistory />,
      },
      {
        path: "/teachers",
        element: < Teachers/>,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      // Notice section
      {
        path: "/notice",
        element: <Notice />,
      },
      // Payment section
      {
        path: "/enterPhone",
        element: <EnterPhone />,
      },
      {
        path: "/enterotp",
        element: <EnterOTP />,
      },
      {
        path: "/studentDetails",
        element: <StudentDetails />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },
      // login and signup section
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
// admin panel route ---------------------------
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/dp",
        element: <AdminPanel />,
      },
      {
        path: "/pendingStudent",
        element: <PendingStudent />,
      },
      {
        path: "/allStudent",
        element: <AllStudent />,
      },
      {
        path: "/studentEdit/:studentId",
        element: <StudentEdit />,
      },
      {
        path: "/adminPayment/:studentId",
        element: <AdminPayment/>,
      },
      {
        path: "/adminTeachers",
        element:<AdminTeachers/>,
      },
      {
        path: "/adminTeachersEdit/:teacherId",
        element:<AdminTeachersEdit/>,
      },
      {
        path:"/adminTeacherAdd",
        element:<AdminTeachersAdd/>
      },
      {
        path:"/adminStudentAdd",
        element:<AdminStudentAdd/>
      },
      {
        path:"/adminNotices",
        element:<AdminNotices/>
      },
      {
        path:"/adminNoticesAdd",
        element:<AdminNoticesAdd/>
      },
      {
        path:"/adminNoticesEdit/:noticeId",
        element:<AdminNoticesEdit/>
      },
      {
        path:"/adminRoutines",
        element:<AdminRoutine/>
      },
      {
        path:"/adminRoutineAdd",
        element:<AdminRoutineAdd/>
      },
      {
        path:"/adminRoutineEdit/:routineId",
        element:<AdminRoutineEdit/>
      },
      {
        path:"/adminSyllabus",
        element:<AdminSyllabus/>
      },
      {
        path:"/adminSyllabusAdd",
        element:<AdminSyllabusAdd/>
      },
      {
        path:"/adminSyllabusEdit/:syllabusId",
        element:<AdminSyllabusEdit/>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
