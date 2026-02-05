import { useTheme } from '../../context/ThemeContext';
import { FaPalette, FaSun, FaMoon } from 'react-icons/fa';
import Dropdown from './Dropdown.jsx';

const ThemeSwitcher = () => {
    const { theme, setTheme, themes, mode, toggleMode, contrast, setContrast } = useTheme();

    return (
        <Dropdown
            align="right"
            trigger={
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm">
                    <FaPalette className="text-lg" />
                </div>
            }
        >
            {({ close }) => (
                <div className="w-64 p-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Appearance</span>
                    </div>

                    {/* Mode Segmented Control */}
                    <div className="flex bg-slate-100 dark:bg-white/5 rounded-lg p-1">
                        <button
                            onClick={() => mode !== 'light' && toggleMode()}
                            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'light'
                                ? 'bg-white shadow text-slate-900'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                        >
                            <FaSun className={mode === 'light' ? 'text-amber-500' : ''} />
                            Light
                        </button>
                        <button
                            onClick={() => mode !== 'dark' && toggleMode()}
                            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-sm font-medium transition-all ${mode === 'dark'
                                ? 'bg-slate-700 dark:bg-slate-800 shadow text-white'
                                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                }`}
                        >
                            <FaMoon className={mode === 'dark' ? 'text-blue-300' : ''} />
                            Dark
                        </button>
                    </div>

                    {/* Theme Grid */}
                    <div>
                        <span className="text-xs font-semibold text-slate-500 mb-2 block">Accent Color</span>
                        <div className="grid grid-cols-2 gap-2">
                            {themes.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => {
                                        setTheme(t.id);
                                        // Optional: close(); // Keep open to let user try colors? Removing close() for better UX
                                    }}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all border ${theme === t.id
                                        ? 'bg-slate-50 dark:bg-white/10 border-slate-300 dark:border-white/20 ring-1 ring-slate-300 dark:ring-white/20'
                                        : 'border-transparent hover:bg-slate-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    <div
                                        className="w-4 h-4 rounded-full shadow-sm"
                                        style={{ backgroundColor: t.color }}
                                    />
                                    <span className={`text-sm ${theme === t.id ? 'font-semibold text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                                        {t.name.split(' ')[0]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contrast Adjuster */}
                    <div>
                        <span className="text-xs font-semibold text-slate-500 mb-2 block">Contrast Level</span>
                        <div className="flex bg-slate-100 dark:bg-white/5 rounded-lg p-1">
                            <button
                                onClick={() => setContrast(100)}
                                className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${contrast === 100
                                        ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                    }`}
                            >
                                Normal
                            </button>
                            <button
                                onClick={() => setContrast(115)}
                                className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${contrast === 115
                                        ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                    }`}
                            >
                                High
                            </button>
                            <button
                                onClick={() => setContrast(130)}
                                className={`flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-all ${contrast === 130
                                        ? 'bg-white dark:bg-slate-700 shadow text-slate-900 dark:text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                    }`}
                            >
                                Maximum
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5 text-center">
                            {contrast}% contrast
                        </p>
                    </div>
                </div>
            )}
        </Dropdown>
    );
};

export default ThemeSwitcher;
