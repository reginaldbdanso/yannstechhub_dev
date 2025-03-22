"use client"

import React, { useState, useEffect, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mockProducts } from "../data/mockProducts"
import { useCart } from "../context/CartContext"
import Header from "./Header"
import ProductCard from "./ProductCard"
import Footer from "./Footer"

// Styled components (most of these remain the same as in the example)
const Container = styled.section`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`

const Divider = styled.div<{ top?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${(props) => (props.top ? "100px" : "10px")};
  width: 99.9%;
  border: 1px solid #d5d5d5;
`

const BreadcrumbSort = styled.div`
  display: flex;
  width: 100%;
  max-width: 70%;
  gap: 2px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 9px 0 0 0px;

  @media (max-width: 991px) {
    width: 70%;
    justify-content: center;
    gap: 2rem;
    max-width: 100%;
  }
`

const Breadcrumb = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  color: #000;
  font: 15px 'Open Sans', sans-serif;
`

const BreadcrumbItem = styled.span<{ bold?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  font: ${(props) => (props.bold ? "700" : "400")} 15px 'Open Sans', sans-serif;
`

const ProductContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 38px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 991px) {
    max-width: 95%;
  }
`

const ProductWrapper = styled.div`
  align-self: center;
  width: 100%;
  max-width: 987px;

  @media (max-width: 991px) {
    max-width: 95%;
  }
`

const ProductContent = styled.div`
  gap: 30px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    max-width: 95%;
  }
`

const ProductGallery = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0;
  position: relative;

  @media (max-width: 991px) {
    width: 100%;
    margin: 40px 0 0;
  }
`

const MainImageWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 95%;
  }
`

const MainProductImage = styled.img`
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 100%;
  border-radius: 10px;
`

const ThumbnailGallery = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 13px;
`

const Thumbnail = styled.img`
  aspect-ratio: 1.11;
  object-fit: contain;
  object-position: center;
  width: 104px;
  border-radius: 20px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover, &.active {
    border-color:rgb(81, 92, 104);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin: 40px 0 0;
    max-width: 95%;
  }
`

const InfoContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
`

const ProductDetail = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  color: #000;
  font: 700 15px 'Open Sans', sans-serif;
`

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const ProductTitle = styled.h1`
  font-size: 25px;
  align-self: stretch;
`

const RatingWrapper = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 10px;
  font-size: 12px;
  color: #A5A5A5;
`

const RatingIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 16px;
`

const Price = styled.div`
  font-size: 25px;
  margin-top: 7px;
`

const QuantityLabel = styled.div`
  margin-top: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

const FeatureList = styled.div`
  font-weight: 500;
  margin-top: 27px;
`

const FeatureItem = styled.div`
  margin-top: 19px;
`

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 31px;
`

const Button = styled.button`
  align-self: stretch;
  border-radius: 30px;
  min-height: 57px;
  color: #FFF;
  padding: 19px;
  text-align: center;
  font: 700 15px 'Open Sans', sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding: 19px 20px;
  }
`

const PrimaryButton = styled(Button)`
  background-color: #0055B6;
`

const SecondaryButton = styled(Button)`
  background-color: #000;
`

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 70%;

  @media (max-width: 991px) {
    max-width: 95%;
  }
`

const SectionTitle = styled.h2`
  color: #000;
  margin: 74px 0 0 44px;
  font: 700 25px 'Open Sans', sans-serif;

  @media (max-width: 991px) {
    margin: 40px 0 0 10px;
  }
`

const SpecsList = styled.div`
  color: #000;
  margin: 20px 0 0 44px;
  font: 500 15px 'Open Sans', sans-serif;
`

const FeatureDescription = styled.div`
  color: #000;
  margin: 34px 0 0 44px;
  font: 500 15px 'Open Sans', sans-serif;
`

const ReviewsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1003px;
  align-items: start;
  gap: 20px;
  justify-content: space-between;
  margin: 33px 0 0 42px;

  @media (max-width: 991px) {
    flex-direction: column;
    margin: 0% 10%;
    max-width: 95%;
  }
`

const RatingSummary = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: #000;
`

// Update RatingScore styles
const RatingScore = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 50px;
  font-weight: 800;

  img {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 991px) {
    font-size: 40px;
  }
`

const RatingBars = styled.div`
  display: flex;
  margin-top: 17px;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 991px) {
    margin: 0% -8%;
  }
`

const RatingBar = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`

const BarContainer = styled.div`
  border-radius: 10px;
  background-color: #E4E4E4;
  height: 15px;
  width: 320px;
`

const BarFill = styled.div<{ width: string }>`
  border-radius: 10px;
  background-color: #FFC107;
  height: 100%;
  width: ${(props) => props.width};
`

