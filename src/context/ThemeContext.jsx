import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('kkj-theme') || 'cyber';
        } catch (e) {
            return 'cyber';
        }
    });

    const [mode, setMode] = useState(() => {
        try {
            return localStorage.getItem('kkj-mode') || 'dark';
        } catch (e) {
            return 'dark';
        }
    });

    const [contrast, setContrast] = useState(() => {
        try {
            return parseInt(localStorage.getItem('kkj-contrast')) || 100;
        } catch (e) {
            return 100;
        }
    });

    useEffect(() => {
        const root = document.body;
        root.classList.remove('theme-cyber', 'theme-royal', 'theme-emerald', 'theme-crimson');
        root.classList.add(`theme-${theme}`);

        if (mode === 'light') {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
        }

        try {
            localStorage.setItem('kkj-theme', theme);
            localStorage.setItem('kkj-mode', mode);
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    }, [theme, mode]);

    useEffect(() => {
        const root = document.body;
        // Apply contrast as CSS variable
        root.style.setProperty('--contrast-level', contrast / 100);

        // Apply contrast class for additional styling
        root.classList.remove('contrast-normal', 'contrast-high', 'contrast-maximum');
        if (contrast === 115) {
            root.classList.add('contrast-high');
        } else if (contrast === 130) {
            root.classList.add('contrast-maximum');
        } else {
            root.classList.add('contrast-normal');
        }

        // Persist to localStorage
        try {
            localStorage.setItem('kkj-contrast', contrast);
        } catch (e) {
            console.warn('LocalStorage not available');
        }
    }, [contrast]);

    const toggleMode = () => {
        setMode(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const themes = [
        { id: 'cyber', name: 'Cyber Future', color: '#007bff' },
        { id: 'royal', name: 'Royal Velvet', color: '#ff00ff' },
        { id: 'emerald', name: 'Emerald City', color: '#50c878' },
        { id: 'crimson', name: 'Crimson Night', color: '#dc143c' },
    ];

    return (
        <ThemeContext.Provider value={{ theme, setTheme, mode, toggleMode, themes, contrast, setContrast }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
