import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Leaf, Menu, X, ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { navLinks, brandInfo } from '../data/products';
import { useScrollPosition } from '../hooks/useScrollReveal';

export default function Navbar() {
  const lenis = useLenis();
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // Prevent background scroll while mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [mobileOpen, lenis]);

  // Smooth scroll handler for both desktop and mobile
  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();

      // Immediately close mobile drawer and unlock scrolling
      setMobileOpen(false);
      document.body.style.overflow = '';
      lenis?.start();

      // Delay scroll slightly to allow the drawer animation and Lenis loop to activate
      setTimeout(() => {
        if (href === '#home') {
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { offset: -70, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    },
    [lenis]
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${
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

          {/* ── Mobile Hamburger Button ── */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-forest hover:bg-forest/5 active:bg-forest/10 transition-colors cursor-pointer touch-manipulation"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={26} strokeWidth={2.2} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer Rendered via Portal to avoid stacking context & backdrop-filter trapping ── */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
              mobileOpen
                ? 'opacity-100 pointer-events-auto visible'
                : 'opacity-0 pointer-events-none invisible'
            }`}
            aria-hidden={!mobileOpen}
          >
            {/* Full-screen Dark Backdrop */}
            <div
              className="absolute inset-0 bg-forest-deep/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu backdrop"
            />

            {/* Sliding Drawer Panel */}
            <div
              className={`absolute top-0 right-0 h-[100dvh] w-[86%] max-w-sm bg-ivory shadow-2xl transition-transform duration-300 ease-out flex flex-col z-[101] ${
                mobileOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-cream shrink-0 bg-ivory">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/brand-logo-hi-res.webp"
                    alt="Paradiese"
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full bg-cream/80 hover:bg-cream border border-forest/10 flex items-center justify-center text-forest cursor-pointer active:scale-95 transition-all"
                  aria-label="Close navigation menu"
                >
                  <X size={20} strokeWidth={2.2} />
                </button>
              </div>

              {/* Scrollable Nav Items */}
              <nav
                data-lenis-prevent
                className="flex-1 px-4 py-5 overflow-y-auto overscroll-contain"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/70 px-3 mb-2">
                  Navigation
                </div>

                <ul className="flex flex-col gap-1.5" role="list">
                  {navLinks.map((link) => {
                    const targetId = link.href.replace('#', '');
                    const isActive = activeSection === targetId;

                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`flex items-center justify-between py-3.5 px-3.5 rounded-xl text-base font-medium transition-all ${
                            isActive
                              ? 'bg-forest/8 text-forest font-semibold border-l-4 border-gold shadow-2xs'
                              : 'text-dark/85 hover:bg-cream hover:text-dark'
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                            )}
                            {link.label}
                          </span>
                          <ArrowRight
                            size={16}
                            className={`transition-transform ${
                              isActive ? 'text-forest translate-x-0.5' : 'text-muted/40'
                            }`}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>

                {/* Primary CTA button in Drawer */}
                <div className="mt-6 pt-5 border-t border-cream">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="flex items-center justify-center gap-2.5 w-full bg-forest text-cream rounded-full py-3.5 text-sm font-semibold hover:bg-forest-deep active:scale-98 transition-all shadow-sm"
                  >
                    <Leaf size={16} strokeWidth={2.2} className="text-leaf" />
                    Enquire Now
                  </a>
                </div>

                {/* Quick WhatsApp Link in Drawer */}
                <div className="mt-3">
                  <a
                    href={`https://wa.me/${brandInfo.whatsapp}?text=Hello%20Paradiese,%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white rounded-full py-3 text-xs font-semibold hover:bg-[#20BA5A] active:scale-98 transition-all shadow-xs"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Us (+91 99203 29133)
                  </a>
                </div>

                {/* Drawer Footer Contact Meta */}
                <div className="mt-8 pt-5 border-t border-cream/80 text-xs text-muted flex flex-col gap-2 px-1">
                  <div className="flex items-center gap-2 text-dark/70">
                    <Phone size={13} className="text-forest" />
                    <span>+91 99203 29133</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark/70 break-all">
                    <Mail size={13} className="text-forest shrink-0" />
                    <span className="text-[11px]">{brandInfo.email}</span>
                  </div>
                  <p className="font-serif italic text-gold text-xs mt-2">
                    “Taste Never Ends”
                  </p>
                </div>
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
