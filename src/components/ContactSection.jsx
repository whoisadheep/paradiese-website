import { Mail, MessageCircle, Leaf } from 'lucide-react';
import { brandInfo } from '../data/products';

export default function ContactSection() {
  const emailHref = brandInfo.email ? `mailto:${brandInfo.email}` : '#contact';
  const whatsappHref = brandInfo.whatsapp
    ? `https://wa.me/${brandInfo.whatsapp}?text=Hello%20Paradiese,%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.`
    : '#contact';

  return (
    <section id="contact" className="bg-cream py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Decorative botanical leaf watermark in background */}
      <div
        className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(120,147,75,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-leaf mb-4">
          <Leaf size={15} />
          <span>Get in Touch</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark max-w-3xl mx-auto leading-tight">
          Let’s bring better ingredients
          <br className="hidden sm:block" />
          {' '}to more kitchens.
        </h2>

        <p className="text-muted text-base sm:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
          Interested in our products or looking to discuss a business enquiry?
          We’d love to hear from you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-10 px-4 sm:px-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-102 active:scale-98"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </a>

          <a
            href={emailHref}
            className="inline-flex items-center gap-2.5 bg-forest hover:bg-forest-deep text-cream rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-102 active:scale-98"
          >
            <Mail size={19} />
            Email Enquiry
          </a>
        </div>

        {/* Inquiry Scope Box */}
        <div className="mt-12 pt-8 border-t border-forest/10 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-muted">
            <div className="bg-ivory/80 rounded-xl p-3 border border-cream">
              <strong className="block text-dark/90 font-semibold mb-0.5">Bulk Supplies</strong>
              Hotels, restaurants, cloud kitchens & caterers
            </div>
            <div className="bg-ivory/80 rounded-xl p-3 border border-cream">
              <strong className="block text-dark/90 font-semibold mb-0.5">Retail Distribution</strong>
              Supermarkets, organic stores & spice dealers
            </div>
            <div className="bg-ivory/80 rounded-xl p-3 border border-cream">
              <strong className="block text-dark/90 font-semibold mb-0.5">Private Labelling</strong>
              Custom pack sizes from 100g to 1kg
            </div>
          </div>

          <p className="text-xs text-muted/80 mt-6">
            Website: <span className="font-semibold text-forest">{brandInfo.website}</span> • Brand: PARADIESE SUNDRY CRUNCHY
          </p>
        </div>
      </div>
    </section>
  );
}
