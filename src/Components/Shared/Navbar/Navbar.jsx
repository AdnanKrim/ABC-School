import navimg1 from '../../../../public/images/bangladesh_government.png'
import navimg2 from '../../../../public/images/educational_board.png'


const Navbar = () => {
// navlist section ------------------------------------
const navlist =
<>
 <li><a>Home</a></li>
 <li><a>Notice</a></li>
<li tabIndex={1}>
<details>
<summary>Academic</summary>
<ul className="p-2">
     <li><a>Submenu 1</a></li>
     <li><a>Submenu 2</a></li>
</ul>
</details>
</li>
<li tabIndex={1}>
<details>
<summary>Admission</summary>
<ul className="p-2">
     <li><a>Submenu 1</a></li>
     <li><a>Submenu 2</a></li>
</ul>
</details>
</li>
<li><a>Payment</a></li>
<li><a>Result</a></li>
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
                <div className="navbar bg-yellow-200">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navlist}
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlist}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {/* <a className="btn">Button</a> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;