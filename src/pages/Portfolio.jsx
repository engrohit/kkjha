
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPenNib, FaNewspaper, FaCogs, FaStore } from 'react-icons/fa';

const Portfolio = () => {
    const categories = [
        { title: 'Creative Writing', icon: <FaPenNib />, link: '/work/creative', desc: 'Screenplays, microdramas, and narratives.', color: 'text-purple-600' },
        { title: 'Journalism', icon: <FaNewspaper />, link: '/work/journalism', desc: 'Reports, articles, and investigative pieces.', color: 'text-blue-600' },
        { title: 'Engineering', icon: <FaCogs />, link: '/work/engineering', desc: 'Technical projects and innovations.', color: 'text-orange-600' },
        { title: 'Business', icon: <FaStore />, link: '/work/business', desc: 'Ventures, strategies, and case studies.', color: 'text-amber-600' },
    ];

    return (
        <div className="min-h-screen pt-24 px-6 md:px-12 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-serif font-bold text-slate-800 dark:text-white mb-6"
            >
                Portfolio
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((cat, index) => (
                    <Link to={cat.link} key={index}>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-green-500 transition-all group"
                        >
                            <div className={`text-4xl mb-4 ${cat.color}`}>{cat.icon}</div>
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-green-600 transition-colors">{cat.title}</h2>
                            <p className="text-slate-600 dark:text-slate-400">{cat.desc}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
