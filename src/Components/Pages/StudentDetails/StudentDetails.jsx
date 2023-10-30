import unknownPhoto from "../../../../public/images/bean.png"
import hr from "../../../../public/icons/hrLine.png"
import axios from "axios";
import { useState } from "react";

const StudentDetails = () => {
const [studentData, setStudentData ]=useState([])

    const user = JSON.parse(localStorage.getItem('user'));
    const headers = {
         accept: 'application/json',
         Authorization: 'bearer ' + user.token
     }
 
    //set token in axios header
    axios.get(``, {
        headers: headers
    })
    .then((res) => res.json())
     .then((data) => setStudentData(data)) 

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="bg-green-100 px-5 mt-2 rounded-xl">
{/* StudentDetails tittle  */}
                    <div className="flex justify-center items-center my-3">
                        <div>
                            <p className="flex justify-center items-center text-2xl font-bold uppercase">Student Details :{studentData.length}</p>
                            <img className='w-[350px] h-[50px] ' src={hr} alt="" />
                        </div>
                    </div>
{/* StudentDetails information  */}

                    <div className="flex justify-center items-center"><img className='w-[250px] h-[250px] rounded-xl bg-yellow-200' src={unknownPhoto} alt="" /></div>
                    <div className="flex">
                        <div className=" text-lg grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10  md:gap-10 mt-10">
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Name:</span> Rowan Atkinson</h1>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Father's Name:</span> David Atkinson</h1>
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <h1><span className="font-bold text-xl">Mother's Name:</span> Shaila Atkinson</h1>
                                <h1><span className="font-bold text-xl">BirthDate:</span> 19 FEbruary, 1999</h1>
                                <h1><span className="font-bold text-xl">Email:</span> Rowan89@gmail.com</h1>
                                <h1><span className="font-bold text-xl">Adress:</span> 79 westgate, melbourne</h1>
                            </div>
                            <div className="leading-10">
                                <h1><span className="font-bold text-xl">Class:</span> Ten</h1>
                                <h1><span className="font-bold text-xl">Class Roll:</span> 02</h1>
                                <h1><span className="font-bold text-xl">Section :</span> B</h1>
                                <h1><span className="font-bold text-xl">Registration:</span> 1931999</h1>
                                <div className="flex gap-3 mt-5">
                                    <button className="font-semibold text-white btn bg-green-500 hover:bg-green-300 hover:text-gray-600">Payment</button>
                                    <button className="font-semibold text-white btn bg-red-500  hover:bg-red-300 hover:text-gray-600">Logout</button>
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