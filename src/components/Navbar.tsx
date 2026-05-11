import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Nossos Serviços', href: '#servicos' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Documentário', href: '#documentario' },
  ];

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-500 ${
      (isScrolled || isMenuOpen)
        ? 'bg-white shadow-sm py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center transition-all duration-500">
          <Logo 
            width={isScrolled ? "140px" : "180px"} 
            className="md:hidden transition-all duration-500" 
          />
          <Logo 
            width={isScrolled ? "180px" : "280px"} 
            className="hidden md:block transition-all duration-500" 
          />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-brand-secondary">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-brand-secondary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-primary transition-all shadow-md">
            <Phone size={16} fill="currentColor" />
            (54) 99980-2228
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-brand-secondary hover:text-brand-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 animate-slide-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold text-brand-secondary hover:text-brand-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://api.whatsapp.com/send/?phone=5554999802228&text&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-secondary text-white py-4 rounded-xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone size={20} fill="currentColor" />
            Ligar Agora
          </a>
        </div>
      )}
    </nav>
  );
};
