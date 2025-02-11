import { Link } from 'react-router-dom';

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

interface ProductCardProps {
  product: Product;
  onAddToCart: (e: React.MouseEvent, product: Product) => void;
  onToggleFavorite: (e: React.MouseEvent, productId: number) => void;
}

export const ProductCard = ({ product, onAddToCart, onToggleFavorite }: ProductCardProps) => {
  return (
    <div 
      key={product.id} 
      className="bg-white rounded-[10px] p-4 pb-6 border border-[#e4e4e4] flex flex-col"
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
          onClick={(e) => onToggleFavorite(e, product.id)}
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
            <span>{product.rating} ({product.reviews} reviews)</span>
          </div>
          <span className="text-black text-xl font-bold font-['Inter'] mt-2">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <button 
          className="bg-black rounded-full p-2 cursor-pointer hover:bg-gray-800 transition-colors"
          onClick={(e) => onAddToCart(e, product)}
        >
          <img src="/src/assets/Buy - 6.png" alt="Add to cart" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};