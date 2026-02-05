
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = ({ trigger, children, align = 'center' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const containerRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsSticky(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMouseEnter = () => {
        if (!isSticky) {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isSticky) {
            setIsOpen(false);
        }
    };

    const toggleSticky = () => {
        if (isSticky) {
            setIsSticky(false);
            setIsOpen(false);
        } else {
            setIsSticky(true);
            setIsOpen(true);
        }
    };

    const close = () => {
        setIsOpen(false);
        setIsSticky(false);
    };

    // Calculate alignment classes
    const getAlignClass = () => {
        switch (align) {
            case 'left': return 'left-0';
            case 'right': return 'right-0';
            case 'center':
            default: return 'left-1/2 transform -translate-x-1/2';
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div onClick={toggleSticky} className="cursor-pointer">
                {trigger}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute mt-2 min-w-[12rem] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-lg shadow-xl overflow-hidden z-[100] ${getAlignClass()}`}
                    >
                        {typeof children === 'function' ? children({ close }) : children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;
