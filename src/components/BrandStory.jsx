import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';

export default function BrandStory() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="bg-cream/40 overflow-hidden">
      {/* ── Banner matching Reference Screenshot ── */}
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-cream/80 border border-cream rounded-2xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left: Plate of Dehydrated Fruits */}
            <div className="lg:col-span-5 xl:col-span-4 relative overflow-hidden h-48 sm:h-56 lg:h-64">
              <img
                src="/images/products/dehydrated-fruits.webp"
                alt="Paradiese natural dehydrated fruits and ingredients"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-104"
                loading="lazy"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream/80 hidden lg:block" />
            </div>

            {/* Right: Editorial Typography */}
            <div className="lg:col-span-7 xl:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <span className="uppercase text-[11px] font-semibold tracking-[0.2em] text-leaf mb-2">
                Natural Goodness
              </span>

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-dark leading-tight">
                    From everyday recipes
                    <br />
                    to new{' '}
                    <em className="text-forest font-serif italic font-medium">
                      favourites
                    </em>
                    <span className="text-gold">.</span>
                  </h2>
                </div>

                {/* Vertical Divider & Paragraph */}
                <div className="lg:border-l lg:border-forest/20 lg:pl-8 max-w-lg">
                  <p className="text-dark/80 text-sm sm:text-base leading-relaxed">
                    Our dehydrated ingredients add real flavour, rich colour and natural aroma to your meals, making everyday cooking more exciting.
                  </p>
                  <a
                    href="#quality"
                    onClick={(e) => handleScroll(e, '#quality')}
                    className="inline-flex items-center gap-1.5 text-forest font-semibold text-xs sm:text-sm underline underline-offset-4 decoration-forest/40 hover:decoration-forest transition-colors mt-3"
                  >
                    See how to use our ingredients
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand Philosophy Two-Column Section ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="uppercase text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-leaf mb-2.5 sm:mb-3 block">
            Our Philosophy
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-4 sm:mb-6">
            Good food begins with good ingredients.
          </h3>
          <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            At Paradiese, we believe that thoughtful ingredients can make everyday cooking more enjoyable. Our range of dehydrated powders brings convenient flavour and versatility to kitchens, recipes, and food businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            <div className="bg-ivory rounded-xl p-4 border border-cream flex items-start gap-3 shadow-2xs">
              <Sparkles size={20} className="text-leaf shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-dark text-sm">Pure Natural Flavour</h4>
                <p className="text-xs text-muted mt-0.5">Retains natural essential oils, color and taste without preservatives.</p>
              </div>
            </div>
            <div className="bg-ivory rounded-xl p-4 border border-cream flex items-start gap-3 shadow-2xs">
              <HeartHandshake size={20} className="text-leaf shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-dark text-sm">Thoughtfully Sourced</h4>
                <p className="text-xs text-muted mt-0.5">Farm-fresh produce carefully dehydrated for everyday kitchen convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
