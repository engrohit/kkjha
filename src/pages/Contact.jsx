
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <h1 className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    {/* Add contact info here */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-white/10"
                >
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                            <input type="text" className="w-full bg-white dark:bg-deep-navy/50 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" className="w-full bg-white dark:bg-deep-navy/50 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea rows="4" className="w-full bg-white dark:bg-deep-navy/50 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
