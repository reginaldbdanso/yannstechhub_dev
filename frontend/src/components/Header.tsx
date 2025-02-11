import { Link } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[70%] rounded-[20px] bg-[#f2f2f2] flex gap-5 justify-between px-[68px] py-[21px] shadow-lg z-50">
      <Link to="/">
        <img src="/src/assets/Logo.png" alt="YannsTechHub Logo" className="w-[132px] aspect-[4.13] object-contain" />
      </Link>
      
      <nav className="flex items-center gap-[30px] text-black my-auto font-medium text-sm">
        <Link to="/daily-deals" className="my-auto hover:text-blue-600">Daily deals</Link>
        <Link to="/shop" className="my-auto hover:text-blue-600">Shop</Link>
        <Link to="/bundle-deals" className="my-auto hover:text-blue-600">Bundle Deals</Link>
        <Link to="/support" className="my-auto hover:text-blue-600">Support</Link>
      </nav>
      
      <div className="flex gap-[30px] mt-1">
        <button aria-label="Search" className="cursor-pointer">
          <Search className="w-6 h-6" />
        </button>
        <button aria-label="User Account" className="cursor-pointer">
          <User className="w-6 h-6" />
        </button>
        <Link to="/cart" aria-label="Shopping Cart">
          <ShoppingCart className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};