
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-6"
            >
                About Me
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-white/10"
            >
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Hello! I'm Krishan Kant Jha, a multifaceted professional blending creativity, journalism, engineering, and business acumen.
                    (Content placeholder - to be updated)
                </p>
            </motion.div>
        </div>
    );
};

export default About;
