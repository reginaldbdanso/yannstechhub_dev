// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header/Header'; // Import the Header component
import Index from './Index/Index';

// Define the App component
function App() {
  return (
    <>
    <Router>
        <Header />
        
      <Index/>
    </Router>
    
    </>
  );
}

// Export the App component
export default App;