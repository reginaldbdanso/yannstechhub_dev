import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from '../styles/components/ProductCard.module.css';

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
    <article className={`${styles.card} ${noBorder ? styles.noBorder : ''}`}>
      <Link 
        to={`/product/${id}`} 
        state={{ product: { id, image, title, rating, reviews, price, badge } }}
      >
        <div className={styles.imageContainer}>
          <img 
            src={image} 
            alt={title} 
            className={styles.productImage} 
          />
          <img 
            src="/imgs/favorie 1.png" 
            alt="Add to wishlist" 
            className={styles.wishlistIcon} 
          />
          {badge && (
            <span className={styles.productBadge}>
              {typeof badge === 'string' ? badge : badge.text}
            </span>
          )}
        </div>
      </Link>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.details}>
        <div className={styles.ratingPrice}>
          <div className={styles.rating}>
            <img 
              src="/imgs/star 1.png" 
              alt="Rating" 
              className={styles.ratingIcon} 
            />
            {rating} ({reviews} reviews)
          </div>
          <span className={styles.price}>${price.toFixed(2)}</span>
        </div>
        <button 
          className={styles.cartButton} 
          onClick={handleAddToCart}
        >
          <img 
            src="/imgs/Buy.png" 
            alt="Add to cart" 
            className={styles.cartIcon} 
          />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;