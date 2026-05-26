import { motion } from "framer-motion";

const Hero = () => {

    return (
        <div className="py-12 lg:py-0 max-w-2xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* TEXT */}
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:w-5/6 space-y-6 text-center lg:text-left items-center lg:items-start pb-8 lg:pb-0"
            >

                {/* HEADING */}
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
                    Upgrade Your Lifestyle with Premium Gadgets.
                </h1>

                {/* PARAGRAPH */}
                <p className="text-lg">
                    Explore the ultimate collection of next gen smart devices, audio gear, and premium accessories.
                </p>

                {/* BUTTON */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-3xl px-8 py-3 transition-colors duration-300 mx-auto lg:mx-0 bg-[#22C55E] dark:bg-[#34D399] text-white dark:text-black hover:bg-[#16A34A] dark:hover:bg-[#10B981]"
                >
                    Shop Now
                </motion.button>

            </motion.div>

            {/* IMAGE */}
            <motion.img
                initial={{ opacity: 0, x: 80, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl shadow-xl"
                src="https://plus.unsplash.com/premium_photo-1721080251127-76315300cc5c?q=80&w=870&auto=format&fit=crop"
                alt="gadget"
            />

        </div>
    );
};

export default Hero;