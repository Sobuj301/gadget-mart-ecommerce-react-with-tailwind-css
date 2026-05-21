import { motion } from "framer-motion";

const ScrollReveal = ({ children }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 70,
                filter: "blur(8px)",
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.15 }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;