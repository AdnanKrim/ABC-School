import { useParams } from "react-router-dom";
import Drawer from "../Dashboard/SearchPanel/Drawer";
import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const { studentId } = useParams();

  const [paymentHistoryData, setPaymentHistoryData] = useState({
    student: {},
    payment: [],
  } );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const headers = {
      accept: "application/json",
      Authorization: "Bearer " + user.token,
    };

    // get method -------------------
    axios
      .get(`https://backend.ap.loclx.io/api/payment-history/${studentId}`, {
        headers: headers,
      })
      .then((res) => {
        setPaymentHistoryData(res.data);
      })
      .catch((error) => {
        setPaymentHistoryData(error);
      });
  }, [studentId]);
  console.log(paymentHistoryData);
  

  return (
    <div className="flex justify-between">
      <div className="w-full">
        <Drawer />
      </div>
      {/* table div  */}
      <div className=" w-full lg:-ms-[640px] md:-ms-[820px] sm: -ms-[400px]">
        <div>
          <SearchPanel />
        </div>
        <div className="flex justify-center">
          <div className="mt-20 mx-2  w-full">
            {/* AdminpaymentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">
              Payment History
            </h1>
            <hr className="border border-black mb-8" />
            {/* details section  */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <div>
                <h1 className="leading-10 font-bold text-2xl">
                  Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.name}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Father Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.fatherName}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Mother Name:
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.motherName}</span>
                </h1>
              </div>
              <div>
                <h1 className="leading-10 font-bold text-2xl">
                  Registration :
                  <span className="text-purple-700 text-xl">{paymentHistoryData.student.regNo}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Class: <span className="text-purple-700 text-xl">{paymentHistoryData.student.class}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Section: <span className="text-purple-700 text-xl">{paymentHistoryData.student.section}</span>
                </h1>
                <h1 className="leading-10 font-bold text-2xl">
                  Roll :<span className="text-purple-700 text-xl">{paymentHistoryData.student.rollNo}</span>
                </h1>
              </div>
            </div>

            {/* payment Due section  */}
            <div className="overflow-x-auto mt-10 mb-20">
              <table className="table ">
                {/* head */}
                <thead>
                  <tr>
                    <th>Payment Status</th>
                    <th>Monthly to Pay</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <td className="text-red-500">Payment Due</td>
                    <td className="text-red-500">{paymentHistoryData.student.unpaid?.join(', ')}</td>

                    {/* <td>january</td> */}
                    <td>
                      <div className="flex flex-col gap-2">
                        <button className="btn-xs w-[120px] bg-blue-300 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">
                          Send Message
                        </button>
                        <button className="btn-xs w-[120px] bg-yellow-600 text-gray-800 hover:border-black rounded-lg font-semibold uppercase hover:bg-yellow-500 hover:text-black">
                          Send Email
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* table section  */}
            <div className="overflow-x-auto">
              <table className="table mt-10">
                {/* head */}
                <thead>
                  <tr>
                    <th>index</th>
                    <th>Amount</th>
                    <th>Month</th>
                    <th>Transaction id</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {paymentHistoryData.payment.map((payment, index) => (
        <tr className="bg-base-200" key={index}>
          <th>{index + 1}</th>
          <td>{payment.amount}</td>
          <td>{payment.months.join(', ')}</td>
          <td>{payment.transactionId}</td>
          <td>
            <div className="gap-2">
              <button className="btn-xs bg-purple-500 text-gray-300 rounded-lg font-semibold uppercase hover:bg-purple-800 hover:text-white">
                Invoice
              </button>
              <button className="btn-xs bg-yellow-600 text-gray-800 rounded-lg font-semibold uppercase hover:border-black hover:bg-yellow-500 hover:text-black ms-1">
                Send Email
              </button>
            </div>
          </td>
        </tr>
      ))}
                </tbody>
              </table>
            </div>

            <div className="my-10 flex justify-center gap-5">
              <button className="btn bg-red-300 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">
                ExcelShit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;