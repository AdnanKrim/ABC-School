import { Link } from 'react-router-dom';
import navimg1 from '../../../../public/images/educational_board.png'
import navimg2 from '../../../../public/images/bangladesh_government.png'
import { useState } from 'react';
import { Button } from '@material-tailwind/react';


const Navbar = () => {

    const [activeDropdown, setActiveDropdown] = useState(null)

    // navlist section ------------------------------------
    const navlist =
        <>
            <li><a>
                <Link to="/">Home</Link>
            </a></li>
            <li tabIndex={0}>
                <details
                    open={activeDropdown === 'academic'}
                    onClick={() => setActiveDropdown('academic')}>
                    <summary>Academic</summary>
                    <ul className="p-2 bg-gray-300">
                        <li className='mx-16'><a></a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/ourcampus">Our Campus</Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Academic Rules</Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Academic Calender</Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Routine</Link>
                        </a></li>
                    </ul>
                </details>
            </li>
            <li tabIndex={0}>
            <details 
            open={activeDropdown === 'admission'} 
            onClick={() => setActiveDropdown('admission')}>
                    <summary>Admission</summary>
                    <ul className="p-2 bg-gray-300">
                        <li className='mx-16'><a></a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Apply Online</Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Apply Method</Link>
                        </a></li>
                    </ul>
                </details>
            </li>
            <li tabIndex={0}>
            <details 
            open={activeDropdown === 'about'} 
            onClick={() => setActiveDropdown('about')}>
                    <summary>About</summary>
                    <ul className="p-2 bg-gray-300">
                        <li className='mx-16'><a></a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/">Our History</Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-1'><a>
                            <Link to="/teachers">
                                Teachers
                            </Link>
                        </a></li>
                        <li className='bg-yellow-200 rounded-xl mb-3'><a>
                            <Link to="/employees">Employees</Link>
                        </a></li>
                    </ul>
                </details>
            </li>
            <li><a>
                <Link to="/">Notice</Link>
            </a></li>
            <li><a>
                <Link to="/">Payment</Link>
            </a></li>
        </>
    // navlist section ------------------------------------

    return (
        <div>
            {/* navigation banner section  */}
            <div className='flex justify-between items-center py-5 px-3'>
                <img className='lg:w-[100px] lg:h-[100px] sm: w-[60px] sm: h-[60px]' src={navimg1} alt="" />
                <h1 className='text-center leading-10'>
                    <span style={{ fontFamily: 'Tiro Bangla, serif' }}
                        className='font-semibold text-4xl '>এ.বি.সি স্কুল এন্ড কলেজ</span> <br />
                    <span style={{ fontFamily: 'Young Serif, serif' }}
                        className='text-lg'>A.B.C School and College</span>
                </h1>
                <img className='lg:w-[100px] lg:h-[100px] sm: w-[60px] sm: h-[60px]' src={navimg2} alt="" />
            </div>

            {/* navbar section  */}
            <div>
                <div className="navbar bg-yellow-200 relative z-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-200 rounded-box w-52">
                                {navlist}
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlist}
                        </ul>
                    </div>
{/* login and signin options  */}
<div className="navbar-end">
<div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            <a href="/login">Log In</a>
          </Button>
          <Button variant="gradient" size="sm">
            <a href="/signup">Sign Up</a>
          </Button>
</div>
<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
          <a href="/login">Log In</a>
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
          <a href="/signup">Sign Up</a>
          </Button>
</div>
</div>
                </div>
            </div>
            {/* banner section  */}

        </div>
    );
};

export default Navbar;