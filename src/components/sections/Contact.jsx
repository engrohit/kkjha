import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';

const Contact = () => {
    return (
        <Section id="contact" className="bg-slate-50 dark:bg-slate-900 pb-32">
            <div className="w-full max-w-2xl text-center">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Initiate Uplink</h2>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-8 rounded-2xl text-left space-y-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 shadow-lg"
                    style={{
                        boxShadow: '0 0 30px var(--accent-glow)'
                    }}
                >
                    <div>
                        <label
                            className="block text-sm font-bold mb-2 transition-colors"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            IDENTITY
                        </label>
                        <input
                            type="text"
                            className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-900 dark:text-white focus:outline-none transition-all"
                            style={{
                                borderColor: 'var(--border-color)'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-glow)';
                                e.target.style.boxShadow = '0 0 10px var(--accent-glow)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--border-color)';
                                e.target.style.boxShadow = 'none';
                            }}
                            placeholder="Name or Callsign"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-bold mb-2 transition-colors"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            FREQUENCY (EMAIL)
                        </label>
                        <input
                            type="email"
                            className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-900 dark:text-white focus:outline-none transition-all"
                            style={{
                                borderColor: 'var(--border-color)'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-glow)';
                                e.target.style.boxShadow = '0 0 10px var(--accent-glow)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--border-color)';
                                e.target.style.boxShadow = 'none';
                            }}
                            placeholder="artistkkjha@gmail.com"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-bold mb-2 transition-colors"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            MESSAGE
                        </label>
                        <textarea
                            rows="4"
                            className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700 rounded p-3 text-slate-900 dark:text-white focus:outline-none transition-all"
                            style={{
                                borderColor: 'var(--border-color)'
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = 'var(--accent-glow)';
                                e.target.style.boxShadow = '0 0 10px var(--accent-glow)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'var(--border-color)';
                                e.target.style.boxShadow = 'none';
                            }}
                            placeholder="Transmission content..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-lg text-white font-bold tracking-wider transition-all uppercase"
                        style={{
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-glow))',
                            boxShadow: '0 0 20px var(--accent-glow)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 0 30px var(--accent-glow)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 0 20px var(--accent-glow)';
                        }}
                    >
                        Send Transmission
                    </button>
                </motion.form>

                <div className="mt-12 flex justify-center gap-4">
                    <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full border"
                        style={{
                            backgroundColor: 'var(--glass-bg)',
                            borderColor: 'var(--accent-primary)'
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: 'var(--accent-glow)' }}
                        />
                        <span
                            className="text-xs font-mono"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            SYSTEM ONLINE
                        </span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;