const ReviewCard = styled.div`
  border-radius: 20px;
  background-color: #FFF;
  padding: 32px 58px;
  margin-top: 20px;
  width: 100%;
  max-width: 1065px;
  color: #000;
  font: 500 15px 'Open Sans', sans-serif;
  border: 1px solid #E4E4E4;

  p:last-child {
    padding-top: 15px;
    font-weight: 700;
  }

  @media (max-width: 991px) {
    padding: 0 20px;
    max-width: 95%;
  }
`

const ReviewRating = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

const ReviewTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
`

// New styled components for the slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
  overflow: hidden;
  padding: 20px 0;
`

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`

const ProductsSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  gap: 20px;
`

const ProductSlide = styled.div`
  flex: 0 0 auto;
  width: calc(25% - 15px);
  
  @media (max-width: 1200px) {
    width: calc(33.333% - 15px);
  }
  
  @media (max-width: 768px) {
    width: calc(50% - 15px);
  }
  
  @media (max-width: 480px) {
    width: calc(100% - 15px);
  }
`

const SliderNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const PrevButton = styled(SliderNavButton)`
  left: 10px;
`

const NextButton = styled(SliderNavButton)`
  right: 10px;
`

const RateProductSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-radius: 8px;
  
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`

const StarRating = styled.div`
  display: flex;
  gap: 8px;
  margin: 10px 0;
  
  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`

const VerificationText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
`

const StarIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`

// Add new styled components for quantity controls
const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

// Update the QuantityButton styling to handle text content
const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  
  &:hover {
    background: #f5f5f5;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const QuantityInput = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
`

