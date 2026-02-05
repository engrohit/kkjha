import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBriefcase, FaPenNib, FaEnvelope, FaLayerGroup } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BottomNavbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    // Detect scroll direction or position if needed, though usually bottom nav is fixed
    useEffect(() => {
        const handleScroll = () => {
            // Optional: Hide on scroll down, show on scroll up logic could go here
            // For now, keeping it simple fixed bottom
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { icon: <FaHome />, label: 'Home', path: '/' },
        { icon: <FaBriefcase />, label: 'Work', path: '/work/creative' }, // Defaulting Work to Creative for now, or could be a menu
        { icon: <FaLayerGroup />, label: 'Portfolio', path: '/portfolio' },
        { icon: <FaPenNib />, label: 'Stories', path: '/stories' },
        { icon: <FaEnvelope />, label: 'Contact', path: '/contact' },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-md md:hidden">
            <nav className="bg-white/80 dark:bg-deep-navy/80 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 rounded-2xl shadow-lg shadow-slate-200/20 dark:shadow-black/40 px-6 py-3 flex justify-between items-center">
                {navItems.map((item) => {
                    const isActive = location.pathname === item.path || (item.label === 'Work' && location.pathname.startsWith('/work'));

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="relative flex flex-col items-center gap-1 group"
                        >
                            <div className={`
                                relative p-2 rounded-xl transition-all duration-300
                                ${isActive
                                    ? 'text-white bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 -translate-y-4 scale-110'
                                    : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                                }
                            `}>
                                <span className="text-xl">
                                    {item.icon}
                                </span>

                                {/* Active Indicator Dot (optional, if not using the transform effect) */}
                                {/* {isActive && (
                                    <motion.div 
                                        layoutId="bottomNavIndicator"
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                                    />
                                )} */}
                            </div>

                            <span className={`
                                text-[10px] font-medium transition-all duration-300 absolute -bottom-4 w-auto whitespace-nowrap
                                ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-1'
                                }
                            `}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default BottomNavbar;
