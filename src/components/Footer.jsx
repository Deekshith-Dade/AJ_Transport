import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Social Media Section */}
                        <div>
                            <h5 className="text-lg font-semibold">SOCIAL MEDIA</h5>
                            <div className="flex mt-3">
                                {/* Replace these spans with actual icons */}
                                <span className="mr-2">[Facebook icon]</span>
                                <span className="mr-2">[Google icon]</span>
                                <span>[Email icon]</span>
                            </div>
                        </div>

                        {/* Get a Quote Section */}
                        <div>
                            <h5 className="text-lg font-semibold">GET A QUOTE</h5>
                            <p className="mt-3">Our operators are standing by to assist you. Call us for a quote at (801) 413-7956 or send us a note today.</p>
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Contact Us
                            </button>
                        </div>

                        {/* Address Section */}
                        <div>
                            <h5 className="text-lg font-semibold">OUR ADDRESS</h5>
                            <p className="mt-3">Arches Medical Transportation</p>
                            <p>451 E Bishop Federal Ln.</p>
                            <p>Salt Lake City, UT 84115</p>
                            <p className="mt-3">(801) 413-7956</p>
                            <p>info@ArchesMTC.com</p>
                        </div>

                    </div>

                    {/* Office Hours Section */}
                    <div className="mt-8 border-t border-gray-700 pt-4">
                        <h5 className="text-lg font-semibold">OFFICE HOURS</h5>
                        <p className="mt-1">6am – 8pm / Monday – Saturday</p>
                        <p className="mt-1">(Transportation Services Available 24/7)</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer