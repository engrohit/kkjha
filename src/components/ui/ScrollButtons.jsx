import { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ScrollButtons = () => {
    const { mode } = useTheme();
    const [showScrollUp, setShowScrollUp] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Show scroll up button when scrolled down more than 300px
            setShowScrollUp(scrollTop > 300);

            // Hide scroll down button when near bottom (within 100px)
            setShowScrollDown(scrollTop + clientHeight < scrollHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
            {/* Scroll Up Button */}
            <button
                onClick={scrollToTop}
                style={{
                    background: `linear-gradient(135deg, var(--accent-primary), var(--accent-glow))`,
                    borderColor: `var(--accent-primary)`,
                    boxShadow: `0 4px 20px ${mode === 'light' ? 'rgba(0,0,0,0.1)' : 'var(--accent-primary)'}40`,
                }}
                className={`
          scroll-button group relative w-12 h-12 rounded-full
          backdrop-blur-sm border-2
          hover:scale-110 active:scale-95
          transition-all duration-300
          ${showScrollUp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
                aria-label="Scroll to top"
            >
                <ChevronUp
                    className="w-6 h-6 mx-auto group-hover:animate-bounce"
                    style={{ color: mode === 'light' ? '#ffffff' : 'var(--text-highlight)' }}
                    strokeWidth={2.5}
                />

                {/* Glow effect */}
                <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `var(--accent-glow)` }}
                />
            </button>

            {/* Scroll Down Button */}
            <button
                onClick={scrollToBottom}
                style={{
                    background: mode === 'light'
                        ? `linear-gradient(135deg, var(--accent-primary), var(--bg-secondary))`
                        : `linear-gradient(135deg, var(--bg-secondary), var(--accent-primary))`,
                    borderColor: `var(--accent-primary)`,
                    boxShadow: `0 4px 20px ${mode === 'light' ? 'rgba(0,0,0,0.1)' : 'var(--accent-primary)'}40`,
                }}
                className={`
          scroll-button group relative w-12 h-12 rounded-full
          backdrop-blur-sm border-2
          hover:scale-110 active:scale-95
          transition-all duration-300
          ${showScrollDown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
                aria-label="Scroll to bottom"
            >
                <ChevronDown
                    className="w-6 h-6 mx-auto group-hover:animate-bounce"
                    style={{ color: mode === 'light' ? 'var(--accent-primary)' : 'var(--text-highlight)' }}
                    strokeWidth={2.5}
                />

                {/* Glow effect */}
                <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `var(--accent-glow)` }}
                />
            </button>


        </div>
    );
};

export default ScrollButtons;