// Update the WishlistButton to use the image
const WishlistButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`

const ProductView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<(typeof mockProducts)[0] | null>(null)
  const [reviews, setReviews] = useState<Array<{
    id: string;
    productId: number;
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
          const foundProduct = mockProducts.find((p) => p.id === Number(id))
          setProduct(foundProduct || null)
          setMainImage(foundProduct?.image || "")

          // Fetch reviews from API
          const reviewsResponse = await fetch(`http://192.168.0.51:4000/api/reviews/product/${id}`)
          if (reviewsResponse.ok) {
            const reviewsData = await reviewsResponse.json()
            setReviews(reviewsData)
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
      ? mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 8)
      : mockProducts.filter((p) => p.id !== Number(id));

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
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }

      addToCart(cartItem)

      // Store the quantity in localStorage
      const cartQuantities = JSON.parse(localStorage.getItem("cartQuantities") || "{}")
      cartQuantities[product.id] = (cartQuantities[product.id] || 0) + quantity
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
  const relatedProducts = mockProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 8)

  // Add a new function to handle product click in the "You May Also Like" section
  const handleRelatedProductClick = (relatedProduct: (typeof mockProducts)[0]) => {
    // Update the current product with the clicked product
    setProduct(relatedProduct)
    setMainImage(relatedProduct.image)

    // Get product reviews for the new product
    const fetchReviews = async () => {
      try {
        console.log(`http://192.168.0.51:4000/api/reviews/product/${relatedProduct.id}`)
        const reviewsResponse = await fetch(`http://192.168.0.51:4000/api/reviews/product/${id}`)
        if (reviewsResponse.ok) {
          const productReviews = await reviewsResponse.json()
          setReviews(productReviews)
        }
      } catch (err) {
        console.error("Error fetching reviews:", err)
        setReviews([])
      }
    }
    fetchReviews()
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
    <Container>
      <MainContent>
        <Header />
        <Divider top />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Product / {product.title}</BreadcrumbItem>
          </Breadcrumb>
        </BreadcrumbSort>

        <Divider />

        <ProductContainer className="product-container">
          <ProductWrapper>
            <ProductContent>
              <ProductGallery>
                <MainImageWrapper>
                  <MainProductImage src={mainImage || "/placeholder.svg"} alt={product.title} />
                  <ThumbnailGallery>
                    {thumbnails.map((thumb, index) => (
                      <Thumbnail
                        key={index}
                        src={thumb}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        onClick={() => handleThumbnailClick(thumb)}
                        className={mainImage === thumb ? "active" : ""}
                      />
                    ))}
                  </ThumbnailGallery>
                </MainImageWrapper>
              </ProductGallery>
              <ProductInfo>
                <InfoContainer>
                  <ProductDetail>
                    <TitleContainer>
                      <ProductTitle>{product.title}</ProductTitle>
                      <WishlistButton onClick={() => setIsWishlisted(!isWishlisted)}>
                        <img
                          src="/imgs/favorie 2.png"
                          alt="Add to wishlist"
                          style={{ filter: isWishlisted ? "none" : "grayscale(100%)" }}
                        />
                      </WishlistButton>
                    </TitleContainer>
                    <RatingWrapper>
                      <RatingIcon src="/imgs/star 1.png" alt="Rating stars" />
                      <span>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </RatingWrapper>
                    <Price>${product.price.toFixed(2)}</Price>
                    <QuantityLabel>
                      Quantity
                      <QuantityControl>
                        <QuantityButton onClick={handleDecrement} disabled={quantity <= 1}>
                          -
                        </QuantityButton>
                        <QuantityInput type="number" min="1" value={quantity} onChange={handleQuantityChange} />
                        <QuantityButton onClick={handleIncrement}>+</QuantityButton>
                      </QuantityControl>
                    </QuantityLabel>
                    <FeatureList>
                      {product.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                  </ProductDetail>
                  <ActionButtons>
                    <PrimaryButton onClick={() => navigate(-1)}>Continue Shopping</PrimaryButton>
                    <SecondaryButton onClick={handleAddToCart}>Add to Cart</SecondaryButton>
                  </ActionButtons>
                </InfoContainer>
              </ProductInfo>
            </ProductContent>
          </ProductWrapper>

          <ContentSection>
            <SectionTitle>Description</SectionTitle>
            <SpecsList>
              {product.specs.map((spec, index) => (
                <React.Fragment key={index}>
                  {spec}
                  <br />
                </React.Fragment>
              ))}
            </SpecsList>

            {product.descriptions.map((desc, index) => (
              <FeatureDescription key={index}>
                <strong>{desc.title}</strong>
                <br />
                {desc.content}
              </FeatureDescription>
            ))}

            <SectionTitle>Ratings and Reviews</SectionTitle>
            <ReviewsContainer>
              <RatingSummary>
                <RatingScore>
                  <span>{averageRating.toFixed(1)}</span>
                  <img src="/imgs/star 1.png" alt="Rating stars" />
                </RatingScore>
                <span>{reviews.length} ratings</span>
              </RatingSummary>

              <RatingBars>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <RatingBar key={rating}>
                    <span>{rating}</span>
                    <BarContainer>
                      <BarFill width={`${((ratingDistribution[rating] || 0) / reviews.length) * 100}%`} />
                    </BarContainer>
                    <span>{ratingDistribution[rating] || 0}</span>
                  </RatingBar>
                ))}
              </RatingBars>

              <RateProductSection>
                <h2>Rate This Product</h2>
                <StarRating>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      src={isRatingHovered >= star || userRating >= star ? "/imgs/star 1.png" : "/imgs/star-empty.png"}
                      alt={`Rate ${star} stars`}
                      className="star-icon"
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={() => handleStarHover(0)}
                      onClick={() => handleStarClick(star)}
                    />
                  ))}
                </StarRating>
                <VerificationText>Adding a review requires a valid email for verification</VerificationText>
              </RateProductSection>
            </ReviewsContainer>

            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <ReviewRating>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <StarRating>
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={i < review.rating ? "/imgs/star 1.png" : "/imgs/star-empty.png"}
                        alt="Rating star"
                      />
                    ))}
                  </StarRating>
                </ReviewRating>
                <p>{review.content}</p>
                <p>Reviewed by {review.author}</p>
              </ReviewCard>
            ))}

            <SectionTitle>More {product.category} Products</SectionTitle>
            <SliderContainer>
              {relatedProducts.length > 0 ? (
                <SliderWrapper ref={sliderRef}>
                  <PrevButton onClick={handlePrevSlide} disabled={currentSlide === 0}>
                    ←
                  </PrevButton>
                  <ProductsSlider style={{ transform: `translateX(-${currentSlide * (100 / (4 - 0.25))}%)` }}>
                    {relatedProducts.map((relatedProduct) => (
                      <ProductSlide
                        key={relatedProduct.id}
                        onClick={() => handleRelatedProductClick(relatedProduct)}
                        style={{ cursor: "pointer" }}
                      >
                        <ProductCard
                          key={relatedProduct.id}
                          id={relatedProduct.id}
                          image={relatedProduct.image}
                          title={relatedProduct.title}
                          rating={relatedProduct.rating}
                          reviews={relatedProduct.reviews}
                          price={relatedProduct.price}
                        />
                      </ProductSlide>
                    ))}
                  </ProductsSlider>
                  <NextButton onClick={handleNextSlide} disabled={currentSlide >= maxSlide}>
                    →
                  </NextButton>
                </SliderWrapper>
              ) : (
                <div style={{ padding: "20px", textAlign: "center", width: "100%" }}>
                  No other products found in this category.
                </div>
              )}
            </SliderContainer>
          </ContentSection>
        </ProductContainer>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default ProductView

