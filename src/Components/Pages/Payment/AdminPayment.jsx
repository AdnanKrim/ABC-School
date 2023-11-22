import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Drawer from "../AdminPanel/Dashboard/SearchPanel/Drawer";
import SearchPanel from "../AdminPanel/Dashboard/SearchPanel/SearchPanel";


const AdminPayment = () => {
  const { studentId } = useParams();

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------
    axios
      .get(`https://backend.ap.loclx.io/api/admin-student-detail/${studentId}`, {
        headers: headers,
      })
      .then((res) => {
        setStudentData(res.data);
      })
      .catch((error) => {
        setStudentData(error);
      });
  }, [studentId]);
  console.log(studentData);

  return (
    <div className="flex justify-between">
      <div className="z-10">
        <Drawer />
      </div>
      {/* table div  */}
      <div className="lg:me-[120px]">
        <div className="lg:-ms-[290px] md:-ms-20 ">
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 me-28">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Student Details
            </h1>
            <hr className="border border-black mb-8" />
            {/* Payment information  */}
            <div className="flex justify-center items-center">
              <img
                className="w-[250px] h-[250px] rounded-xl bg-yellow-200"
                src={studentData?.file}
                alt=""
              />
            </div>
            <div className="flex">
              {studentData.user && (
                <div className=" text-lg grid sm: grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10  md:gap-10 mt-10">
                  <div className="leading-10">
                    <h1>
                      <span className="font-bold text-xl">Name:</span>
                      {studentData?.user.name}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Father's Name:</span>
                      {studentData?.user.fatherName}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Mother's Name:</span>
                      {studentData?.user.motherName}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">BirthDate:</span>
                      {studentData?.user.birthDate}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Email:</span>
                      {studentData?.user.email}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Adress:</span>
                      {studentData?.user.address}
                    </h1>
                  </div>
                  <div className="leading-10">
                    <h1>
                      <span className="font-bold text-xl">Class:</span>
                      {studentData?.user.class}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Class Roll:</span>
                      {studentData?.user.rollNo}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Section :</span>
                      {studentData?.user.section}
                    </h1>
                    <h1>
                      <span className="font-bold text-xl">Registration:</span>
                      {studentData?.user.registration}
                    </h1>

                  </div>
                </div>
              )}
            </div>
            {/* amont and months section  */}
              <div className="flex justify-content">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>month</th>
                        <th>amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentData.user && (
                        studentData.payment.map((payment, index) => (
                          <tr className="bg-base-200" key={index}>
                            <th></th>
                            <td>{payment.months.join(',')}</td>
                            <td>{payment.amount}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPayment;