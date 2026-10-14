import { useState } from 'react';
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

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
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

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
