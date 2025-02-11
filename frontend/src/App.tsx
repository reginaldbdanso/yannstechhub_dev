import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { DailyDeals } from './pages/DailyDeals';
import BundleDeals from './pages/BundleDeals';
import { ProductDetails } from './pages/ProductDetails';
import './index.css';
import Cart from './pages/Cart';
import SecureCheckout from './pages/SecureCheckout';
import ShippingDetails from './pages/ShippingDetails';
import Support from './pages/Support';
import About from './pages/About';
import Careers from './pages/Careers';
import Legal from './pages/Legal';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/daily-deals" element={<DailyDeals />} />
          <Route path="/bundle-deals" element={<BundleDeals />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<SecureCheckout />} />
          <Route path="/shipping-details" element={<ShippingDetails />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;