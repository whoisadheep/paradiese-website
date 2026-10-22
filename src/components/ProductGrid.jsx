import { useState, useMemo } from 'react';
import { Package, Sparkles } from 'lucide-react';
import { products, productCategories } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeTab === 'all') return products;
    return products.filter((p) => p.filterCategory === activeTab);
  }, [activeTab]);

  const counts = useMemo(() => {
    return {
      all: products.length,
      vegetable: products.filter((p) => p.filterCategory === 'vegetable').length,
      spice: products.filter((p) => p.filterCategory === 'spice').length,
      superfood: products.filter((p) => p.filterCategory === 'superfood').length,
    };
  }, []);

  return (
    <section id="products" className="py-14 sm:py-18 md:py-24 bg-ivory">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* ── Section Header matching Reference Image ── */}
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-leaf mb-2">
              <Sparkles size={14} />
              <span>100% Pure & Dehydrated</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-dark tracking-tight leading-tight">
              Our pantry essentials
            </h2>
            <p className="mt-1 text-sm sm:text-base text-muted">
              Simple ingredients. Endless possibilities. 15 premium kitchen essentials.
            </p>
          </div>

          {/* ── Pack Sizes Pill Badge matching Reference ── */}
          <div className="flex items-center gap-2 rounded-full border border-forest/15 bg-cream/70 px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs md:text-sm text-dark/85 self-start md:self-auto shadow-2xs max-w-full">
            <Package size={15} strokeWidth={1.8} className="text-forest shrink-0" />
            <span className="font-medium truncate sm:whitespace-normal">
              Available Pack Sizes: <span className="font-semibold text-forest">100 g • 200 g • 500 g • 1 kg</span>
            </span>
          </div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="mb-8 flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {productCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            const count = counts[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-forest text-cream shadow-xs font-semibold'
                    : 'bg-cream/60 hover:bg-cream text-dark/75 hover:text-dark border border-forest/10'
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-cream/20 text-cream' : 'bg-dark/5 text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Responsive Product Cards Grid (5-column on desktop, 3 on tablet, 2 on mobile) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {filteredProducts.map((product) => (
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
