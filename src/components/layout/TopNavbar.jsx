import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaInstagram, FaYoutube, FaSearch, FaBell, FaGlobe, FaTimes, FaBriefcase, FaPenNib, FaNewspaper, FaCogs, FaStore, FaLinkedinIn, FaShare, FaHome, FaBars } from 'react-icons/fa';
import ThemeSwitcher from '../ui/ThemeSwitcher.jsx';
import Dropdown from '../ui/Dropdown.jsx';

const TopNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [showSubscribeModal, setShowSubscribeModal] = useState(false);
    const searchInputRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus input when search opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const workLinks = [
        { icon: <FaPenNib />, href: '/work/creative', label: 'Creative Writing', color: 'hover:text-purple-600' },
        { icon: <FaNewspaper />, href: '/work/journalism', label: 'Journalism', color: 'hover:text-blue-600' },
        { icon: <FaCogs />, href: '/work/engineering', label: 'Engineering', color: 'hover:text-orange-600' },
        { icon: <FaStore />, href: '/work/business', label: 'Business', color: 'hover:text-amber-600' },
    ];

    const pageLinks = [
        { icon: <FaHome />, href: '/', label: 'Home', color: 'hover:text-green-600' },
        { href: '/about', label: 'About Me', color: 'hover:text-blue-600' },
        { href: '/portfolio', label: 'Portfolio', color: 'hover:text-purple-600' },
        { href: '/stories', label: 'Stories', color: 'hover:text-orange-600' },
        { href: '/contact', label: 'Contact', color: 'hover:text-pink-600' },
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn />, href: 'https://linkedin.com/in/krishankantjha', label: 'LinkedIn', color: 'hover:text-blue-700' },
        { icon: <FaTwitter />, href: 'https://twitter.com/krishankantjha', label: 'X (Twitter)', color: 'hover:text-black dark:hover:text-white' },
        { icon: <FaInstagram />, href: 'https://instagram.com/krishankantjha', label: 'Instagram', color: 'hover:text-pink-600' },
        { icon: <FaFacebookF />, href: 'https://www.facebook.com/krishan.kant.jha.435595', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: <FaTelegramPlane />, href: 'https://t.me/RapidReadout', label: 'Telegram', color: 'hover:text-sky-500' },
    ];

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Krishan Kant Jha - Portfolio',
                    text: 'Check out my portfolio!',
                    url: window.location.href,
                });
            } catch (err) {
                console.log('Share failed:', err);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        setShowSubscribeModal(true);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-7xl rounded-2xl transition-all duration-300 ${scrolled
                ? 'bg-white/80 dark:bg-deep-navy/80 backdrop-blur-xl shadow-lg border border-white/20 dark:border-white/10'
                : 'bg-white/50 dark:bg-deep-navy/50 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-sm'
                }`}
        >
            <div className="px-2 py-2 md:px-6 md:py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-2 relative">

                {/* 1. Brand / Logo Area */}
                <Link
                    to="/"
                    className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0"
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border-2 border-[var(--accent-primary)] shadow-[0_0_10px_var(--accent-glow)] overflow-hidden icon-theme-effect"
                    >
                        <img src="./logo.png" alt="KKJ" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <div className="flex flex-col">
                        <h1 className="text-xl md:text-2xl font-serif font-bold text-slate-800 dark:text-white leading-none tracking-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                            Krishan
                        </h1>
                        <h1 className="text-sm md:text-lg font-serif font-medium text-slate-600 dark:text-slate-300 leading-none tracking-tight">
                            Kant Jha
                        </h1>
                    </div>
                </Link>

                {/* 2. Actions & Navigation Area */}
                <div className="flex flex-wrap md:flex-nowrap items-center gap-1 md:gap-2 lg:gap-4">

                    {/* Search Bar (Expandable) */}
                    <div className="relative flex items-center">
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: window.innerWidth < 640 ? '160px' : '220px', opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    className="overflow-hidden mr-2"
                                >
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500/50"
                                        onBlur={() => {
                                            if (!searchInputRef.current.value) setIsSearchOpen(false);
                                        }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={`flex items-center gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full border transition-all duration-300 group ${isSearchOpen
                                ? 'border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white'
                                : 'border-transparent md:border-slate-200 md:dark:border-white/10 bg-slate-100 md:bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:border-green-500 dark:hover:border-green-400'
                                }`}
                        >
                            <div className="w-9 h-9 md:w-auto md:h-auto flex items-center justify-center rounded-full bg-slate-100 md:bg-transparent dark:bg-white/10 md:dark:bg-transparent">
                                {isSearchOpen ? <FaTimes className="text-slate-500 dark:text-slate-400 group-hover:animate-spin" /> : <FaSearch className="text-slate-500 dark:text-slate-400 group-hover:animate-pulse" />}
                            </div>
                            <span className="hidden md:block text-sm font-medium">Search</span>
                        </button>
                    </div>

                    {/* Subscribe Button - After Search */}
                    <button
                        onClick={handleSubscribe}
                        className={`${isSearchOpen ? 'hidden md:flex' : 'flex'} items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-cyber-blue to-neon-cyan text-white font-medium hover:shadow-lg hover:shadow-cyber-blue/30 transition-all shadow-md active:scale-95 group`}
                        style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-glow))' }}
                    >
                        <FaBell className="text-sm group-hover:animate-[bellShake_0.5s_ease-in-out]" />
                        <span className="hidden sm:inline text-sm">Subscribe</span>
                    </button>

                    {/* Menu Dropdown (Pages) */}
                    <Dropdown
                        align="right"
                        trigger={
                            <div className={`${isSearchOpen ? 'hidden md:flex' : 'flex'} items-center gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full border border-transparent md:border-slate-200 md:dark:border-white/10 md:hover:border-green-500 md:dark:hover:border-green-400 md:bg-white/50 md:dark:bg-white/5 transition-all cursor-pointer group`}>
                                <div className="w-9 h-9 md:w-auto md:h-auto flex items-center justify-center rounded-full bg-slate-100 md:bg-transparent dark:bg-white/10 md:dark:bg-transparent">
                                    <FaBars className="text-slate-500 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:animate-bounce transition-colors" />
                                </div>
                                <span className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">Menu</span>
                            </div>
                        }
                    >
                        <div className="p-2 w-48 grid grid-cols-1 gap-1">
                            {pageLinks.map((page, index) => (
                                <Link
                                    key={index}
                                    to={page.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all ${page.color}`}
                                >
                                    {page.icon && page.icon}
                                    <span className="text-sm font-medium">{page.label}</span>
                                </Link>
                            ))}
                        </div>
                    </Dropdown>

                    {/* Work Experience Dropdown */}
                    <Dropdown
                        align="right"
                        trigger={
                            <div className={`${isSearchOpen ? 'hidden md:flex' : 'flex'} items-center gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full border border-transparent md:border-slate-200 md:dark:border-white/10 md:hover:border-green-500 md:dark:hover:border-green-400 md:bg-white/50 md:dark:bg-white/5 transition-all cursor-pointer group`}>
                                <div className="w-9 h-9 md:w-auto md:h-auto flex items-center justify-center rounded-full bg-slate-100 md:bg-transparent dark:bg-white/10 md:dark:bg-transparent">
                                    <FaBriefcase className="text-slate-500 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:animate-[bellShake_0.5s_ease-in-out] transition-colors" />
                                </div>
                                <span className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">Work</span>
                            </div>
                        }
                    >
                        <div className="p-2 w-56 grid grid-cols-1 gap-1">
                            {workLinks.map((work, index) => (
                                <Link
                                    key={index}
                                    to={work.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all ${work.color}`}
                                >
                                    {work.icon}
                                    <span className="text-sm font-medium">{work.label}</span>
                                </Link>
                            ))}
                        </div>
                    </Dropdown>

                    {/* Connect Dropdown with Share */}
                    <Dropdown
                        align="right"
                        trigger={
                            <div className={`${isSearchOpen ? 'hidden md:flex' : 'flex'} items-center gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full border border-transparent md:border-slate-200 md:dark:border-white/10 md:hover:border-green-500 md:dark:hover:border-green-400 md:bg-white/50 md:dark:bg-white/5 transition-all cursor-pointer group`}>
                                <div className="w-9 h-9 md:w-auto md:h-auto flex items-center justify-center rounded-full bg-slate-100 md:bg-transparent dark:bg-white/10 md:dark:bg-transparent">
                                    <FaGlobe className="text-slate-500 dark:text-slate-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:animate-spin transition-colors" />
                                </div>
                                <span className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">Connect</span>
                            </div>
                        }
                    >
                        <div className="p-2 w-48 grid grid-cols-1 gap-1">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all ${social.color}`}
                                >
                                    {social.icon}
                                    <span className="text-sm font-medium">{social.label}</span>
                                </a>
                            ))}
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all border-t border-slate-200 dark:border-white/10 mt-1 pt-2 group"
                                style={{ color: 'var(--accent-primary)' }}
                            >
                                <FaShare className="group-hover:animate-pulse" />
                                <span className="text-sm font-medium">Share</span>
                            </button>
                        </div>
                    </Dropdown>

                    {/* Theme Switcher */}
                    <div className={`${isSearchOpen ? 'hidden md:block' : 'block'}`}>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>

            {/* Subscribe Modal */}
            <AnimatePresence>
                {showSubscribeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowSubscribeModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-[90%] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Subscribe to Updates</h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">Get notified about new stories, projects, and updates!</p>
                            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); setShowSubscribeModal(false); }}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-white/20 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-green-500 outline-none text-slate-800 dark:text-white"
                                />
                                <div className="flex gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setShowSubscribeModal(false)}
                                        className="flex-1 px-4 py-2 rounded-lg border border-slate-300 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default TopNavbar;
