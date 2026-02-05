import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaRocket, FaHandshake, FaBook, FaEnvelope } from 'react-icons/fa';

const navItems = [
    { id: 'hero', icon: <FaHome />, label: 'Home' },
    { id: 'services', icon: <FaRocket />, label: 'Services' },
    { id: 'affiliates', icon: <FaHandshake />, label: 'Hub' },
    { id: 'content', icon: <FaBook />, label: 'Content' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
];

const Navbar = () => {
    const [active, setActive] = useState('hero');

    const scrollToSection = (id) => {
        setActive(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
            <motion.div
                className="glass-panel flex justify-between items-center px-6 py-4 rounded-full shadow-neon"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative flex flex-col items-center justify-center p-2 text-xl transition-all duration-300 ${active === item.id ? 'text-cyber-blue -translate-y-1' : 'text-slate-gray hover:text-white'
                            }`}
                    >
                        <span className="text-2xl">{item.icon}</span>
                        {active === item.id && (
                            <motion.span
                                layoutId="activeDot"
                                className="absolute -bottom-2 w-1 h-1 bg-cyber-blue rounded-full shadow-[0_0_10px_#007bff]"
                            />
                        )}
                    </button>
                ))}
            </motion.div>
        </div>
    );
};

export default Navbar;
