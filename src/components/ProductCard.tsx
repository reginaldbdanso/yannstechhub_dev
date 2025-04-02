import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/components/ProductCard_module.css';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  badge?: string | {
    show: boolean;
    text: string;
  };
  noBorder?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  image, 
  title, 
  rating, 
  reviews, 
  price, 
  badge,
  noBorder = false
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      price
    });
  };

  return (
    <article className={`card ${noBorder ? noBorder : ''}`}>
      <Link 
        to={`/product/${id}`} 
        state={{ product: { id, image, title, rating, reviews, price, badge } }}
      >
        <div className="imageContainer">
          <img 
            src={image} 
            alt={title} 
            className="productImage" 
          />
          <img 
            src="/imgs/favorie 1.png" 
            alt="Add to wishlist" 
            className="wishlistIcon" 
          />
          {badge && (
            <span className="productBadge">
              {typeof badge === 'string' ? badge : badge.text}
            </span>
          )}
        </div>
      </Link>
      <h2 className="title">{title}</h2>
      <div className="details">
        <div className="ratingPrice">
          <div className="rating">
            <img 
              src="/imgs/star 1.png" 
              alt="Rating" 
              className="ratingIcon" 
            />
            {rating} ({reviews} reviews)
          </div>
          <span className="price">${price.toFixed(2)}</span>
        </div>
        <button 
          className="cartButton" 
          onClick={handleAddToCart}
        >
          <img 
            src="/imgs/Buy.png" 
            alt="Add to cart" 
            className="cartIcon" 
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;