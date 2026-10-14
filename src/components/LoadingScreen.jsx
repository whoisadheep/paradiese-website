import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const CRITICAL_IMAGES = [
  '/images/brand-logo-hi-res.webp',
  '/images/hero-composition.webp',
  '/images/products/tomato-showcase.webp',
  '/images/products/ginger-showcase.webp',
  '/images/products/red-chilli-showcase.webp',
  '/images/products/onion-showcase.webp',
  '/images/products/garlic-showcase.webp',
  '/images/products/kashmiri-chilli-showcase.webp',
  '/images/products/dehydrated-fruits.webp',
];

export default function LoadingScreen({ onLoaded }) {
  const [fading, setFading] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    let loadedCount = 0;
    const total = CRITICAL_IMAGES.length;
    const startTime = Date.now();
    const MIN_DURATION = 900; // minimum display time in ms for smooth cinematic feel
    const MAX_TIMEOUT = 2500;  // safety ceiling so users on slow networks are never blocked

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DURATION - elapsed);

      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setFading(true);
          onLoaded?.();
          setTimeout(() => {
            setRemoved(true);
          }, 700);
        }, 150);
      }, remainingTime);
    };

    // Preload each critical image in parallel
    CRITICAL_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount += 1;
        const currentPercent = Math.round(15 + (loadedCount / total) * 85);
        setProgress((prev) => Math.max(prev, currentPercent));

        if (loadedCount >= total) {
          finishLoading();
        }
      };
      img.src = src;
    });

    // Safety fallback timeout
    const fallbackTimer = setTimeout(() => {
      finishLoading();
    }, MAX_TIMEOUT);

    return () => clearTimeout(fallbackTimer);
  }, [onLoaded]);

  if (removed) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        fading ? 'opacity-0 scale-[1.02] pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: '#092D1D',
        backgroundImage:
          'radial-gradient(circle at 50% 48%, rgba(201, 154, 59, 0.12) 0%, transparent 60%), radial-gradient(circle at 50% 100%, rgba(18, 63, 42, 0.8) 0%, transparent 70%)',
      }}
      aria-hidden={fading}
      role="status"
      aria-label="Loading Paradiese Natural Ingredients"
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Brand Mark Typography */}
        <div className="flex items-center gap-2 mb-3">
          <Leaf size={16} className="text-leaf animate-pulse" strokeWidth={2.2} />
          <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-gold/85 font-semibold">
            Pure Ingredients
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream tracking-[0.14em] uppercase mb-1">
          PARADIESE
        </h1>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-cream/60 font-sans mb-10">
          Sundry Crunchy
        </p>

        {/* ── Insp-Inspired 3-Dot Orbital Loader ── */}
        <div className="relative w-18 h-18 flex items-center justify-center mb-8">
          {/* Outer subtle glow ring */}
          <div className="absolute inset-0 rounded-full border border-gold/15 animate-ping opacity-25" />

          {/* Rotating 3-Dot Container directly matching inspo composition */}
          <div className="relative w-12 h-12 animate-tri-dot-rotate">
            {/* Dot 1: Top-left */}
            <span
              className="absolute top-1 left-2 w-3 h-3 rounded-full bg-gold shadow-xs shadow-gold/50 animate-dot-pulse-1"
              aria-hidden="true"
            />

            {/* Dot 2: Top-right */}
            <span
              className="absolute top-2 right-1 w-3 h-3 rounded-full bg-cream shadow-xs shadow-cream/40 animate-dot-pulse-2"
              aria-hidden="true"
            />

            {/* Dot 3: Bottom-center */}
            <span
              className="absolute bottom-1 left-4.5 w-3 h-3 rounded-full bg-leaf shadow-xs shadow-leaf/50 animate-dot-pulse-3"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="font-serif italic text-gold text-sm tracking-wide mb-6">
          “Taste Never Ends”
        </p>

        {/* Minimalist Progress Track */}
        <div className="w-36 sm:w-44 h-[2px] bg-cream/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-gold/60 via-gold to-leaf rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
