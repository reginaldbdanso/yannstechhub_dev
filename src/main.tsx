import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { AppProvider } from './context/AppContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import { ReviewProvider } from './context/ReviewContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
    <ProductProvider>
      <ReviewProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </ReviewProvider>
    </ProductProvider>
    </AppProvider>
  </React.StrictMode>,
)