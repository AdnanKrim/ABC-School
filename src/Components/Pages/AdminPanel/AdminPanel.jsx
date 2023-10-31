import DashBoardBody from "./Dashboard/Dashbody/DashBoardBody";
import Drawer from "../AdminPanel/Dashboard/SearchPanel/Drawer";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const AdminPanel = () => {


    const [studentData, setStudentData] =useState([])

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/adminlogin');
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            const headers = {
                accept: 'application/json',
                Authorization: 'Bearer ' + user.token
            };

            axios.get(`http://oottnxcpjz.ap.loclx.io/api/login`, {
                headers: headers
            })
            .then((res) => { setStudentData(res.data); })
            .catch((error) => { setStudentData(error); });
        }
    }, [navigate]);  

  return (
    <div className="flex justify-between gap-1">
        {/* drawer section  */}
        <Drawer />
      {/* adminbody  */}
            <DashBoardBody />
    </div>
  );
};

export default AdminPanel;