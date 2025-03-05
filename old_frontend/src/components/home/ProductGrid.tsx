import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProductGrid = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { 
      name: 'Smart Watch', 
      price: 50.00, 
      rating: 5.0, 
      reviews: 58, 
      imageUrl: '/imgs/Watch 1.png', 
      badge: '2 FOR USD 80'
    },
    // Add more products...
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  return (
    <section className="w-full">
      <h2 className="w-1/2 mt-20 font-bold text-2xl font-sans">
        On Sale. <span className="text-[#bbbbbb]">Your favorite gadgets, delivered right to your doorstep in no time.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        <div className="rounded-lg bg-[#0055b6] flex flex-col">
          <div className="flex w-full flex-col text-white p-10 rounded-lg whitespace-nowrap font-bold text-3xl leading-9">
            <p>Trend<br />Products</p>
            <div className="bg-white rounded-full flex flex-col self-end items-center justify-center mr-[50px] mt-[119px] mb-9 w-[52px] h-[52px]">
              <img src="/imgs/Vector.png" alt="" className="aspect-square object-contain w-[15px] my-0.5" />
            </div>
          </div>
        </div>

        {products.map((product, index) => (
          <article 
            key={index} 
            className="rounded-lg bg-white p-4 border border-gray-200 flex flex-col cursor-pointer" 
            onClick={() => navigate(`/product/${index + 1}`, { state: { product } })}
          >
            <div className="relative rounded-lg aspect-[1.06] w-full cursor-pointer">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded-lg" />
              <button className="absolute top-3.5 left-3.5 w-5 aspect-square cursor-pointer">
                <Heart className="w-full h-full" />
              </button>
              {product.badge && (
                <span className="absolute top-2.5 right-3.5 rounded-[20px] bg-[#ffc107] px-5.5 py-1.5 font-bold text-xs text-black">
                  {product.badge}
                </span>
              )}
            </div>
            <h2 className="text-black mt-7 font-bold text-sm">{product.name}</h2>
            <div className="flex mt-2 justify-between items-start">
              <div className="flex flex-col">
                <div className="flex gap-2.5 text-xs text-[#a5a5a5] items-center">
                  <img src="/imgs/star 1.png" className="w-4 aspect-square" />
                  <span>{product.rating} ({product.reviews} reviews)</span>
                </div>
                <span className="text-black text-xl font-bold mt-2 font-inter">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="bg-black rounded-full p-1.5 cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6 text-white" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};