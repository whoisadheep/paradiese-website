import { Leaf, FlaskConical, Soup } from 'lucide-react';

const benefits = [
  {
    Icon: Leaf,
    title: 'Carefully Dehydrated',
    description: 'Locks in natural flavour and aroma',
  },
  {
    Icon: FlaskConical,
    title: 'No Added Preservatives',
    description: 'Just pure, natural ingredients',
  },
  {
    Icon: Soup,
    title: 'Made for Everyday Cooking',
    description: 'Perfect for your favourite recipes',
  },
];

export default function BenefitsStrip() {
  return (
    <section className="bg-ivory border-y border-cream/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 sm:py-7 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-cream">
          {benefits.map(({ Icon, title, description }, index) => (
            <div
              key={title}
              className={`flex items-center gap-3 sm:gap-4.5 pt-3 sm:pt-0 ${
                index === 0 ? 'pt-0 sm:pr-6 md:pr-8' : index === 1 ? 'sm:px-6 md:px-8' : 'sm:pl-6 md:pl-8'
              }`}
            >
              {/* Circular Icon Badge matching reference design */}
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-forest/25 bg-cream/40 flex items-center justify-center shrink-0 text-forest shadow-xs">
                <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-sm sm:text-base leading-snug">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-snug mt-0.5">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
