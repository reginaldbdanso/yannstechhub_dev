// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header'; // Import the Header component
import Index from './Index/Index';
import DailyDeals from './Daily Deals/daily-deals';
import BundleDeals from './Bundle Deals/bundleDeals';
import Shop from './Shop/shop';

import Cart from './Cart/cart';
import Footer from './Footer/Footer';

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