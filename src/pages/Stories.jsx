
import { motion } from 'framer-motion';

const Stories = () => {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-6"
            >
                Stories
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Placeholders for stories */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-slate-200 dark:border-white/10">
                        <div className="h-40 bg-slate-200 dark:bg-white/10 rounded-lg mb-4"></div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Story Title {item}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">A brief excerpt from the story goes here...</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Stories;
