import { motion } from "framer-motion";

const FloatingCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className={`glass-panel rounded-2xl p-6 shadow-xl border border-white/10 hover:border-cyber-blue/30 transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default FloatingCard;
