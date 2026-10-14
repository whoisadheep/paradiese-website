import { Package } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ onSelectProduct }) {
  return (
    <section id="products" className="py-14 sm:py-18 md:py-20 bg-ivory">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* ── Section Header matching Reference Image ── */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark tracking-tight leading-tight">
              Our pantry essentials
            </h2>
            <p className="mt-1 text-sm sm:text-base text-muted">
              Simple ingredients. Endless possibilities.
            </p>
          </div>

          {/* ── Pack Sizes Pill Badge matching Reference ── */}
          <div className="flex items-center gap-2 rounded-full border border-forest/15 bg-cream/70 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs md:text-sm text-dark/85 self-start md:self-auto shadow-2xs max-w-full">
            <Package size={14} strokeWidth={1.8} className="text-forest shrink-0" />
            <span className="font-medium truncate sm:whitespace-normal">
              Available Pack Sizes: <span className="font-semibold text-forest">100 g • 200 g • 500 g • 1 kg</span>
            </span>
          </div>
        </div>

        {/* ── 6-Card Single Row on Desktop matching Reference Screenshot ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4 lg:gap-4.5">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                onSelect={onSelectProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
