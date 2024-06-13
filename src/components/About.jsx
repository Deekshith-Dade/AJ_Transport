const About = () => {
    return (
        <div className=" relative   py-10 bg-opacity-70">
            <div className="px-8 lg:px-24 mt-8 space-y-6 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <div className=" items-center p-6">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Mission Statement
                    </p>
                    <p className="mt-4 max-w-5xl text-lg text-neutral-1000 sm:text-lg lg:text-xl">
                        At AJ TRANSPORT, our mission is to provide safe, reliable, and sustainable transport services to our clients across Africa. We are committed to achieving this by investing in our people, our vehicles, and our processes. We believe that by focusing on safety, compliance, and sustainability, we can make a positive difference in our industry and the communities we serve.
                    </p>
                </div>
                <div className="">
                    <img className="rounded-lg shadow-lg" src="/truck.jpeg" alt="Trucks" />
                </div>
            </div>

            <div className="bg-indigo-100 mt-20 px-8 lg:px-24 py-12">
                <h3 className="text-2xl leading-6 font-extrabold text-gray-900">
                    Our Team
                </h3>
                <p className="mt-4 max-w-2xl text-lg text-gray-500">
                    Meet Our Experienced Team: The Driving Force Behind AJ TRANSPORT’s Success.
                </p>

                <div className="mt-8 space-y-6 grid grid-cols-1 gap-8  ">

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="">
                            <img className="rounded-xl" src="truck.jpeg" alt="John Doe" />
                        </div>
                        <div className="ml-4 my-auto">
                            <div className="text-lg leading-6 font-medium text-gray-900">John Doe</div>
                            <div className="text-base leading-6 font-medium text-indigo-600">Chief Executive Officer</div>
                            <div className="text-base leading-6 text-gray-500">
                                John is an experienced executive with more than two decades of experience in the transport industry. He is passionate about road safety and is committed to delivering exceptional service to AJ TRANSPORT’s clients.
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="">
                            <img className="rounded-xl" src="truck.jpeg" alt="Sarah Lee" />
                        </div>
                        <div className="ml-4 my-auto">
                            <div className="text-lg leading-6 font-medium text-gray-900">Sarah Lee</div>
                            <div className="text-base leading-6 font-medium text-indigo-600">Head of Driver Training</div>
                            <div className="text-base leading-6 text-gray-500">
                                Sarah is a seasoned driver trainer with extensive experience in developing and implementing training programs. She is passionate about driver safety and is committed to ensuring that all AJ TRANSPORT’s drivers are well-trained and competent.
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-8 lg:px-24 py-12">
                <h3 className="text-2xl leading-6 font-extrabold text-gray-900">
                    Client Testimonials
                </h3>
                <div className="mt-8 grid grid-cols-1 gap-8  lg:grid-cols-3">
                    <div className="space-y-4">
                        <p className="text-lg leading-6 font-medium text-gray-900">Sarah Thompson</p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="truck.jpeg" alt="Sarah Thompson" />
                            </div>
                            <div className="ml-4">
                                <div className="text-lg leading-6 font-medium text-gray-900">
                                    Journey management is crucial in our line of business, and AJ Transport's services have been instrumental in keeping our cargo safe and secure. Their efficient journey planning and communication systems ensure that everything runs smoothly.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat for other testimonials */}
                    <div className="space-y-4">
                        <p className="text-lg leading-6 font-medium text-gray-900">Sarah Thompson</p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="truck.jpeg" alt="Sarah Thompson" />
                            </div>
                            <div className="ml-4">
                                <div className="text-lg leading-6 font-medium text-gray-900">
                                    Journey management is crucial in our line of business, and AJ Transport's services have been instrumental in keeping our cargo safe and secure. Their efficient journey planning and communication systems ensure that everything runs smoothly.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-lg leading-6 font-medium text-gray-900">Sarah Thompson</p>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-12 w-12 rounded-full" src="truck.jpeg" alt="Sarah Thompson" />
                            </div>
                            <div className="ml-4">
                                <div className="text-lg leading-6 font-medium text-gray-900">
                                    Journey management is crucial in our line of business, and AJ Transport's services have been instrumental in keeping our cargo safe and secure. Their efficient journey planning and communication systems ensure that everything runs smoothly.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-1/2 mx-auto py-10">
                <h3 className="text-2xl leading-6 font-extrabold text-gray-900">
                    Subscribe to Newsletter
                </h3>
                <div className="mt-8">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                        type="button"
                        className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div >
    );
};

export default About;
