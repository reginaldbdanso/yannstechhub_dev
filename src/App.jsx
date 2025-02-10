// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'; 
import Index from './pages/Index/Index';
import DailyDeals from './pages/Daily Deals/daily-deals';
import BundleDeals from './pages/Bundle Deals/bundleDeals';
import Shop from './pages/Shop/shop';

import Cart from './pages/Cart/cart';
import Footer from './components/Footer/Footer';

// Define the App component
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/daily-deals' element={<DailyDeals />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/bundle_deals' element={<BundleDeals />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      
       

        <Footer/>
      </Router>
    </>
  );
}

// Export the App component
export default App;