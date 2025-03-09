"use client"

import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { mockProducts, mockReviews } from "../data/mockProducts"

// Types
interface ProductData {
  title: string
  price: string
  rating: string
  reviewCount: number
  features: string[]
  specs: string[]
  descriptions: Array<{
    title: string
    content: string
  }>
  image: string
  thumbnails?: string[]
  brand?: string
  condition?: string
  category?: string
interface ProductCardData {
  id: number
  title: string
  price: string
  rating: string
  reviewCount: number
  image: string
}

// Styled Components
const DailyDealsContainer = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.div`
  background-color: #eef2f4;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`

const HeaderSection = styled.header`
  position: fixed;
  border-radius: 20px;
  background-color: #f2f2f2;
  display: flex;
  width: 70%;
  overflow: hidden;
  gap: 20px;
  justify-content: space-between;
  padding: 21px 68px;
  box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.147);
  z-index: 1000;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

const Logo = styled.img`
  aspect-ratio: 4.13;
  object-fit: contain;
  object-position: center;
  width: 132px;
  max-width: 100%;
`

const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #000;
  justify-content: start;
  margin: auto 0;
  font: 500 14px 'Open Sans', sans-serif;
`

const NavLink = styled.a`
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const UserActions = styled.div`
  align-self: start;
  display: flex;
  margin-top: 4px;
  align-items: start;
  gap: 30px;
`

const ActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
`

const DividerTop = styled.div`
  align-self: stretch;
  min-height: 0px;
  margin-top: 100px;
  width: 99.9%;
  border: 1px solid #d5d5d5;
`

const Divider = styled.div`
  align-self: stretch;
  min-height: 0px;
  margin-top: 10px;
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

const SortContainer = styled.div`
  display: flex;
  gap: 5px;
`

const SortLabel = styled.label`
  color: #000;
  flex-grow: 1;
  margin: auto 0;
  font: 500 15px 'Open Sans', sans-serif;
`

const SortSelect = styled.div`
  border-radius: 10px;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px 50px;
  border: 1px solid #e4e4e4;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`

const Select = styled.select`
  padding: 4px 30px;
  border: none;
  cursor: pointer;
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

  @media (max-width: 991px) {
    width: 80%;
  }
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 50;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  
  &:focus {
    outline: none;
  }
`

const LeftArrow = styled(Arrow)`
  left: 10px;
`

const RightArrow = styled(Arrow)`
  right: 10px;
`

const ProductCard = styled.article`
  border-radius: 10px;
  background-color: #fff;
  padding: 15px 16px 26px;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  width: 244px;
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

const Footer = styled.footer`
  background-color: #000;
  padding-top: 10px;
  width: 100%;
  margin-top: auto;
`

const FooterContent = styled.div`
  padding: 73px 70px 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`

const FooterSections = styled.div`
  display: flex;
  flex-direction: row;
  width: 655px;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    align-items: start;
    text-align: start;
    gap: 5rem;
    justify-content: center;
  }
`

const FooterLogoSocial = styled.div`
  display: flex;
  flex-direction: column;
`

const SocialIcons = styled.div`
  display: flex;
  margin-top: 19px;
  gap: 33px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`

const SocialIcon = styled.img`
  width: 18px;
  aspect-ratio: 1;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const FooterHeading = styled.h3`
  color: #dedede;
  font-size: 17px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
`

const FooterLink = styled.a`
  color: #fff;
  font: 300 12px 'Inter', sans-serif;
  text-decoration: none;

  &:hover, &:focus {
    text-decoration: underline;
  }
`

const Copyright = styled.div`
  background-color: #191919;
  color: #fff;
  text-align: center;
  padding: 7px 70px 13px;
  font: 400 10px 'Inter', sans-serif;

  @media (max-width: 991px) {
    padding: 7px 20px;
  }
`

