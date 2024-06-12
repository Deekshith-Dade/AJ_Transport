import { motion } from 'framer-motion';


function Qualities() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        //   className="my-20 p-6 bg-white shadow-lg rounded-lg"
        >
            <div className="py-12 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Top-rated safest transport service so far</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Transportation safety is a critical issue that affects everyone.
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            People rely on different modes of transport to travel and move goods from one place to another.
                        </p>
                    </div>

                    <div className="mt-10">
                        <ul className="md:grid md:grid-cols-2 gap-8">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {/* Replace 'icon-safety.svg' with the actual path to your icon */}
                                        <img className="h-6 w-6 text-blue-500" src="icon-safety.svg" alt="Safety Icon" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Safest Supply</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            At our company, we take the safety of our customers seriously. Thats why we offer the safest supply of products on the market.
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {/* Replace 'icon-trust.svg' with the actual path to your icon */}
                                        <img className="h-6 w-6 text-blue-500" src="icon-trust.svg" alt="Trust Icon" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">100% Trusted</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            At our company, we take pride in being 100% trusted. This means that every step of the way, our customers can rely on us to provide the highest level of honesty, integrity, and reliability.
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {/* Replace 'icon-deal.svg' with the actual path to your icon */}
                                        <img className="h-6 w-6 text-blue-500" src="icon-deal.svg" alt="Deal Icon" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Cheapest Dealing</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Looking for the best possible price when dealing with stocks? Look no further than our Cheapest Dealing option.
                                        </p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {/* Replace 'icon-fast.svg' with the actual path to your icon */}
                                        <img className="h-6 w-6 text-blue-500" src="icon-fast.svg" alt="Fast Icon" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Fastest Transport</h3>
                                        <p className="mt-2 text-base text-gray-500">
                                            Introducing the fastest truck transport service that guarantees lightning-fast delivery of your goods!
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Qualities