import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import Container from '../ui/Container';
import { Menu, X, Scale, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('ES');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ES' ? 'EN' : 'ES');
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // We're on home page, just scroll
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Regular navigation
      navigate(href);
    }
    setMobileMenuOpen(false);
  };
  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <Scale className={`h-8 w-8 ${isScrolled || mobileMenuOpen ? 'text-primary-700' : 'text-white'}`} />
            <div className="ml-3 flex flex-col">
              <span className={`text-lg font-heading font-bold ${isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'}`}>Notaría 36</span>
              <span className={`text-sm ${isScrolled || mobileMenuOpen ? 'text-gold-700' : 'text-gold-500'}`}>CDMX</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-medium transition-colors hover:text-primary-700 ${
                      isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center md:flex">
            <button
              onClick={toggleLanguage}
              className={`flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                isScrolled || mobileMenuOpen
                  ? 'bg-primary-50 text-primary-900 hover:bg-primary-100'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Globe className="mr-1 h-4 w-4" />
              <span>{language}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <Container>
            <nav className="mt-4 pb-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="block text-base font-medium text-primary-900"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center text-sm font-medium text-primary-900 bg-primary-50 rounded-full px-3 py-1.5 hover:bg-primary-100"
                  >
                    <Globe className="mr-1 h-4 w-4" />
                    <span>{language}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;