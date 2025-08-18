import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServersPage from './pages/ServersPage';
import VPSPage from './pages/VPSPage';
import HostingPage from './pages/HostingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servidores-dedicados" element={<ServersPage />} />
            <Route path="/vps" element={<VPSPage />} />
            <Route path="/hosting" element={<HostingPage />} />

            <Route path="/sobre-nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;