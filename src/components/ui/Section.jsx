import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
    return (
        <section
            id={id}
            className={`min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden p-6 ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="w-full max-w-7xl relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
