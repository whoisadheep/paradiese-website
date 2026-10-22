import { Leaf, MapPin, Phone, Mail } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { brandInfo, products, navLinks } from '../data/products';

export default function Footer() {
  const lenis = useLenis();

  function handleSmoothScroll(e, href) {
    e.preventDefault();
    if (href === '#home') {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.4 });
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
  }

  const emailHref = `mailto:${brandInfo.email}?subject=Business%20Enquiry%20-%20Paradiese%20Sundry%20Crunchy`;
  const whatsappHref = `https://wa.me/${brandInfo.whatsapp}?text=Hello%20Paradiese,%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.`;

  return (
    <footer className="bg-forest-deep text-cream border-t border-forest-light/40" role="contentinfo">
      <div className="max-w-7xl mx-auto pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-cream/10">
          {/* Col 1 — Brand with Actual Logo */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="inline-block group mb-4"
              aria-label="Paradiese — return to top"
            >
              <img
                src="/images/brand-logo-hi-res.webp"
                alt="Paradiese Sundry Crunchy"
                className="h-11 sm:h-12 w-auto object-contain brightness-105"
                width={130}
                height={52}
              />
            </a>

            <p className="font-serif italic text-gold text-sm tracking-wide mb-3">
              “Taste Never Ends”
            </p>

            <p className="text-xs sm:text-sm text-cream/65 leading-relaxed max-w-sm mb-4">
              {brandInfo.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf shrink-0" />
              <span>Natural Dehydrated Food Products & Spice Powders</span>
            </div>
          </div>

          {/* Col 2 — Head Office & Contact */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-4">
              Head Office
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-cream/75 leading-relaxed mb-4">
              <MapPin size={16} className="text-leaf shrink-0 mt-0.5" />
              <div>
                <p className="text-cream font-medium">{brandInfo.headOffice.line1}</p>
                <p>{brandInfo.headOffice.line2}</p>
                <p className="text-cream/90">{brandInfo.headOffice.cityStateZip}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-cream/10 text-xs">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors"
              >
                <Phone size={14} className="text-[#25D366] shrink-0" />
                <span>WhatsApp: {brandInfo.phone}</span>
              </a>

              <a
                href={emailHref}
                className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors break-all"
              >
                <Mail size={14} className="text-gold shrink-0" />
                <span>{brandInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Col 3 — Navigation Links */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-cream/70 hover:text-cream text-xs sm:text-sm transition-colors inline-block hover:translate-x-0.5 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Product Catalogue Quick Links */}
          <div className="md:col-span-12 lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-4">
              Pantry Essentials (15 Products)
            </h4>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 sm:gap-y-2">
              {products.map((product) => (
                <a
                  key={product.id}
                  href="#products"
                  onClick={(e) => handleSmoothScroll(e, '#products')}
                  className="text-cream/70 hover:text-cream text-xs transition-colors group flex items-center gap-1.5 truncate"
                >
                  <span className="w-1 h-1 rounded-full bg-leaf/60 group-hover:bg-gold transition-colors shrink-0" />
                  <span className="truncate">{product.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-cream/10 text-xs text-cream/50">
              <p>Pack sizes: 100g • 200g • 500g • 1kg</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} PARADIESE — SUNDRY CRUNCHY. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="italic font-serif text-cream/60">Taste Never Ends</span>
            <span>•</span>
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="hover:text-cream transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
