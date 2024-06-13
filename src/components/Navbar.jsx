import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            {/* <!-- Navigation bar --> */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* <!-- Website Logo --> */}
                                <Link to="/" className="flex items-center py-4 px-2">
                                    <img src="src/assets/ajtransport.jpeg" alt="Logo" className="h-20 w-40 mr-2" />
                                </Link>
                            </div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1">
                                <Link to="/about" className="py-4 px-2 text-neutral-1000 font-semibold hover:text-green-500 transition duration-300">About</Link>
                                {/* <a href="#" className="py-4 px-2 text-neutral-1000 font-semibold hover:text-green-500 transition duration-300">Safety</a>
                                <a href="#" className="py-4 px-2 text-neutral-1000 font-semibold hover:text-green-500 transition duration-300">Solutions</a>
                                <a href="#" className="py-4 px-2 text-neutral-1000 font-semibold hover:text-green-500 transition duration-300">Network</a> */}
                                <Link to="/contact" className="py-4 px-2 text-neutral-1000 font-semibold hover:text-green-500 transition duration-300">Contact Us</Link>
                            </div>
                        </div>
                        {/* <!-- Secondary Navbar items --> */}
                        <div className="hidden md:flex items-center space-x-3">
                            <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Get a Quote</a>
                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center">
                            <button onClick={handleMobileMenuToggle} className="outline-none mobile-menu-button">
                                <svg
                                    className="w-6 h-6 text-gray-500 hover:text-green-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu --> */}
                <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-screen transition-max-height duration-500 ease-in' : 'max-h-0 overflow-hidden transition-max-height duration-500 ease-out'} mobile-menu`}>
                    <ul className="bg-white">
                        <li className="active">
                            <a href="/about" className="block text-sm px-2 py-4  bg-neutral-1000 hover:text-neutral-0 hover:bg-green-500">About</a>
                        </li>

                        <li>
                            <a href="/contact" className="block text-sm px-2 py-4 bg-neutral-1000 hover:text-neutral-0 hover:bg-green-500 transition duration-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;