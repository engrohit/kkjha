import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import TopNavbar from './components/layout/TopNavbar.jsx';
import Footer from './components/layout/Footer.jsx';
import PWAInstallFab from './components/ui/PWAInstallFab.jsx';
import ScrollButtons from './components/ui/ScrollButtons.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Stories from './pages/Stories.jsx';
import Contact from './pages/Contact.jsx';
import CreativeWork from './pages/works/CreativeWork.jsx';
import JournalismWork from './pages/works/JournalismWork.jsx';
import EngineeringWork from './pages/works/EngineeringWork.jsx';
import BusinessWork from './pages/works/BusinessWork.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <div className="selection:bg-neon-cyan selection:text-deep-navy">
        <TopNavbar />
        <PWAInstallFab />
        <ScrollButtons />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/creative" element={<CreativeWork />} />
          <Route path="/work/journalism" element={<JournalismWork />} />
          <Route path="/work/engineering" element={<EngineeringWork />} />
          <Route path="/work/business" element={<BusinessWork />} />
        </Routes>

        <Footer />

        {/* Background Mesh (Global) */}
        <div className="fixed inset-0 z-[-1] opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--accent-primary) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
