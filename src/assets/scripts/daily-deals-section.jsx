import { useState, useEffect } from "react";

const products = [
  { name: "Smart Watch", price: 50.0, rating: 5.0, reviews: 58, imageUrl: "imgs/Watch 1.png" },
  { name: "Wireless Headphones", price: 80.0, rating: 4.5, reviews: 45, imageUrl: "imgs/Rectangle 62.png" },
  { name: "Smartphone", price: 299.99, rating: 4.7, reviews: 120, imageUrl: "imgs/Rectangle 62 (9).png" },{ 
            name: 'Wireless Headphones', 
            price: 80.00, 
            rating: 4.5, 
            reviews: 45, 
            imageUrl: 'imgs/Rectangle 62.png', 
        },
        { 
            name: 'Smartphone', 
            price: 299.99, 
            rating: 4.7, 
            reviews: 120, 
            imageUrl: 'imgs/Rectangle 62 (9).png', 
        }
        ,
        { 
            name: 'Wireless Headphones', 
            price: 80.00, 
            rating: 4.5, 
            reviews: 45, 
            imageUrl: 'imgs/Rectangle 62.png', 
        },
        { 
            name: 'Smartphone', 
            price: 299.99, 
            rating: 4.7, 
            reviews: 120, 
            imageUrl: 'imgs/Rectangle 62 (9).png', 
        }
        ,
        { 
            name: 'Wireless Headphones', 
            price: 80.00, 
            rating: 4.5, 
            reviews: 45, 
            imageUrl: 'imgs/Rectangle 62.png', 
        },
        { 
            name: 'Smartphone', 
            price: 299.99, 
            rating: 4.7, 
            reviews: 120, 
            imageUrl: 'imgs/Rectangle 62 (9).png', 
        }
        ,
        { 
            name: 'Wireless Headphones', 
            price: 80.00, 
            rating: 4.5, 
            reviews: 45, 
            imageUrl: 'imgs/Rectangle 62.png', 
        },
        { 
            name: 'Smartphone', 
            price: 299.99, 
            rating: 4.7, 
            reviews: 120, 
            imageUrl: 'imgs/Rectangle 62 (9).png', 
        }
        ,
        { 
            name: 'Wireless Headphones', 
            price: 80.00, 
            rating: 4.5, 
            reviews: 45, 
            imageUrl: 'imgs/Rectangle 62.png', 
        },
        { 
            name: 'Smartphone', 
            price: 299.99, 
            rating: 4.7, 
            reviews: 120, 
            imageUrl: 'imgs/Rectangle 62 (9).png', 
        }
];

function ProductList() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <div id="product-list">
        {products.map((product, index) => (
          <article key={index} className="product-card">
            <div className="product-image-container" onClick={() => console.log(product.name)}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <img src="imgs/favorie 1.png" alt="Add to wishlist" className="favorite-icon" />
            </div>
            <h2 className="product-title">{product.name}</h2>
            <div className="product-details">
              <div className="rating-price">
                <div className="rating">
                  <img src="imgs/star 1.png" className="rating-icon" />
                  <span>{product.rating} ({product.reviews} reviews)</span>
                </div>
                <span className="price">$ {product.price.toFixed(2)}</span>
              </div>
              <button className="cart-button" aria-label="Add to cart" onClick={() => addToCart(product)}>
                <img src="imgs/Buy - 6.png" alt="" className="cart-icon" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
