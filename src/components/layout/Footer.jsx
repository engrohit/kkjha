import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaYoutube, FaGlobe, FaHeart, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'About Me', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Stories', href: '/stories' },
        { label: 'Contact', href: '/contact' },
    ];

    const workCategories = [
        { label: 'Creative Writing', href: '/work/creative' },
        { label: 'Journalism', href: '/work/journalism' },
        { label: 'Engineering', href: '/work/engineering' },
        { label: 'Business', href: '/work/business' },
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/krishan-kant-jha-a3b6a0163/', label: 'LinkedIn' },
        { icon: <FaInstagram />, href: 'https://www.instagram.com/artistkkjha/', label: 'Instagram' },
        { icon: <FaYoutube />, href: 'https://www.youtube.com/@artistkkjha', label: 'YouTube' },
        { icon: <FaGlobe />, href: 'https://www.threads.com/@krishanjha93?xmt=AQF0e-MGlflipWPekNfHCXs36Rj_hx243bqyHrMf5jRYQMc', label: 'Threads' },
        { icon: <FaGlobe />, href: 'https://adbl.co/postcard', label: 'Audible' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-white/60 to-white/80 dark:from-deep-navy/60 dark:to-deep-navy/80 backdrop-blur-lg border-t-2 border-slate-300/50 dark:border-white/20 mt-20">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-3 gap-8 mb-8">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block group">
                            <h2 className="text-xl font-serif font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-green-400 transition-all duration-300">
                                Krishan Kant Jha
                            </h2>
                            <p className="text-xs font-medium text-green-600 dark:text-green-400 mt-1 tracking-wide">
                                Screenwriter & Storyteller
                            </p>
                        </Link>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Crafting emotionally engaging microdramas and cinematic narratives.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-4 pb-2 border-b-2 border-green-500/30">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:translate-x-1 transition-all duration-200 inline-block"
                                    >
                                        → {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Work Categories */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-widest mb-4 pb-2 border-b-2 border-green-500/30">
                            Work
                        </h3>
                        <ul className="space-y-2">
                            {workCategories.map((category, index) => (
                                <li key={index}>
                                    <Link
                                        to={category.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:translate-x-1 transition-all duration-200 inline-block"
                                    >
                                        → {category.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar with Connect Section */}
                <div className="pt-6 border-t-2 border-slate-300/50 dark:border-white/10">
                    <div className="grid grid-cols-3 gap-2 md:gap-8 items-center">
                        {/* Privacy/Terms Links */}
                        <div className="flex flex-col md:flex-row gap-1 md:gap-6">
                            <Link to="/privacy" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                Privacy
                            </Link>
                            <Link to="/terms" className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                Terms
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-1 md:gap-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-sm hover:shadow-lg text-xs"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        {/* Copyright - 3rd column */}
                        <div className="flex justify-end">
                            <p className="text-[10px] md:text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 md:gap-1.5">
                                © {currentYear} <span className="hidden md:inline font-semibold">Krishan Kant Jha</span><span className="md:hidden font-semibold">KKJ</span>. <span className="hidden md:inline">Made with</span> <FaHeart className="text-red-500 animate-pulse" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
