import React from 'react'

function navbar() {
    return (
        <div>
            {/* <!-- Navigation bar --> */}
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div>
                                {/* <!-- Website Logo --> */}
                                <a href="#" className="flex items-center py-4 px-2">
                                    <img src="src/assets/ajtransport.jpeg" alt="Logo" className="h-20 w-40 mr-2" />
                                </a>
                            </div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1">
                                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
                                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Safety</a>
                                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Solutions</a>
                                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Network</a>
                                <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Resources</a>
                            </div>
                        </div>
                        {/* <!-- Secondary Navbar items --> */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Get a Quote</a>
                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center">
                            <button className="outline-none mobile-menu-button">
                                <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                                    // x-show="!showMenu"
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
                {/* <!-- mobile menu --> */}
                <div className="hidden mobile-menu">
                    <ul className="">
                        <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">About</a></li>
                        <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Safety</a></li>
                        <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Solutions</a></li>
                        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Network</a></li>
                        <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Resources</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default navbar