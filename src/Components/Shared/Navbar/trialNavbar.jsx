

const TrialNavbar = () => {
    return (
        <nav className="bg-blue-500 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-2xl font-semibold">My Website</a>
    
                {/* Desktop Dropdown Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">Home</a>
                    <div className="relative group">
                        <a href="#" className="text-white group-hover:text-gray-300">Services</a>
                        <ul className="absolute hidden space-y-2 bg-blue-500 text-white mt-2 left-0 w-36 group-hover:block">
                            <li><a href="#" className="block p-2 hover:bg-blue-600">Service 1</a></li>
                            <li><a href="#" className="block p-2 hover-bg-blue-600">Service 2</a></li>
                            <li><a href="#" className="block p-2 hover:bg-blue-600">Service 3</a></li>
                        </ul>
                    </div>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </div>
    
                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button id="menuButton" className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default TrialNavbar;
