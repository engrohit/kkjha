import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';

const Hero = () => {
    return (
        <Section id="hero" className="section-gradient">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-5xl md:text-7xl font-bold text-primary-enhanced mb-4">
                            Krishan Kant Jha
                        </h1>
                        <h3 className="text-3xl text-secondary-enhanced opacity-90 mb-6">
                            Screenwriter & <span style={{ color: 'var(--accent-primary)' }}>Storyteller</span>
                        </h3>
                        <p className="text-secondary-enhanced max-w-lg text-lg leading-relaxed opacity-80">
                            Crafting emotionally engaging microdramas and cinematic narratives.
                            Specializing in crisp dialogue, visual storytelling, and vertical video pacing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4"
                    >
                        <button className="px-8 py-3 rounded-lg btn-outline">
                            Check My Work
                        </button>
                        <button className="px-8 py-3 rounded-lg btn-primary">
                            Hire Me
                        </button>
                    </motion.div>
                </div>

                <div className="flex justify-center">
                    <Tilt
                        tiltMaxAngleX={15}
                        tiltMaxAngleY={15}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={2500}
                        className="w-full max-w-md"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="card-elevated p-8 rounded-2xl relative transition-all duration-300"
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
                            <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 mb-6 overflow-hidden border-2 border-[var(--accent-primary)] shadow-[0_0_20px_var(--accent-glow)] relative group">
                                {/* Subtle overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 dark:from-black/40 dark:via-transparent dark:to-white/5" />
                                <img src="./logo.png" alt="KKJ Profile" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 logo-theme-effect" />
                            </div>
                            <div className="space-y-2">
                                <div
                                    className="h-2 w-24 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, var(--accent-primary), var(--accent-glow))`,
                                        opacity: 0.6
                                    }}
                                />
                                <div
                                    className="h-2 w-16 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, var(--accent-primary), var(--accent-glow))`,
                                        opacity: 0.4
                                    }}
                                />
                            </div>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
