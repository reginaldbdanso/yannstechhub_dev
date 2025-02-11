import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

export const Shop = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('featured');
  const [products] = useState<Product[]>([{
    id: 1,
    title: "Smart Watch",
    price: 50.00,
    rating: 5.0,
    image: "/src/assets/Watch 1.png",
    isFavorite: false,
    reviews: 58,
    badge: "2 FOR USD 80"
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 80.00,
    rating: 4.5,
    image: "/src/assets/Rectangle 62.png",
    isFavorite: false,
    reviews: 45
  },
  {
    id: 3,
    title: "Smartphone",
    price: 299.99,
    rating: 4.7,
    image: "/src/assets/Rectangle 62 (9).png",
    isFavorite: false,
    reviews: 120
  }]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleToggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation();
    const updatedProducts = products.map(p => 
      p.id === productId ? { ...p, isFavorite: !p.isFavorite } : p
    );
    // You might want to save favorites to localStorage or backend here
  };

  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [conditions, setConditions] = useState({
    new: false,
    used: false,
    refurbished: false
  });

  const categories = [
    'Phones & Tablets',
    'Laptops & Computers',
    'Accessories',
    'Gaming',
    'Cameras',
    'TV & Audio',
    'Wearables',
    'Smart Home'
  ];

  const handleConditionChange = (condition: string) => {
    setConditions(prev => ({
      ...prev,
      [condition]: !prev[condition as keyof typeof prev]
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
     

      <div className="main-content bg-[#eef2f4] flex w-full flex-col items-center py-[21px] pb-[179px]">
        <div className="divider-top self-stretch min-h-0 mt-[100px] w-[99.9%] border border-[#d5d5d5]"></div>
        
        {/* Breadcrumb and Sort Section */}
        <div className="breadcrumb-sort flex w-full max-w-[70%] gap-0.5 flex-wrap justify-between mt-2.5">
          <div className="breadcrumb self-start flex gap-3 text-black text-[15px] font-['Open_Sans']">
            <Link to="/" className="breadcrumb-item">Home</Link>
            <span className="breadcrumb-item y">Shop</span>
          </div>
          
          <div className="sort-container flex gap-1.5">
            <span className="sort-label text-black my-auto font-medium text-[15px] font-['Open_Sans']">Sort by:</span>
            <div className="sort-Select">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="main-grid w-full max-w-[80%] my-6 -mb-6">
          <div className="grid-container flex items-start justify-start">
            <aside className="sidebar flex flex-col w-[40%] ml-0">
              <div className="sidebar-content flex gap-8 flex-col mx-[5%]">
                <div className="categories-section rounded-[20px] bg-white flex flex-col items-start text-black p-4 pb-10 font-medium text-[15px] font-['Open_Sans']">
                  <h2 className="categories-title font-bold mb-4">Categories</h2>
                  <div className="category-divider border-b border-gray-200 w-full mb-4"></div>
                  <nav>
                    <ul className="space-y-3">
                      <li><a href="#" className="category-item hover:text-blue-600">Phones</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Computer</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Accessories</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Laptops</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Monitors</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Network</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">PC Games</a></li>
                      <li><a href="#" className="category-item hover:text-blue-600">Fashion</a></li>
                    </ul>
                  </nav>
                </div>
                
                <div className="price-section rounded-[20px] bg-white flex flex-col items-start text-black px-[30px] py-[18px] pb-10 font-medium text-[15px] font-['Open_Sans']">
                  <h3 className="filter-title font-bold mb-4">Price Range</h3>
                  <div className="price-range-container flex gap-4 w-full mb-6">
                    <input
                      type="number"
                      placeholder="100"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                      className="price-range w-full p-2 border border-gray-200 rounded-md"
                    />
                    <input
                      type="number"
                      placeholder="900"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                      className="price-range-high w-full p-2 border border-gray-200 rounded-md"
                    />
                  </div>

                  <h3 className="brand-name font-bold mb-4">Brand Name</h3>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="brand-select w-full p-2 mb-6 border border-gray-200 rounded-md"
                  >
                    <option value="all">All Brands</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="sony">Sony</option>
                    <option value="lg">LG</option>
                  </select>

                  <h3 className="sort-title font-bold mb-4">Sort by</h3>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="sort-options w-full p-2 mb-6 border border-gray-200 rounded-md"
                  >
                    <option value="featured">Featured</option>
                    <option value="reviews">Reviews</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>

                  <h3 className="conditions-title font-bold mb-4">Conditions</h3>
                  <div className="flex flex-col gap-3">
                    <label className="condition-option flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={conditions.new}
                        onChange={() => handleConditionChange('new')}
                        className="checkbox w-4 h-4"
                      />
                      <span className="condition-label">New</span>
                    </label>
                    <label className="condition-option flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={conditions.used}
                        onChange={() => handleConditionChange('used')}
                        className="checkbox w-4 h-4"
                      />
                      <span className="condition-label">Second</span>
                    </label>
                    <label className="condition-option flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={conditions.refurbished}
                        onChange={() => handleConditionChange('refurbished')}
                        className="checkbox w-4 h-4"
                      />
                      <span className="condition-label">Refurbish</span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>
            
            <div className="flex-1 pl-8">
              <div className="products-grid">
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => handleProductClick(product)}
                  >
                    <div className="product-image-container">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="product-image"
                      />
                      <button 
                        className="favorite-icon"
                        onClick={(e) => handleToggleFavorite(e, product.id)}
                      >
                        <img
                          src="/src/assets/favorie 1.png"
                          alt="Favorite"
                          className="w-full h-full"
                        />
                      </button>
                      {product.badge && (
                        <div className="product-badge">
                          {product.badge}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="product-title">{product.title}</h3>
                    
                    <div className="product-details">
                      <div className="rating-price">
                        <div className="rating">
                          <img src="/src/assets/star 1.png" alt="Rating" className="rating-icon" />
                          <span>{product.rating} ({product.reviews} reviews)</span>
                        </div>
                        <span className="price">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <button 
                        className="cart-button"
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <img src="/src/assets/Buy - 6.png" alt="Add to cart" className="cart-icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      // {/* Footer Section */}
      // <footer className="footer bg-white py-10">
      //   <div className="footer-content max-w-[70%] mx-auto">
      //     <div className="footer-sections grid grid-cols-1 md:grid-cols-3 gap-8">
      //       <div className="footer-logo-social">
      //         <img src="/src/assets/Logo.png" alt="YannsTechHub Footer Logo" className="w-[132px] mb-6" />
      //         <div className="social-icons flex gap-4">
      //           <a href="#" aria-label="Facebook" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/Facebook.png" alt="" className="w-6 h-6" />
      //           </a>
      //           <a href="#" aria-label="Twitter" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/Twitter.png" alt="" className="w-6 h-6" />
      //           </a>
      //           <a href="#" aria-label="Instagram" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/Instagram.png" alt="" className="w-6 h-6" />
      //           </a>
      //           <a href="#" aria-label="LinkedIn" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/LinkedIn.png" alt="" className="w-6 h-6" />
      //           </a>
      //           <a href="#" aria-label="YouTube" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/YouTube.png" alt="" className="w-6 h-6" />
      //           </a>
      //           <a href="#" aria-label="TikTok" className="social-icon hover:opacity-80 transition-opacity">
      //             <img src="/src/assets/TikTok.png" alt="" className="w-6 h-6" />
      //           </a>
      //         </div>
      //       </div>

      //       <div className="footer-links flex flex-col gap-4">
      //         <h3 className="footer-heading font-bold text-lg">Company</h3>
      //         <Link to="/about" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
      //         <Link to="/careers" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">Careers</Link>
      //         <Link to="/blog" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
      //         <Link to="/pricing" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
      //       </div>

      //       <div className="footer-links flex flex-col gap-4">
      //         <h3 className="footer-heading font-bold text-lg">Help</h3>
      //         <Link to="/legal" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">Legal</Link>
      //         <Link to="/faqs" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">FAQs</Link>
      //         <Link to="/contact" className="footer-link text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
      //       </div>
      //     </div>
      //   </div>
      //   <div className="copyright text-center text-gray-600 mt-8 text-sm">
      //     @yannstechhub2025
      //   </div>
      // </footer>
    // </div>

  );
};