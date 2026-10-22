import { Mail, MessageCircle, Leaf, MapPin, Phone, Building, ExternalLink } from 'lucide-react';
import { brandInfo } from '../data/products';

export default function ContactSection() {
  const emailHref = brandInfo.email
    ? `mailto:${brandInfo.email}?subject=Business%20Enquiry%20-%20Paradiese%20Sundry%20Crunchy`
    : '#contact';
  const whatsappHref = brandInfo.whatsapp
    ? `https://wa.me/${brandInfo.whatsapp}?text=Hello%20Paradiese,%20I%20would%20like%20to%20discuss%20a%20business%20enquiry.`
    : '#contact';
  const phoneHref = `tel:${brandInfo.whatsapp}`;

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

      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto">
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
            Interested in our products or looking to discuss retail distribution, bulk hotel supplies, or private labelling?
            We’d love to connect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 px-4 sm:px-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 shadow-xs hover:shadow-md hover:scale-102 active:scale-98"
            >
              <MessageCircle size={19} />
              Chat on WhatsApp ({brandInfo.phone})
            </a>

            <a
              href={emailHref}
              className="inline-flex items-center justify-center gap-2.5 bg-forest hover:bg-forest-deep text-cream rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 shadow-xs hover:shadow-md hover:scale-102 active:scale-98"
            >
              <Mail size={19} />
              Email Enquiry
            </a>
          </div>
        </div>

        {/* ── Contact Details & Head Office Card ── */}
        <div className="mt-12 sm:mt-16 bg-ivory rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-forest/10 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Head Office Address */}
            <div className="md:col-span-6 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest mb-3">
                <Building size={16} className="text-forest" />
                <span>Head Office</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark mb-3">
                Paradiese Sundry Crunchy
              </h3>

              <div className="flex items-start gap-3 text-sm text-dark/85 leading-relaxed mb-4">
                <MapPin size={20} className="text-leaf shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-dark">{brandInfo.headOffice.line1}</p>
                  <p>{brandInfo.headOffice.line2}</p>
                  <p className="font-medium text-forest">{brandInfo.headOffice.cityStateZip}</p>
                </div>
              </div>

              <a
                href={brandInfo.headOffice.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest hover:text-forest-deep transition-colors self-start underline underline-offset-4"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Right: Direct Reach Channels */}
            <div className="md:col-span-6 md:border-l md:border-forest/10 md:pl-8 flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Direct Contact
              </span>

              {/* Email */}
              <a
                href={emailHref}
                className="group flex items-start gap-3 p-3.5 rounded-xl bg-cream/50 hover:bg-cream border border-forest/5 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] uppercase tracking-wider text-muted font-medium block">Email Us</span>
                  <span className="text-xs sm:text-[13px] md:text-sm font-semibold text-dark group-hover:text-forest transition-colors break-words">
                    {brandInfo.email}
                  </span>
                </div>
              </a>

              {/* WhatsApp & Call */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-3 rounded-xl bg-cream/50 hover:bg-cream border border-forest/5 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-muted font-medium block">WhatsApp & Phone</span>
                  <span className="text-xs sm:text-sm font-semibold text-dark group-hover:text-forest transition-colors">
                    {brandInfo.phone}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Inquiry Scope Box */}
          <div className="mt-8 pt-8 border-t border-forest/10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-muted">
              <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5">
                <strong className="block text-dark font-semibold mb-0.5">Bulk Supplies</strong>
                Hotels, restaurants, cloud kitchens & caterers
              </div>
              <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5">
                <strong className="block text-dark font-semibold mb-0.5">Retail Distribution</strong>
                Supermarkets, organic stores & spice dealers
              </div>
              <div className="bg-cream/40 rounded-xl p-3.5 border border-forest/5">
                <strong className="block text-dark font-semibold mb-0.5">Private Labelling</strong>
                Custom pack sizes from 100g to 1kg
              </div>
            </div>

            <p className="text-xs text-muted/80 text-center mt-6">
              Official Website:{' '}
              <a
                href={`https://${brandInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-forest underline hover:text-forest-deep transition-colors"
              >
                {brandInfo.website}
              </a>{' '}
              • Brand: PARADIESE SUNDRY CRUNCHY
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
