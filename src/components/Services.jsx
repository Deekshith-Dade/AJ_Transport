import { motion } from "framer-motion";
const services = [
    {
        title: "Driver Training",
        description: "Our rigorous driver training program equips our drivers with the skills, knowledge, and attitude to operate vehicles safely and efficiently.",
        image: "path/to/driver-training.jpg",
    },
    {
        title: "Journey Management",
        description: "Our journey management program minimizes risks and ensures that our drivers arrive at their destination safely and on time.",
        image: "path/to/journey-management.jpg",
    },
    {
        title: "Vehicle Safety",
        description: "Our vehicles are equipped with advanced safety technology to ensure safe and compliant transportation services.",
        image: "path/to/vehicle-safety.jpg",
    },
    {
        title: "HSE Managemenet",
        description: "lor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
];

const Service = () => {
    return (
        <div className="bg-gray-100 py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-5 max-w-xs">
                        <a href={service.title}>
                            <img src={service.image} alt={service.title} className="rounded-t-lg w-full h-40 object-cover" />
                            <h2 className="text-2xl font-semibold mt-5 mb-3">{service.title}</h2>
                            <p className="text-gray-700">{service.description}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }} className="bg-gray-100 flex flex-col items-center">
            <Service />
        </motion.div>
    )
}

export default Services;