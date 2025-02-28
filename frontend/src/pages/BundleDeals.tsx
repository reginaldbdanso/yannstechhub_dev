import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import '../styles/BundleDeals.css';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  isFavorite: boolean;
  reviews: number;
  badge?: string;
}

const BundleDeals: React.FC = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [products] = useState<Product[]>([
    {
      id: 1,
      title: "Smart Watch Bundle",
      price: 89.99,
      rating: 4.8,
      image: "/src/assets/Watch 1.png",
      isFavorite: false,
      reviews: 42,
      badge: "BUNDLE DEAL"
    },
    {
      id: 2,
      title: "Headphones + Case Bundle",
      price: 129.99,
      rating: 4.6,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 35,
      badge: "SAVE 20%"
    }
  ]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleToggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    // Handle favorite toggling logic here
  };

  return (
    <section className="bundle-deals-container">
      <div className="main-content">
        <div className="divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <span className="breadcrumb-item y">yannstechub</span>
            <span className="breadcrumb-item">/ Bundle deals</span>
          </div>
          <div className="sort-container">
            <label htmlFor="sortSelect" className="sort-label">Sort by</label>
            <select className="sort-Select" id="sortSelect" aria-label="Sort products">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BundleDeals;
