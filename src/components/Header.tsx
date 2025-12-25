import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#services', label: 'Услуги' },
  { href: '#benefits', label: 'Преимущества' },
  { href: '#process', label: 'Этапы' },
  { href: '#offers', label: 'Акции' },
  { href: '#contacts', label: 'Контакты' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-lg' 
          : 'bg-primary/95'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
            >
              <path 
                d="M20 2L4 38H16L20 28L24 38H36L20 2Z" 
                fill="hsl(213, 100%, 12%)" 
                stroke="hsl(43, 74%, 49%)" 
                strokeWidth="2"
              />
              <path 
                d="M20 8L10 32H15L20 20L25 32H30L20 8Z" 
                fill="hsl(43, 74%, 49%)"
              />
            </svg>
            <span className="text-lg md:text-xl font-serif font-bold text-accent">
              Ари Консалт
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground hover:text-accent transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+79383100035" 
              className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+7 (938) 310-00-35</span>
            </a>
            <Button 
              variant="cta"
              onClick={() => scrollToSection('#contacts')}
              className="text-sm"
            >
              Заказать консультацию
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary border-t border-border/20 pb-4">
            <nav className="flex flex-col px-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground hover:text-accent transition-colors py-3 text-left font-medium border-b border-border/10 last:border-0"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="px-4 pt-4 space-y-3">
              <a 
                href="tel:+79383100035" 
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (938) 310-00-35</span>
              </a>
              <a 
                href="mailto:Ar.i.1c@yandex.ru" 
                className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Ar.i.1c@yandex.ru</span>
              </a>
              <Button 
                variant="cta"
                onClick={() => scrollToSection('#contacts')}
                className="w-full mt-2"
              >
                Заказать консультацию
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