// Main Component
const ProductPage: React.FC = () => {
  // State for slider
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Sample data
  const product: ProductData = {
    title: "Lorem ipsum dolor",
    price: "$ 50.00",
    rating: "5.0",
    reviewCount: 58,
    features: ["Powerful Bass", "60-hr-Playtime", "AniFast™ Fast Charging", "ENC HD Voice in Calls"],
    specs: [
      "BT Version: 5.2",
      "BT Range: ≥10m",
      "Speaker Diameter: 40mm",
      "Playtime: Up to 60 hours",
      "Charging Time: 1.5 hours",
      "Supported Format: Mic support / Aux in Mode / Type-C",
      "Model:OHP-610",
    ],
    descriptions: [
      {
        title: "Powerful Deep Bass\nHits You in Waves",
        content:
          "Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.",
      },
      {
        title: "Powerful Deep Bass\nHits You in Waves",
        content:
          "Powered by advanced 40mm drivers and exclusive HavyBassTM technology, BoomPop2 is meticulously designed to offer music enthusiasts an unparalleled sound experience, characterized by incredibly deep and dynamic bass.",
      },
    ],
  }

  const reviews: ReviewData[] = Array(5).fill({
    title: "Super impressive",
    rating: 4,
    content:
      "The sound quality from this device is great and my favourite feature is how I'm able to connect to both my phone and laptop, with the headset auto switching when a sound is being played from either of them.",
    author: "Sweetie Baiden",
  })

  const similarProducts: ProductCardData[] = Array(7).fill({
    id: 1,
    title: "Lorem ipsum dolor",
    price: "$ 50.00",
    rating: "5.0",
    reviewCount: 58,
    image: "/placeholder.svg?height=200&width=200",
  })

  // Calculate slider dimensions
  useEffect(() => {
    const updateSlider = () => {
      if (!trackRef.current || !containerRef.current) return

      const cards = trackRef.current.querySelectorAll("[data-product-card]")
      if (cards.length === 0) return

      const cardWidth = cards[0].getBoundingClientRect().width + 20 // card width + gap
      const visibleCount = Math.floor(containerRef.current.offsetWidth / cardWidth)

      // Calculate maximum index
      const maxIndex = Math.max(0, cards.length - visibleCount)
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex)
      }

      // Move the slider track
      trackRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`
    }

    updateSlider()
    window.addEventListener("resize", updateSlider)

    return () => {
      window.removeEventListener("resize", updateSlider)
    }
  }, [currentIndex])

  // Auto-rotate function
  useEffect(() => {
    const autoRotate = () => {
      if (!trackRef.current || !containerRef.current) return

      const cards = trackRef.current.querySelectorAll("[data-product-card]")
      if (cards.length === 0) return

      const cardWidth = cards[0].getBoundingClientRect().width + 20
      const visibleCount = Math.floor(containerRef.current.offsetWidth / cardWidth)
      const maxIndex = Math.max(0, cards.length - visibleCount)

      if (currentIndex < maxIndex) {
        setCurrentIndex((prev) => prev + 1)
      } else {
        setCurrentIndex(0)
      }
    }

    const interval = setInterval(autoRotate, 3000)
    return () => clearInterval(interval)
  }, [currentIndex])

  // Handle next slide
  const handleNext = () => {
    if (!trackRef.current || !containerRef.current) return

    const cards = trackRef.current.querySelectorAll("[data-product-card]")
    if (cards.length === 0) return

    const cardWidth = cards[0].getBoundingClientRect().width + 20
    const visibleCount = Math.floor(containerRef.current.offsetWidth / cardWidth)
    const maxIndex = Math.max(0, cards.length - visibleCount)

    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  // Handle previous slide
  const handlePrev = () => {
    if (!trackRef.current || !containerRef.current) return

    const cards = trackRef.current.querySelectorAll("[data-product-card]")
    if (cards.length === 0) return

    const cardWidth = cards[0].getBoundingClientRect().width + 20
    const visibleCount = Math.floor(containerRef.current.offsetWidth / cardWidth)
    const maxIndex = Math.max(0, cards.length - visibleCount)

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    } else {
      setCurrentIndex(maxIndex)
    }
  }

  return (
    <DailyDealsContainer>
      <MainContent>
        <HeaderSection>
          <a href="index.html">
            <Logo src="/placeholder.svg?height=50&width=132" alt="YannsTechHub Logo" />
          </a>
          <NavButtons>
            <NavLink href="daily-deals-section.html">Daily deals</NavLink>
            <NavLink href="shop-section.html">Shop</NavLink>
            <NavLink href="bundle-deals.html">Bundle Deals</NavLink>
            <NavLink href="support">Support</NavLink>
          </NavButtons>
          <UserActions>
            <ActionIcon src="/placeholder.svg?height=24&width=24" alt="Search" />
            <a href="logIn.html">
              <ActionIcon src="/placeholder.svg?height=24&width=24" alt="User Account" />
            </a>
            <a href="cart.html">
              <ActionIcon src="/placeholder.svg?height=24&width=24" alt="Shopping Cart" />
            </a>
          </UserActions>
        </HeaderSection>

        <DividerTop />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Daily deals</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect>
              <Select id="sortSelect" aria-label="Sort products">
                <option value="">Recommended</option>
                <option value="">Best Sellers</option>
                <option value="">Low Price</option>
                <option value="">High Price</option>
                <option value="">Reviews</option>
              </Select>
            </SortSelect>
          </SortContainer>
        </BreadcrumbSort>

        <Divider />

        <ProductContainer>
          <ProductWrapper>
            <ProductContent>
              <ProductGallery>
                <MainImageWrapper>
                  <MainProductImage
                    src="/placeholder.svg?height=400&width=400"
                    loading="lazy"
                    alt="Product main image"
                  />
                  <ThumbnailGallery>
                    <Thumbnail src="/placeholder.svg?height=104&width=104" loading="lazy" alt="Product thumbnail 1" />
                    <Thumbnail src="/placeholder.svg?height=104&width=104" loading="lazy" alt="Product thumbnail 2" />
                    <Thumbnail src="/placeholder.svg?height=104&width=104" loading="lazy" alt="Product thumbnail 3" />
                    <Thumbnail src="/placeholder.svg?height=104&width=104" loading="lazy" alt="Product thumbnail 4" />
                  </ThumbnailGallery>
                </MainImageWrapper>
              </ProductGallery>
              <ProductInfo>
                <InfoContainer>
                  <ProductDetail>
                    <ProductTitle>{product.title}</ProductTitle>
                    <RatingWrapper>
                      <RatingIcon src="/placeholder.svg?height=16&width=16" alt="Rating stars" loading="lazy" />
                      <span>
                        {product.rating} ({product.reviewCount} reviews)
                      </span>
                    </RatingWrapper>
                    <Price>{product.price}</Price>
                    <QuantityLabel>Quantity</QuantityLabel>
                    <FeatureList>
                      {product.features.map((feature, index) => (
                        <FeatureItem key={index}>{feature}</FeatureItem>
                      ))}
                    </FeatureList>
                  </ProductDetail>
                  <ActionButtons>
                    <PrimaryButton onClick={() => window.location.href = '/shop'}>Continue Shopping</PrimaryButton>
                    <SecondaryButton onClick={() => window.location.href = '/checkout'}>Buy Now</SecondaryButton>
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
                  <span>5.0</span>
                  <img src="/placeholder.svg?height=24&width=24" alt="Rating stars" loading="lazy" />
                </RatingScore>
                <span>5489 ratings</span>
              </RatingSummary>

              <RatingBars>
                <RatingBar>
                  <span>5</span>
                  <BarContainer>
                    <BarFill width="320px" />
                  </BarContainer>
                  <span>3321</span>
                </RatingBar>
                <RatingBar>
                  <span>4</span>
                  <BarContainer>
                    <BarFill width="100px" />
                  </BarContainer>
                  <span>3321</span>
                </RatingBar>
                <RatingBar>
                  <span>3</span>
                  <BarContainer>
                    <BarFill width="280px" />
                  </BarContainer>
                  <span>3321</span>
                </RatingBar>
                <RatingBar>
                  <span>2</span>
                  <BarContainer>
                    <BarFill width="250px" />
                  </BarContainer>
                  <span>3321</span>
                </RatingBar>
                <RatingBar>
                  <span>1</span>
                  <BarContainer>
                    <BarFill width="20px" />
                  </BarContainer>
                  <span>3321</span>
                </RatingBar>
              </RatingBars>
              <div>
                <h2>Rating This Product</h2>
                <p>Lorem ipsum dolor sit amet </p>
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
                        <img key={i} src="/placeholder.svg?height=20&width=20" alt="Rating star" loading="lazy" />
                      ))}
                  </ReviewStars>
                </ReviewRating>
                <p>{review.content}</p>
                <p>Reviewed by {review.author}</p>
              </ReviewCard>
            ))}

            <SectionTitle>You May Also Like</SectionTitle>
            <SliderContainer ref={containerRef}>
              <LeftArrow onClick={handlePrev} className="arrow-left">
                &#10094;
              </LeftArrow>
              <ProductsGrid ref={trackRef}>
                {similarProducts.map((product, index) => (
                  <ProductCard key={index} data-product-card>
                    <ProductImageContainer>
                      <ProductImage src={product.image} alt={`Product ${index + 1}`} />
                      <WishlistIcon src="/placeholder.svg?height=19&width=19" alt="Add to wishlist" />
                    </ProductImageContainer>
                    <ProductCardTitle>{product.title}</ProductCardTitle>
                    <ProductDetails>
                      <RatingPrice>
                        <Rating>
                          <RatingIcon src="/placeholder.svg?height=16&width=16" alt="Rating star" />
                          <span>
                            {product.rating} ({product.reviewCount} reviews)
                          </span>
                        </Rating>
                        <Price>{product.price}</Price>
                      </RatingPrice>
                      <CartButton aria-label="Add to cart">
                        <CartIcon src="/placeholder.svg?height=25&width=25" alt="Cart icon" />
                      </CartButton>
                    </ProductDetails>
                  </ProductCard>
                ))}
              </ProductsGrid>
              <RightArrow onClick={handleNext} className="arrow-right">
                &#10095;
              </RightArrow>
            </SliderContainer>
          </ContentSection>
        </ProductContainer>
      </MainContent>

      <Footer>
        <FooterContent>
          <FooterSections>
            <FooterLogoSocial>
              <Logo src="/placeholder.svg?height=50&width=132" alt="YannsTechHub Footer Logo" />
              <SocialIcons>
                <a href="#" aria-label="Facebook">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="Facebook" />
                </a>
                <a href="#" aria-label="Twitter">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="Twitter" />
                </a>
                <a href="#" aria-label="Instagram">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="Instagram" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="LinkedIn" />
                </a>
                <a href="#" aria-label="YouTube">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="YouTube" />
                </a>
                <a href="#" aria-label="TikTok">
                  <SocialIcon src="/placeholder.svg?height=18&width=18" alt="TikTok" />
                </a>
              </SocialIcons>
            </FooterLogoSocial>
            <FooterLinks>
              <FooterHeading>Company</FooterHeading>
              <FooterLink href="about-us.html">About Us</FooterLink>
              <FooterLink href="careers.html">Careers</FooterLink>
            </FooterLinks>
            <FooterLinks>
              <FooterHeading>Help</FooterHeading>
              <FooterLink href="legal.html">Legal</FooterLink>
              <FooterLink href="faqs.html">FAQs</FooterLink>
              <FooterLink href="contact.html">Contact</FooterLink>
            </FooterLinks>
          </FooterSections>
        </FooterContent>
        <Copyright>@yannstechhub2025</Copyright>
      </Footer>
    </DailyDealsContainer>
  )
}

export default ProductPage