import SearchPanel from "../Dashboard/SearchPanel/SearchPanel";
import tableimg from '../../../../../public/images/Unknown.png';
import Drawer from "../Dashboard/SearchPanel/Drawer";

const PendingStudent = () => {

  return (
    <div className="flex justify-between ">
      <div>
        <Drawer />
      </div>
      {/* table div  */}
      <div className="">
        <div className="lg:-ms-20"><SearchPanel /></div>
        <div className="flex justify-center">
          <div className="mt-20 me-28">
            {/* AdminStudentInfo section  */}
            <h1 className="mt-8 text-3xl font-semibold uppercase text-black flex justify-center ">Pending Student</h1>
            <hr className="border border-black mb-8" />

            {/* table section  */}
            <div className="overflow-x-auto lg:ms-0 md:ms-0 sm: ms-[450px]">
              {/* search and add field  */}
              <div className="flex justify-between items-center">
                {/* search input  */}
                <div className="form-control ms-3 my-3">
                  <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                  </div>
                </div>
                {/* add button  */}
                <div>
                  <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Add</button>
                </div>
              </div>
              <table className="table table-lg table-pin-rows table-pin-cols border">
                {/* head */}
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Roll</th>
                    <th>Registration</th>
                    <th>Class</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row-1  */}
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tableimg} alt="" />
                      </div></td>
                    <td>Abu Jahel</td>
                    <td>10110</td>
                    <td>1965230</td>
                    <td>10</td>
                    <td className="flex gap-2">
                      <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Edit</button>
                      <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">Approve</button>
                      <button className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">Delete</button>
                    </td>
                  </tr>
                  {/* row-2  */}
                  <tr>
                    <td>2</td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tableimg} alt="" />
                      </div></td>
                    <td>Abu Jahel</td>
                    <td>10110</td>
                    <td>1965230</td>
                    <td>10</td>
                    <td className="flex gap-2">
                      <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Edit</button>
                      <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">Approve</button>
                      <button className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">Delete</button>
                    </td>
                  </tr>
                  {/* row-3  */}
                  <tr>
                    <td>3</td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tableimg} alt="" />
                      </div></td>
                    <td>Abu Jahel</td>
                    <td>10110</td>
                    <td>1965230</td>
                    <td>10</td>
                    <td className="flex gap-2">
                      <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Edit</button>
                      <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">Approve</button>
                      <button className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">Delete</button>
                    </td>
                  </tr>
                  {/* row-4  */}
                  <tr>
                    <td>4</td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tableimg} alt="" />
                      </div></td>
                    <td>Abu Jahel</td>
                    <td>10110</td>
                    <td>1965230</td>
                    <td>10</td>
                    <td className="flex gap-2">
                      <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Edit</button>
                      <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">Approve</button>
                      <button className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">Delete</button>
                    </td>
                  </tr>
                  {/* row-5  */}
                  <tr>
                    <td>5</td>
                    <td>
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={tableimg} alt="" />
                      </div></td>
                    <td>Abu Jahel</td>
                    <td>10110</td>
                    <td>1965230</td>
                    <td>10</td>
                    <td className="flex gap-2">
                      <button className="btn-xs bg-green-500 rounded-lg font-semibold uppercase hover:bg-green-800 hover:text-white">Edit</button>
                      <button className="btn-xs bg-blue-500 rounded-lg font-semibold uppercase hover:bg-blue-800 hover:text-white">Approve</button>
                      <button className="btn-xs bg-red-500 rounded-lg font-semibold uppercase hover:bg-red-800 hover:text-white">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* pagination here  */}
            <div className="flex justify-center">
              <div className="join my-10">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingStudent;