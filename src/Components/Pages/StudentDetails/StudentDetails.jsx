
import hr from "../../../../public/icons/hrLine.png"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const StudentDetails = () => {

    const [studentData, setStudentData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'You have to Login first',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            const headers = {
                accept: 'application/json',
                Authorization: 'Bearer ' + user.token
            };

            axios.get(`http://wjyc3bpfiy.ap.loclx.io/api/student-detail`, {
                headers: headers
            })
                .then((res) => { setStudentData(res.data); })
                .catch((error) => { setStudentData(error); });
        }
    }, [navigate]);
    console.log(studentData);

    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://wjyc3bpfiy.ap.loclx.io/api/student-logout`).then(res => {
            if (res.data.status === "405") {
                localStorage.removeItem('token', res.data.token);
                localStorage.removeItem('user', JSON.stringify(res.data));
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login');
            }
        })
    }

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="bg-green-100 px-5 mt-2 rounded-xl">
                    {/* StudentDetails tittle  */}
                    <div className="flex justify-center items-center my-3">
                        <div>
                            <p className="flex justify-center items-center text-2xl font-bold uppercase">Student Details</p>
                            <img className='w-[350px] h-[50px] ' src={hr} alt="" />
                        </div>
                    </div>
                    {/* StudentDetails information  */}

                    <div className="flex justify-center items-center"><img className='w-[250px] h-[250px] rounded-xl bg-yellow-200' src={studentData?.image} alt="" /></div>
                    <div className="flex">
                        <div className=" text-lg grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10  md:gap-10 mt-10">
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Name:</span>{studentData?.name}</h1>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Father's Name:</span>{studentData?.fatherName}</h1>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Mother's Name:</span>{studentData?.motherName}</h1>
                                <h1><span className="font-bold text-xl">BirthDate:</span>{studentData?.birthDate}</h1>
                                <h1><span className="font-bold text-xl">Email:</span>{studentData?.email}</h1>
                                <h1><span className="font-bold text-xl">Adress:</span>{studentData?.address}</h1>
                            </div>
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Class:</span>{studentData?.class}</h1>
                                <h1><span className="font-bold text-xl">Class Roll:</span>{studentData?.rollNo}</h1>
                                <h1><span className="font-bold text-xl">Section :</span>{studentData?.section}</h1>
                                <h1><span className="font-bold text-xl">Registration:</span>{studentData?.registration}</h1>
                                <div className="flex gap-3 mt-5">
                                    <Link to="/enterPhone"><button className="font-semibold text-white btn bg-green-500 hover:bg-green-300 hover:text-gray-600">Payment</button></Link>
                                    <button
                                        onClick={logoutSubmit}
                                        className="font-semibold text-white btn bg-red-500  hover:bg-red-300 hover:text-gray-600">
                                        Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;