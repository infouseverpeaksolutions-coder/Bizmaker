import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Platforms from './pages/Platforms';
import AmazonPlatform from './pages/AmazonPlatform';
import FlipkartPlatform from './pages/FlipkartPlatform';
import MeeshoPlatform from './pages/MeeshoPlatform';
import ShopifyPlatform from './pages/ShopifyPlatform';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Resources from './pages/Resources';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#041317] text-[#C7D2D9]">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/platforms/amazon" element={<AmazonPlatform />} />
          <Route path="/platforms/flipkart" element={<FlipkartPlatform />} />
          <Route path="/platforms/meesho" element={<MeeshoPlatform />} />
          <Route path="/platforms/shopsy" element={<ShopifyPlatform />} />
          <Route path="/platforms/ebay" element={<ShopifyPlatform />} />
          <Route path="/platforms/etsy" element={<ShopifyPlatform />} />
          <Route path="/platforms/shopzee" element={<ShopifyPlatform />} />
          <Route path="/platforms/shopify" element={<ShopifyPlatform />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
