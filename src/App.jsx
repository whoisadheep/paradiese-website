import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitsStrip from './components/BenefitsStrip';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import BrandStory from './components/BrandStory';
import QualitySection from './components/QualitySection';
import CulinarySection from './components/CulinarySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        infinite: false,
      }}
    >
      <div className="min-h-screen bg-ivory">
        <LoadingScreen />
        <Navbar />
        
        <main>
          <Hero />
          <BenefitsStrip />
          <ProductGrid onSelectProduct={setSelectedProduct} />
          <BrandStory />
          <QualitySection />
          <CulinarySection />
          <ContactSection />
        </main>
        
        <Footer />
        <BackToTop />

        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </ReactLenis>
  );
}
