import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const NestedDropdown = ({ trigger, children, label, icon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    const handleMouseEnter = () => {
        // Only use hover on non-touch devices
        if (!('ontouchstart' in window)) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        // Only use hover on non-touch devices
        if (!('ontouchstart' in window)) {
            timeoutRef.current = setTimeout(() => {
                setIsOpen(false);
            }, 200);
        }
    };

    const handleClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                onClick={handleClick}
                className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    {icon}
                    <span className="text-sm font-medium">{label}</span>
                </div>
                <FaChevronRight className={`text-xs opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="mt-1 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-lg shadow-xl overflow-hidden z-[110]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NestedDropdown;
