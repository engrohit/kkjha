import { motion } from 'framer-motion';
import Section from '../ui/Section.jsx';
import { FaMicrophoneAlt, FaBookOpen, FaReact } from 'react-icons/fa';

const experience = [
    { title: "Kuku FM (Script Writer)", year: "2025-Present", location: "Microdrama & Short-form" },
    { title: "Pocket FM (Creative Writer)", year: "2024", location: "Audio Series Consultant" },
    { title: "Audible (Story Writer)", year: "2020-2021", location: "Remote · Freelance" },
    { title: "Dainik Bhaskar (Subeditor)", year: "2023", location: "Editorial Team" },
];

const works = [
    {
        title: "Do Duni Pyaar (Audible)",
        readTime: "Podcast",
        link: "https://www.audible.in/webplayer?asin=B09TS1ZFQ5"
    },
    {
        title: "Postcard (Audible)",
        readTime: "Pb 1",
        link: "https://www.audible.in/webplayer?asin=B08DX9XT8M"
    },
    {
        title: "Postcard (Audible)",
        readTime: "Pb 2",
        link: "https://www.audible.in/webplayer?asin=B08DX9DN82"
    },
    {
        title: "Hindi Novel (Self-Author)",
        readTime: "Novel",
        link: "#"
    },
];

const Resources = () => {
    return (
        <Section id="content" className="bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">

                {/* Work History */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <FaMicrophoneAlt
                            className="text-2xl transition-colors"
                            style={{ color: 'var(--accent-glow)' }}
                        />
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Work History</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {experience.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between p-4 border-l-2 border-slate-300 dark:border-slate-700 hover:border-[var(--accent-primary)] bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer rounded-r-lg"
                            >
                                <div>
                                    <h3 className="text-lg text-slate-900 dark:text-white font-medium">{job.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">{job.location}</p>
                                </div>
                                <span
                                    className="text-xs font-mono px-2 py-1 rounded"
                                    style={{
                                        color: 'var(--accent-primary)',
                                        backgroundColor: 'var(--glass-bg)'
                                    }}
                                >
                                    {job.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Notable Works */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <FaBookOpen
                            className="text-2xl transition-colors"
                            style={{ color: 'var(--accent-glow)' }}
                        />
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Notable Works</h2>
                    </div>

                    <div className="space-y-4">
                        {works.map((work, idx) => (
                            <motion.a
                                key={idx}
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center justify-between group cursor-pointer"
                            >
                                <div className="flex-1 border-b border-slate-300 dark:border-slate-700 pb-2 group-hover:border-[var(--accent-primary)] transition-colors">
                                    <h4 className="text-lg text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {work.title}
                                    </h4>
                                </div>
                                <div
                                    className="ml-4 relative inline-flex items-center h-6 rounded-full w-11 transition-all bg-slate-300 dark:bg-slate-700"
                                    style={{
                                        backgroundColor: 'var(--glass-bg)'
                                    }}
                                >
                                    <span className="sr-only">Listen</span>
                                    <span
                                        className="translate-x-6 inline-block w-4 h-4 transform rounded-full transition-all"
                                        style={{
                                            backgroundColor: 'var(--accent-glow)',
                                            boxShadow: '0 0 10px var(--accent-glow)'
                                        }}
                                    />
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Resources;

