import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onSelect }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(product);
    }
  };

  return (
    <div
      className="product-card group bg-ivory rounded-xl border border-cream/90 shadow-2xs hover:shadow-md cursor-pointer overflow-hidden flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-1 transition-all duration-300"
      role="button"
      tabIndex={0}
      onClick={() => onSelect(product)}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${product.name}`}
    >
      {/* ── Product Photographic Showcase Area ── */}
      <div className="overflow-hidden bg-[#EFEAD9] relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={`Paradiese ${product.name} packaging and natural ingredients`}
            className="product-image h-full w-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
            width={560}
            height={390}
          />
        </div>
      </div>

      {/* ── Content Area matching Reference Design ── */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between bg-ivory">
        <div>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-leaf">
            {product.category}
          </span>
          <h3 className="mt-0.5 sm:mt-1 font-serif text-sm sm:text-base lg:text-lg font-bold text-dark group-hover:text-forest transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-cream/80 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-forest group-hover:translate-x-0.5 transition-transform">
            Discover product
            <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" strokeWidth={2.2} />
          </span>
        </div>
      </div>
    </div>
  );
}
