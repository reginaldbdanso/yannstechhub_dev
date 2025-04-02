"use client"

import React, { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import  '../styles/components/ProductView_module.css';
// import { mockProducts } from "../data/mockProducts"
import { useCart } from "../context/CartContext"
import Header from "./Header"
import ProductCard from "./ProductCard"
import Footer from "./Footer"
import { useProducts } from "@/context/ProductContext"
import { useReviews } from "@/context/ReviewContext"



const ProductView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const { products: contextProducts } = useProducts();
  const { reviews: contextReviews } = useReviews();
  const [product, setProduct] = useState<{
    _id: string;
    title: string;
    price: number;
    image: string;
    thumbnails: string[];
    category: string;
    rating: number;
    reviews: number;
    features: string[];
    specs: string[];
    descriptions: Array<{
      title: string;
      content: string;
    }>;
  } | null>(null)

  const [reviews, setReviews] = useState<Array<{
    _id: string;
    productId: string;
    rating: number;
    title: string;
    content: string;
    author: string;
  }>>([])

  const [mainImage, setMainImage] = useState("")
  const [averageRating, setAverageRating] = useState(0)
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({})

  const [userRating, setUserRating] = useState<number>(0)
  const [isRatingHovered, setIsRatingHovered] = useState<number>(0)

  // New state for slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const [maxSlide, setMaxSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Add state for wishlist
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      if (id) {
        try {
          // Fetch product
          if (contextProducts) {
            const foundProduct = contextProducts.find((p) => p._id === String(id));
            console.log(foundProduct)
            setProduct(foundProduct || null);
            setMainImage(contextProducts.find((p) => p._id === String(id))?.image || "")
          } else {
            setProduct(null);
            setMainImage("");
          }
          // const foundProduct = mockProducts.find((p) => p.id === Number(id))
          // setProduct(foundProduct || null)
          // setMainImage(foundProduct?.image || "")

          // Fetch reviews from API
          if (contextReviews) {
            console.log(contextReviews)
            const foundReviews = contextReviews.find((p) => p.productId === String(id));
            // console.log(foundReviews)
            setReviews(foundReviews ? [foundReviews] : []);
          } else {
            setReviews([]);
          }
        } catch (err) {
          console.error("Error fetching reviews:", err)
        }
      }
    }

    fetchProductAndReviews()
  }, [id])

  useEffect(() => {
    if (product && reviews.length > 0) {
      const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      setAverageRating(avgRating)

      const ratingDist = reviews.reduce(
        (acc, review) => {
          acc[review.rating] = (acc[review.rating] || 0) + 1
          return acc
        },
        {} as Record<number, number>,
      )
      setRatingDistribution(ratingDist)
    }
  }, [product, reviews])

  // New effect for slider functionality
  useEffect(() => {
    // Get related products (excluding current product)
    const relatedProducts = product
      ? contextProducts.filter((p) => p.category === product.category && p._id !== product._id).slice(0, 8)
      : contextProducts.filter((p) => p._id !== String(id));

    // Calculate max slide based on number of products and visible items
    const calculateMaxSlide = () => {
      let visibleItems = 4 // Default for desktop

      if (window.innerWidth <= 480) {
        visibleItems = 1
      } else if (window.innerWidth <= 768) {
        visibleItems = 2
      } else if (window.innerWidth <= 1200) {
        visibleItems = 3
      }

      return Math.max(0, relatedProducts.length - visibleItems)
    }

    setMaxSlide(calculateMaxSlide())

    const handleResize = () => {
      setMaxSlide(calculateMaxSlide())
      // Reset to first slide when resizing to avoid empty slides
      setCurrentSlide(0)
    }

    window.addEventListener("resize", handleResize)

    // Auto-slide functionality
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    }, 3000)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [id, maxSlide, product])

  const handleThumbnailClick = (image: string) => {
    setMainImage(image)
  }

  const handleAddToCart = () => {
    if (product) {
      const cartItem = {
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
      }

      addToCart(cartItem)

      // Store the quantity in localStorage
      const cartQuantities = JSON.parse(localStorage.getItem("cartQuantities") || "{}")
      cartQuantities[product._id] = (cartQuantities[product._id] || 0) + quantity
      localStorage.setItem("cartQuantities", JSON.stringify(cartQuantities))
    }
  }

  const handleStarHover = (rating: number) => {
    setIsRatingHovered(rating)
  }

  const handleStarClick = (rating: number) => {
    setUserRating(rating)
    // Here you would typically make an API call to submit the rating
  }

  // New slider navigation functions
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1))
  }

  // Add quantity control functions
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
    }
  }

  if (!product) {
    return <div>Product not found</div>
  }

  // Create an array of thumbnail images, including the main image
  const thumbnails = [product.image, ...product.thumbnails.slice(0, 3)]

  // Get related products (same category, excluding current product)
  const relatedProducts = contextProducts.filter((p) => p.category === product.category && p._id !== product._id).slice(0, 8)

  // Add a new function to handle product click in the "You May Also Like" section
  const handleRelatedProductClick = (relatedProduct: (typeof contextProducts)[0]) => {
    // Update the current product with the clicked product
    setProduct(relatedProduct)
    setMainImage(relatedProduct.image)

    // Get product reviews for the new product
    // const fetchReviews = async () => {
    //   try {
    //     console.log(`http://192.168.0.51:4000/api/reviews/product/${relatedProduct.id}`)
    //     const reviewsResponse = await fetch(`http://192.168.0.51:4000/api/reviews/product/${id}`)
    //     if (reviewsResponse.ok) {
    //       const productReviews = await reviewsResponse.json()
    //       setReviews(productReviews)
    //     }
    //   } catch (err) {
    //     console.error("Error fetching reviews:", err)
    //     setReviews([])
    //   }
    // }
    // fetchReviews()
// This line is redundant since we're already setting reviews in the fetchReviews function

    // Scroll to the top of the product container
    const productContainerElement = document.querySelector(".product-container")
    if (productContainerElement) {
      productContainerElement.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback to scrolling to top of page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="container">
      <div className="pvmain-content">
        <Header />
        <div className="divider divider-top"></div>

        <div className="breadcrumb-sort">
          <div className="breadcrumb">
            <div className="breadcrumb-item breadcrumb-item-bold">yannstechub</div>
            <div className="breadcrumb-item">/ Product / {product.title}</div>
          </div>
        </div>

        <div className="divider divider-default"></div>

        <div className="product-container">
          <div className="product-wrapper">
            <div className="product-content">
              <div className="product-gallery">
                <div className="main-image-wrapper">
                  <img className="main-product-image" src={mainImage || "/placeholder.svg"} alt={product.title} />
                  <div className="thumbnail-gallery">
                    {thumbnails.map((thumb, index) => (
                      <img
                        key={index}
                        className={`thumbnail ${mainImage === thumb ? "active" : ""}`}
                        src={thumb}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(thumb)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="product-info">
                <div className="info-container">
                  <div className="product-detail">
                    <div className="title-container">
                      <div className="product-title">{product.title}</div>
                      <button className="wishlist-button" onClick={() => setIsWishlisted(!isWishlisted)}>
                        <img
                          src="/imgs/favorie 2.png"
                          alt="Add to wishlist"
                          style={{ filter: isWishlisted ? "none" : "grayscale(100%)" }}
                        />
                      </button>
                    </div>
                    <div className="rating-wrapper">
                      <img className="rating-icon" src="/imgs/star 1.png" alt="Rating stars" />
                      <span>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="price">${product.price.toFixed(2)}</div>
                    <div className="quantity-label">
                      Quantity
                      <div className="quantity-control">
                        <button className="quantity-button" onClick={handleDecrement} disabled={quantity <= 1}>
                          -
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="quantity-input"
                        />
                        <button className="quantity-button" onClick={handleIncrement}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="feature-list">
                      {product.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button className="button button-primary" onClick={() => navigate(-1)}>
                      Continue Shopping
                    </button>
                    <button className="button button-secondary" onClick={handleAddToCart}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <div className="section-title">Description</div>
            <div className="specs-list">
              {product.specs.map((spec, index) => (
                <React.Fragment key={index}>
                  {spec}
                  <br />
                </React.Fragment>
              ))}
            </div>

            {product.descriptions.map((desc, index) => (
              <div key={index} className="feature-description">
                <strong>{desc.title}</strong>
                <br />
                {desc.content}
              </div>
            ))}

            <div className="section-title">Ratings and Reviews</div>
            <div className="reviews-container">
              <div className="rating-summary">
                <div className="rating-score">
                  <span>{averageRating.toFixed(1)}</span>
                  <img src="/imgs/star 1.png" alt="Rating stars" />
                </div>
                <span>{reviews.length} ratings</span>
              </div>

              <div className="rating-bars">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="rating-bar">
                    <span>{rating}</span>
                    <div className="bar-container">
                      <div
                        className="bar-fill"
                        style={{ width: `${((ratingDistribution[rating] || 0) / reviews.length) * 100}%` }}
                      ></div>
                    </div>
                    <span>{ratingDistribution[rating] || 0}</span>
                  </div>
                ))}
              </div>

              <div className="rate-product-section">
                <h2>Rate This Product</h2>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      className="star-icon"
                      src={isRatingHovered >= star || userRating >= star ? "/imgs/star 1.png" : "/imgs/star-empty.png"}
                      alt={`Rate ${star} stars`}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={() => handleStarHover(0)}
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </div>
                <div className="verification-text">Adding a review requires a valid email for verification</div>
              </div>
            </div>

            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-rating">
                  <div className="review-title">{review.title}</div>
                  <div className="star-rating">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={i < review.rating ? "/imgs/star 1.png" : "/imgs/star-empty.png"}
                        alt="Rating star"
                      />
                    ))}
                  </div>
                </div>
                <p>{review.content}</p>
                <p>Reviewed by {review.author}</p>
              </div>
            ))}

            <div className="section-title">More {product.category} Products</div>
            <div className="slider-container">
              {relatedProducts.length > 0 ? (
                <div className="slider-wrapper" ref={sliderRef}>
                  <button
                    className="slider-nav-button slider-nav-button-prev"
                    onClick={handlePrevSlide}
                    disabled={currentSlide === 0}
                  >
                    ←
                  </button>
                  <div
                    className="products-slider"
                    style={{ transform: `translateX(-${currentSlide * (100 / (4 - 0.25))}%)` }}
                  >
                    {relatedProducts.map((relatedProduct) => (
                      <div
                        key={relatedProduct._id}
                        className="product-slide"
                        onClick={() => handleRelatedProductClick(relatedProduct)}
                        style={{ cursor: "pointer" }}
                      >
                        <ProductCard
                          id={relatedProduct._id}
                          image={relatedProduct.image}
                          title={relatedProduct.title}
                          rating={relatedProduct.rating}
                          reviews={relatedProduct.reviews}
                          price={relatedProduct.price}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="slider-nav-button slider-nav-button-next"
                    onClick={handleNextSlide}
                    disabled={currentSlide >= maxSlide}
                  >
                    →
                  </button>
                </div>
              ) : (
                <div style={{ padding: "20px", textAlign: "center", width: "100%" }}>
                  No other products found in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductView



