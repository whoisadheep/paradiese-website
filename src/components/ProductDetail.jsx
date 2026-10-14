import { useEffect, useRef, useState } from 'react';
import { X, Package, ArrowRight, MessageCircle, Mail, Sparkles, Check } from 'lucide-react';
import { brandInfo } from '../data/products';

export default function ProductDetail({ product, onClose }) {
  const overlayRef = useRef(null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '100 g');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleEnquire = (method) => {
    const text = encodeURIComponent(
      `Hello Paradiese, I am interested in inquiring about ${product.name} (${selectedSize} pack).`
    );
    if (method === 'whatsapp') {
      window.open(`https://wa.me/${brandInfo.whatsapp}?text=${text}`, '_blank');
    } else {
      window.location.href = `mailto:${brandInfo.email}?subject=Enquiry for ${product.name}&body=${text}`;
    }
  };

  return (
    <div
      ref={overlayRef}
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="bg-ivory rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] sm:max-h-[92vh] overflow-y-auto shadow-2xl border border-cream flex flex-col relative animate-scale-up">
        {/* Sticky Close Button */}
        <div className="sticky top-0 z-20 flex justify-end p-4 bg-gradient-to-b from-ivory via-ivory/90 to-transparent pointer-events-none">
          <button
            onClick={onClose}
            className="pointer-events-auto w-10 h-10 rounded-full bg-cream/90 hover:bg-cream border border-forest/10 flex items-center justify-center text-dark/80 hover:text-dark transition-colors shadow-xs"
            aria-label="Close product view"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="px-4 sm:px-6 md:px-10 pb-8 sm:pb-10 -mt-2">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left: Product Imagery Card */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="bg-cream/60 rounded-2xl p-4 sm:p-5 border border-forest/10 w-full flex items-center justify-center overflow-hidden shadow-xs">
                <img
                  src={product.posterImage || product.image}
                  alt={`${product.name} — Paradiese Sundry Crunchy packaging`}
                  className="w-full max-h-[420px] object-contain rounded-xl drop-shadow-md"
                  width={400}
                  height={500}
                />
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                <Sparkles size={14} className="text-leaf" />
                <span>Original Paradiese packaging & product</span>
              </div>
            </div>

            {/* Right: Product Details & Size Selector */}
            <div className="md:col-span-7 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold tracking-[0.2em] text-leaf">
                  {product.category}
                </span>
                <span className="text-muted text-xs">•</span>
                <span className="text-xs text-gold font-medium">100% Natural</span>
              </div>

              <h2
                id="modal-product-title"
                className="font-serif text-3xl sm:text-4xl font-bold text-dark mt-2 tracking-tight"
              >
                {product.name}
              </h2>

              {product.tagline && (
                <p className="text-xs font-medium text-forest/80 tracking-wide mt-1 uppercase">
                  {product.tagline}
                </p>
              )}

              <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Available Packaging Sizes */}
              <div className="mt-7">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-dark/90 flex items-center gap-1.5">
                    <Package size={15} className="text-forest" />
                    Available Packaging Sizes
                  </span>
                  <span className="text-[11px] text-muted">Select size to enquire</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-1 text-center rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                          isSelected
                            ? 'bg-forest text-cream border-forest shadow-xs'
                            : 'bg-cream/60 text-dark/80 border-cream hover:bg-cream hover:border-forest/20'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Perfect For / Suggested Culinary Uses */}
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-dark/90 block mb-2.5">
                  Culinary Applications
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="bg-cream text-dark/75 rounded-lg px-3 py-1 text-xs font-medium border border-cream"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enquiry Action CTAs */}
              <div className="mt-8 pt-6 border-t border-cream flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => handleEnquire('whatsapp')}
                  className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full px-5 py-3 text-sm font-medium transition-colors shadow-xs"
                >
                  <MessageCircle size={17} />
                  WhatsApp Enquiry
                </button>

                <button
                  type="button"
                  onClick={() => handleEnquire('email')}
                  className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-deep text-cream rounded-full px-5 py-3 text-sm font-medium transition-colors shadow-xs"
                >
                  <Mail size={17} />
                  Email Enquiry
                </button>
              </div>

              <p className="text-[11px] text-muted text-center mt-3">
                Wholesale & retail enquiries welcome. Direct factory dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
