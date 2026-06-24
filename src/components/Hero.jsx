import { motion } from "framer-motion";
import hero from "../assets/hero.jpg"
const Hero = () => {
    return (
        <section className="relative py-12 lg:py-24 px-6 max-w-7xl mx-auto min-h-[80vh] flex flex-col lg:flex-row items-center gap-12">
            
            {/* TEXT SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start flex-1"
            >
                {/* BADGE */}
                <span className="px-4 py-1 text-sm font-semibold text-[#22C55E] bg-[#22C55E]/10 rounded-full">
                    New Arrival 2026
                </span>

                {/* HEADING */}
                <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white">
                    Upgrade Your Lifestyle with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-teal-400">Premium Gadgets.</span>
                </h1>

                {/* PARAGRAPH */}
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                    Discover the ultimate collection of next-gen smart devices, audio gear, and premium accessories tailored for your modern life.
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-[#22C55E] text-white rounded-xl font-bold shadow-lg shadow-[#22C55E]/20 hover:bg-[#16A34A] transition-all"
                    >
                        Shop Now
                    </motion.button>
                    <button className="px-8 py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                        View Demo
                    </button>
                </div>
            </motion.div>

            {/* IMAGE SECTION */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex-1 w-full"
            >
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#22C55E] to-blue-500 rounded-[2rem] blur-2xl opacity-20 dark:opacity-30"></div>
                
                <img
                    className="relative w-full h-auto rounded-[2rem] shadow-2xl object-cover"
                    src={hero}
                    alt="Premium Gadgets"
                />
            </motion.div>

        </section>
    );
};

export default Hero;