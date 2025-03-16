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
  const [sortOption, setSortOption] = useState<string>('recommended');
  const [products, setProducts] = useState<Product[]>([
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
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Initialize sortedProducts with products when component mounts
    setSortedProducts([...products]);
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

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    if (products.length === 0) return;

    const sortProducts = () => {
      const productsCopy = [...products];

      switch (sortOption) {
        case 'bestSellers':
          return productsCopy.sort((a, b) => b.reviews - a.reviews);
        case 'lowPrice':
          return productsCopy.sort((a, b) => a.price - b.price);
        case 'highPrice':
          return productsCopy.sort((a, b) => b.price - a.price);
        case 'reviews':
          return productsCopy.sort((a, b) => b.rating - a.rating);
        case 'recommended':
        default:
          return productsCopy.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews);
      }
    };

    setSortedProducts(sortProducts());
  }, [sortOption, products]);

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
            <select 
              className="sort-Select" 
              id="sortSelect" 
              aria-label="Sort products"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="recommended">Recommended</option>
              <option value="bestSellers">Best Sellers</option>
              <option value="lowPrice">Low Price</option>
              <option value="highPrice">High Price</option>
              <option value="reviews">Reviews</option>
            </select>
          </div>
        </div>

        <div className="divider"></div>

        <div className="products-grid">
          {sortedProducts.map((product) => (
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
