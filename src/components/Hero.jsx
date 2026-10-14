import { Leaf, ArrowRight } from 'lucide-react';

export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-cream/70 overflow-hidden pt-20 sm:pt-24 lg:pt-32 pb-10 sm:pb-14 lg:pb-20 border-b border-cream"
    >
      {/* Warm natural ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 75% 35%, rgba(201,154,59,0.1) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 15% 85%, rgba(120,147,75,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* ── Left: Editorial Typography & CTAs ── */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start z-10">
            {/* Eyebrow with gold accent line matching reference design */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
              <span className="text-forest text-[10px] sm:text-[11px] md:text-xs font-semibold font-sans tracking-[0.18em] sm:tracking-[0.22em] uppercase">
                Pure Ingredients. Real Flavour.
              </span>
              <span
                className="inline-block w-8 sm:w-12 md:w-16 h-[1.5px] bg-gold rounded-full"
                aria-hidden="true"
              />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-bold text-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] tracking-tight mb-4 sm:mb-6">
              A little closer
              <br />
              to{' '}
              <em className="text-forest font-serif italic font-medium">
                nature
              </em>
              <span className="inline-block ml-1 align-baseline" aria-hidden="true">
                <Leaf size={22} className="text-leaf inline -mt-1 sm:-mt-2 sm:w-7 sm:h-7" strokeWidth={1.8} />
              </span>
              <span className="text-gold">.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-muted text-[13px] sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mb-5 sm:mb-8">
              Thoughtfully dehydrated ingredients that bring the natural flavour,
              colour and aroma of real food to your everyday cooking.
            </p>

            {/* CTA Buttons matching reference design */}
            <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-5 w-full xs:w-auto">
              {/* Primary CTA */}
              <a
                href="#products"
                onClick={(e) => handleClick(e, '#products')}
                className="group inline-flex items-center justify-center gap-2.5 bg-forest text-cream rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold transition-all duration-300 hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/20 active:scale-[0.98]"
              >
                Explore Our Products
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#quality"
                onClick={(e) => handleClick(e, '#quality')}
                className="group inline-flex items-center justify-center gap-2 text-forest font-semibold text-sm border-b-2 border-forest/70 pb-0.5 transition-all duration-300 hover:border-forest hover:text-forest-deep"
              >
                Discover our process
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Reassurance pills */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-cream/90 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-dark/85">
                <span className="w-2 h-2 rounded-full bg-leaf inline-block" />
                100% Natural
              </span>
              <span>•</span>
              <span>No Preservatives</span>
              <span>•</span>
              <span className="font-medium text-forest">100g • 200g • 500g • 1kg</span>
            </div>
          </div>

          {/* ── Right: Scenic Hero Composition matching Reference ── */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center mt-2 lg:mt-0">
            <div className="relative w-full overflow-hidden group">
              <img
                src="/images/hero-composition.webp"
                alt="Paradiese Dehydrated Onion Powder — natural ingredients and packaging on rustic table with orchard backdrop"
                className="w-full h-auto max-h-[280px] sm:max-h-[360px] lg:max-h-none object-cover rounded-xl sm:rounded-2xl shadow-xl shadow-forest/5 transform transition-transform duration-700 ease-out group-hover:scale-101"
                width={836}
                height={360}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
