import { useState, useCallback, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { navLinks, brandInfo } from '../data/products';
import { useScrollPosition } from '../hooks/useScrollReveal';

export default function Navbar() {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'story', 'products', 'quality', 'culinary', 'contact'];
      const scrollPos = window.scrollY + 120;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'navbar-scrolled py-2'
          : 'bg-ivory/80 backdrop-blur-sm py-3 border-b border-cream/60'
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* ── Brand Logo with Real Asset ── */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Paradiese Sundry Crunchy — Taste Never Ends"
        >
            <img
              src="/images/brand-logo-hi-res.webp"
            alt="Paradiese Sundry Crunchy"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-102"
            width={120}
            height={48}
          />
        </a>

        {/* ── Desktop Links ── */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
          <ul className="flex items-center gap-7 lg:gap-9" role="list">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-sans text-sm font-medium transition-colors duration-200 py-1 ${
                      isActive ? 'text-forest font-semibold' : 'text-dark/75 hover:text-forest'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute left-0 -bottom-1 w-full h-[2px] bg-gold rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Far Right CTA ── */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 bg-ivory text-forest border border-forest/30 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 hover:bg-forest hover:text-cream hover:border-forest active:scale-95 shadow-xs"
          >
            <Leaf size={14} className="text-leaf" strokeWidth={2.2} />
            Enquire Now
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-forest hover:bg-forest/5 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu size={24} strokeWidth={2} />
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-forest-deep/50 backdrop-blur-xs"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-ivory shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-cream">
            <img
              src="/images/brand-logo-hi-res.webp"
              alt="Paradiese"
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full bg-cream/70 flex items-center justify-center text-forest"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-5 py-6 overflow-y-auto">
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-dark/90 font-medium text-base hover:bg-cream transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-cream">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full bg-forest text-cream rounded-full py-3 text-sm font-medium hover:bg-forest-deep transition-colors shadow-sm"
              >
                <Leaf size={15} strokeWidth={2} />
                Enquire Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
