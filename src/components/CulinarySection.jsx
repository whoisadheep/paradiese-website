import { ArrowRight, Utensils } from 'lucide-react';
import { culinaryApplications } from '../data/products';

export default function CulinarySection() {
  return (
    <section id="culinary" className="bg-ivory py-14 sm:py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-12 md:mb-16 gap-5 sm:gap-6">
          <div className="max-w-xl">
            <span className="uppercase text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-leaf block mb-2.5 sm:mb-3">
              Culinary Inspiration
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark tracking-tight leading-tight">
              Made for your favourite recipes.
            </h2>
            <p className="text-muted mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              From comforting homestyle curries to instant marinades and snacks, explore how dehydrated powders elevate everyday kitchens.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-forest bg-cream px-3.5 sm:px-4 py-2 rounded-full self-start md:self-auto border border-cream">
            <Utensils size={14} className="text-leaf" />
            <span>Versatile Across All Cuisines</span>
          </div>
        </div>

        {/* 6 Culinary Cards with Real Dish Photography */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
          {culinaryApplications.map((item) => (
            <div
              key={item.name}
              className="group bg-cream/70 hover:bg-cream border border-forest/8 hover:border-forest/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-forest/5 flex flex-col justify-between"
            >
              <div>
                {/* Dish Picture & Badge Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-20 h-20 rounded-full bg-ivory p-1.5 shadow-sm border border-cream flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      width={80}
                      height={80}
                    />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-forest/70 bg-ivory border border-forest/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-dark group-hover:text-forest transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted text-sm sm:text-base mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest/8 flex items-center justify-between text-xs font-medium text-leaf group-hover:text-forest transition-colors">
                <span>Recommended powders</span>
                <span className="text-dark/70 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Explore <ArrowRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
