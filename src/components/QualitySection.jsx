import { Eye, Package, UtensilsCrossed, Info } from 'lucide-react';

const qualityPillars = [
  {
    icon: Eye,
    title: 'Consistent Quality',
    description:
      'Carefully processed for uniform colour, particle fineness, and authentic aroma across every single batch.',
  },
  {
    icon: Package,
    title: 'Convenient Pack Formats',
    description:
      'Available in 100g, 200g, 500g and 1kg standing barrier pouches designed for airtight pantry freshness.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Versatile Kitchen Applications',
    description:
      'From gravies and curries to dry rubs, marinades, and seasoning dusts — one clean ingredient, limitless dishes.',
  },
  {
    icon: Info,
    title: 'Transparent Labelling',
    description:
      'Zero hidden fillers or artificial colors. Clear net weight, storage instructions, and culinary pairing tips.',
  },
];

export default function QualitySection() {
  return (
    <section id="quality" className="bg-forest-deep text-cream py-14 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Subtle organic light accent in corner */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(201,154,59,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-14 md:mb-16">
          <span className="uppercase text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-gold block mb-2.5 sm:mb-3">
            Our Quality Standards
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight">
            Quality you can see.
            <br />
            Flavour you can bring home.
          </h2>
          <p className="text-cream/70 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Every spice and vegetable powder is thoughtfully processed from farm-fresh produce to retain natural pigments, aromatic oils, and authentic taste.
          </p>
        </div>

        {/* Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {qualityPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-forest/40 border border-forest-light/60 rounded-2xl p-5 sm:p-6 md:p-7 flex gap-4 sm:gap-5 transition-all duration-300 hover:bg-forest/60 hover:border-gold/30 hover:shadow-lg"
              >
                <div className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-forest-deep border border-gold/30 flex items-center justify-center text-gold shadow-xs">
                  <Icon size={20} className="sm:w-5 sm:h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-cream text-base sm:text-lg md:text-xl">
                    {pillar.title}
                  </h3>
                  <p className="text-cream/65 text-sm sm:text-base mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
