// Contact.jsx
import { motion } from 'framer-motion';

function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="bg-white py-16"
        // className="bg-gray-100 flex flex-col items-center"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Have Questions?
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Emergency? Call Us:</h3>
                        <p className="mt-2 text-base text-gray-500">+1234567890</p>

                        <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">Send Us Mail</h3>
                        <p className="mt-2 text-base text-gray-500">info@example.com</p>
                        <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">Find the Studio</h3>
                        <div className="mt-2">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.951299203718!2d-111.87475979999999!3d40.7625603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f56fa835d6f7%3A0xfbcd548d11e7fecc!2sSprouts%20Farmers%20Market!5e0!3m2!1sen!2sus!4v1718258161511!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg shadow-xl"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <form action="#" method="POST" className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>Get in touch</h2>
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" id="name" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" name="email" id="email" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" name="subject" id="subject" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                                    <textarea name="message" id="message" rows="4" className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;