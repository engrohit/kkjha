import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';

const Contact = () => {
    return (
        <Section id="contact" className="section-primary pb-32">
            <div className="w-full max-w-2xl text-center">
                <h2 className="text-4xl font-bold text-primary-enhanced mb-8">Initiate Uplink</h2>

                <motion.form
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="card-elevated p-8 rounded-2xl text-left space-y-6 transition-all duration-300"
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
                            className="input-field w-full rounded p-3"
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
                            className="input-field w-full rounded p-3"
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
                            className="input-field w-full rounded p-3"
                            placeholder="Transmission content..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full py-4 rounded-lg font-bold tracking-wider uppercase"
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

