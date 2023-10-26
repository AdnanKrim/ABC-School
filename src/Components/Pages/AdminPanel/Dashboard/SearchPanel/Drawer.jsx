import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSpeedometer } from "react-icons/io";
import brandlogo from '../../../../../../public/icons/Main Logo White-01.png'
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

const Drawer = () => {
    return (
        <div>
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content ">
            {/* Page content here */}
            <button className="border border-blue-500 hover:bg-blue-500 hover:text-black w[20px] h-[20px] px-3 py-5 rounded-xl flex items-center">
              <label htmlFor="my-drawer">
                <BiMenuAltLeft size={25} />
              </label>
            </button>
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay "></label>
            <ul className="menu p-4 w-80 min-h-full bg-blue-600 text-white border-r-2 border-yellow-500">
              {/* Sidebar content here */}
              <img className="w-[150px]" src={brandlogo} alt="" />
              <hr className="border border-blue-100 opacity-40 mt-5" />
              <h1 style={{ fontFamily: 'Mooli, sans-serif' }} className="font-bold text-2xl text-white my-5">Navigation </h1>

{/* Dashboard section  */}
              <Link to="/defaultPanel">
                <li className="font-semibold text-lg mb-3">
                  <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-red-500"><IoIosSpeedometer className="text-red-500" size={20} /> Dashboard</span>
                </li>
              </Link>

{/* Student Information  */}
                <details className="dropdown mb-3">
                  <summary
                   className=" rounded-r-full bg-[#191c24] p-2 border-l-4 border-blue-500 w-full btn text-white hover:btn-ghost ">
                    <IoIosSpeedometer className="text-blue-500 -ms-12" size={20} />Student Information <MdArrowDropDown size={20}/></summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-400 border rounded-box w-52 ">
                    <li><a href="/pendingStudent">Pending Students</a></li>
                    <hr />
                    <li><a href="/allStudent">All Students</a></li>
                  </ul>
                </details>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-green-500"><IoIosSpeedometer className="text-green-500" size={20} /> Option-3</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-yellow-500"><IoIosSpeedometer className="text-yellow-500" size={20} /> Option-4</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-orange-500"><IoIosSpeedometer className="text-orange-500" size={20} /> Option-5</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-gray-500"><IoIosSpeedometer className="text-gray-500" size={20} /> Option-6</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-teal-500"><IoIosSpeedometer className="text-teal-500" size={20} /> Option-7</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-pink-500"><IoIosSpeedometer className="text-pink-500" size={20} /> Option-8</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-indigo-500"><IoIosSpeedometer className="text-indigo-500" size={20} /> Option-9</span>
              </li>

              <li className="font-semibold text-lg mb-3">
                <span className="rounded-r-full bg-[#191c24] p-2 border-l-4 border-violet-500"><IoIosSpeedometer className="text-violet-500" size={20} /> Option-10</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
};

export default Drawer;