import { motion } from 'framer-motion';

function Jumbotron() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'tween' }}
            viewport={{ once: true }}
        >
            <div className="bg-neutral-0 relative">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/truck.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-36 bg-opacity-70">
                    <div className="lg:text-center">
                        <h2 className="text-base text-neutral-100 font-semibold tracking-wide uppercase text-lg sm:text-3xl lg:text-5xl">
                            Transportation
                        </h2>
                        <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-neutral-100 sm:text-7xl lg:text-9xl">
                            We connect your business with the world
                        </p>
                        <p className="mt-4 max-w-5xl text-lg text-neutral-100 sm:text-xl lg:text-3xl lg:mx-auto">
                            Welcome to our logistic and transport services. We specialize in providing reliable and efficient solutions for all your transportation needs. Our team of experts is committed to delivering.
                        </p>
                    </div>
                </div>
            </div>
        </ motion.div>
    );
}

export default Jumbotron;