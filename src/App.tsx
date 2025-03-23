import type React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { createGlobalStyle } from "styled-components"
import { CartProvider } from "./context/CartContext"
import DailyDeals from "./components/DailyDeals"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import Index from "./components/Index"
import BundleDeals from "./components/BundleDeals"
import Support from "./components/Support"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import About from "./components/About"
import Careers from "./components/Careers"
import Legal from "./components/Legal"
import FAQs from "./components/FAQs"
import Contact from "./components/Contact"
import SecureCheckout from "./components/SecureCheckout"
import ShippingDetails from "./components/ShippingDetails"
import ShippingAddress from "./components/ShippingAddress"
import PaymentMobile from "./components/PaymentMobile"
import PaymentApproval from "./components/PaymentApproval"
import ProductView from "./components/ProductView"
import CategoryProducts from "./components/CategoryProducts"


import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/daily-deals" element={<DailyDeals />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/bundle-deals" element={<BundleDeals />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-account" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<SecureCheckout />} />
          <Route path="/shipping-address" element={<ShippingAddress />} />
          <Route path="/shipping-details" element={<ShippingDetails />} />
          <Route path="/payment-mobile" element={<PaymentMobile />} />
          <Route path="/payment-approval" element={<PaymentApproval />} />
          <Route path="/product/:id" element={<ProductView />} />
          {/* Ensure this route is correctly defined */}
          <Route path="/category/:category" element={<CategoryProducts />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}
export default App

