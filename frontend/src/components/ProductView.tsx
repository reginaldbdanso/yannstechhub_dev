"use client"

import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { mockProducts, mockReviews } from "../data/mockProducts"
import { useCart } from "../context/CartContext"
import Header from "./Header"
import Footer from "./Footer"

// Styled components (most of these remain the same as in the example)
const Container = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const MainContent = styled.div`
  background-color: #eef2f4;
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
  background-color: #fff;
  border-radius: 20px;
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
    border-color: #007bff;
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

const RatingScore = styled.div`
  display: flex;
  gap: 8px;
  font-size: 50px;
  font-weight: 800;

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

const ReviewStars = styled.div`
  display: flex;
  gap: 5px;
`

const ReviewTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
`

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
`

const ProductsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  transition: transform 0.5s ease;
  
  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 991px) {
    width: 80%;
  }
`

const ProductCard = styled.article`
  border-radius: 10px;
  background-color: #fff;
  padding: 15px;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  width: 244px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`

const ProductImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  aspect-ratio: 1.06;
  width: 100%;
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const WishlistIcon = styled.img`
  position: absolute;
  top: 14px;
  left: 15px;
  width: 19px;
  aspect-ratio: 1;
  cursor: pointer;
`

const ProductCardTitle = styled.h2`
  color: #000;
  margin-top: 28px;
  font: 700 14px 'Open Sans', sans-serif;
`

const ProductDetails = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  align-items: flex-start;
`

const RatingPrice = styled.div`
  display: flex;
  flex-direction: column;
`

const Rating = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #a5a5a5;
  align-items: center;
`

const CartButton = styled.button`
  background-color: #000;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`

const CartIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 25px;
  margin: 3px 0px;
`

const RateProductSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
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

const ProductView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<(typeof mockProducts)[0] | null>(null)
  const [reviews, setReviews] = useState<typeof mockReviews>([])

  const [mainImage, setMainImage] = useState("")
  const [averageRating, setAverageRating] = useState(0)
  const [ratingDistribution, setRatingDistribution] = useState<Record<number, number>>({})

  const [userRating, setUserRating] = useState<number>(0)
  const [isRatingHovered, setIsRatingHovered] = useState<number>(0)

  useEffect(() => {
    if (id) {
      const foundProduct = mockProducts.find((p) => p.id === Number(id))
      setProduct(foundProduct || null)
      setMainImage(foundProduct?.image || "")

      const productReviews = mockReviews.filter((r) => r.productId === Number(id))
      setReviews(productReviews)
    }
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

  const handleThumbnailClick = (image: string) => {
    setMainImage(image)
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    }
  }

  const handleStarHover = (rating: number) => {
    setIsRatingHovered(rating)
  }

  const handleStarClick = (rating: number) => {
    setUserRating(rating)
    // Here you would typically make an API call to submit the rating
  }

  if (!product) {
    return <div>Product not found</div>
  }

  // Create an array of thumbnail images, including the main image
  const thumbnails = [product.image, ...product.thumbnails.slice(0, 3)]

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

        <ProductContainer>
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
                    <ProductTitle>{product.title}</ProductTitle>
                    <RatingWrapper>
                      <RatingIcon src="/imgs/star 1.png" alt="Rating stars" />
                      <span>
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </RatingWrapper>
                    <Price>${product.price.toFixed(2)}</Price>
                    <QuantityLabel>Quantity</QuantityLabel>
                    <FeatureList>
                      {product.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                  </ProductDetail>
                  <ActionButtons>
                    <PrimaryButton onClick={() => navigate("/shop")}>Continue Shopping</PrimaryButton>
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
              <div className="ratings-summary">
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
                        src={
                          isRatingHovered >= star || userRating >= star ? "/imgs/star 1.png" : "/imgs/star-empty.png"
                        }
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
              </div>
            </ReviewsContainer>

            {reviews.map((review, index) => (
              <ReviewCard key={index}>
                <ReviewRating>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <ReviewStars>
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <img key={i} src="/imgs/star 1.png" alt="Rating star" />
                      ))}
                  </ReviewStars>
                </ReviewRating>
                <p>{review.content}</p>
                <p>Reviewed by {review.author}</p>
              </ReviewCard>
            ))}

            <SectionTitle>You May Also Like</SectionTitle>
            <SliderContainer>
              <ProductsGrid>
                {mockProducts
                  .filter((p) => p.id !== product.id)
                  .map((similarProduct, index) => (
                    <ProductCard key={index} onClick={() => navigate(`/product/${similarProduct.id}`)}>
                      <ProductImageContainer>
                        <ProductImage src={similarProduct.image} alt={similarProduct.title} />
                        <WishlistIcon src="/imgs/favorie 1.png" alt="Add to wishlist" />
                      </ProductImageContainer>
                      <ProductCardTitle>{similarProduct.title}</ProductCardTitle>
                      <ProductDetails>
                        <RatingPrice>
                          <Rating>
                            <RatingIcon src="/imgs/star 1.png" alt="Rating star" />
                            <span>
                              {similarProduct.rating} ({similarProduct.reviews} reviews)
                            </span>
                          </Rating>
                          <Price>${similarProduct.price.toFixed(2)}</Price>
                        </RatingPrice>
                        <CartButton
                          aria-label="Add to cart"
                          onClick={(e) => {
                            e.stopPropagation()
                            addToCart({
                              id: similarProduct.id,
                              title: similarProduct.title,
                              price: similarProduct.price,
                              image: similarProduct.image,
                            })
                          }}
                        >
                          <CartIcon src="/imgs/Buy - 6.png" alt="Cart icon" />
                        </CartButton>
                      </ProductDetails>
                    </ProductCard>
                  ))}
              </ProductsGrid>
            </SliderContainer>
          </ContentSection>
        </ProductContainer>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default ProductView

