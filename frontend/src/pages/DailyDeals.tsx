
// nuation of the html
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

export const DailyDeals = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Product[]>([]);
  const [products] = useState<Product[]>([
    {
      id: 1,
      title: "Smart Watch",
      price: 50.00,
      rating: 5.0,
      image: "/src/assets/Watch 1.png",
      isFavorite: false,
      reviews: 58
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
    },
    {
      id: 4,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 45
    },
    {
      id: 5,
      title: "Smartphone",
      price: 299.99,
      rating: 4.7,
      image: "/src/assets/Rectangle 62 (9).png",
      isFavorite: false,
      reviews: 120
    },
    {
      id: 6,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 45
    },
    {
      id: 7,
      title: "Smartphone",
      price: 299.99,
      rating: 4.7,
      image: "/src/assets/Rectangle 62 (9).png",
      isFavorite: false,
      reviews: 120
    },
    {
      id: 8,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 45
    },
    {
      id: 9,
      title: "Smartphone",
      price: 299.99,
      rating: 4.7,
      image: "/src/assets/Rectangle 62 (9).png",
      isFavorite: false,
      reviews: 120
    },
    {
      id: 10,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 45
    },
    {
      id: 11,
      title: "Smartphone",
      price: 299.99,
      rating: 4.7,
      image: "/src/assets/Rectangle 62 (9).png",
      isFavorite: false,
      reviews: 120
    },
    {
      id: 12,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/src/assets/Rectangle 62.png",
      isFavorite: false,
      reviews: 45
    }
  ]);

  const [sortOption, setSortOption] = useState('featured');

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

  return (
    <div className="bg-[#eef2f4] flex flex-col min-h-screen">
      <div className="main-content flex-grow">
        {/* Breadcrumb and Sort Section */}
        <div className="w-full max-w-[70%] mx-auto flex justify-between items-center mt-[100px] flex-wrap gap-2 px-5">
          <div className="breadcrumb flex gap-3 text-black text-[15px] font-['Open_Sans']">
            <Link to="/" className="bg-white rounded-[10px] px-[14px] py-1 hover:bg-gray-50">Home</Link>
            <div className="bg-white rounded-[10px] px-[14px] py-1 font-bold">Daily Deals</div>
          </div>
          
          <div className="sort-container flex gap-1.5 items-center">
            <span className="text-black font-medium text-[15px] font-['Open_Sans']">Sort by:</span>
            <div className="bg-white rounded-[10px] border border-[#e4e4e4] px-[50px] py-1.5">
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border-none cursor-pointer outline-none w-full"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 w-full max-w-[70%] mx-auto px-5 mb-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[10px] p-4 pb-6 border border-[#e4e4e4] flex flex-col"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative rounded-[10px] aspect-[1.06] w-full">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover rounded-[10px]"
                />
                <button 
                  className="absolute top-3.5 left-3.5 w-[19px] aspect-square cursor-pointer"
                  onClick={(e) => handleToggleFavorite(e, product.id)}
                >
                  <img
                    src="/src/assets/favorie 1.png"
                    alt="Favorite"
                    className="w-full h-full"
                  />
                </button>
                {product.badge && (
                  <div className="absolute top-2.5 right-3.5 rounded-[20px] bg-[#ffc107] px-5.5 py-1.5 font-bold text-xs">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <h3 className="text-black mt-7 font-bold text-sm font-['Open_Sans']">{product.title}</h3>
              
              <div className="flex justify-between items-start mt-2">
                <div className="flex flex-col">
                  <div className="flex gap-2.5 items-center text-xs text-[#a5a5a5]">
                    <img src="/src/assets/star 1.png" alt="Rating" className="w-4 aspect-square" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-black text-xl font-bold font-['Inter'] mt-2">
                    ${product.price}
                  </span>
                </div>
                <button 
                  className="bg-black rounded-full p-2 cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  <img src="/src/assets/Buy - 6.png" alt="Add to cart" className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
