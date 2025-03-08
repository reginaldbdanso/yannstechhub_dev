"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Header from "./Header"
import Footer from "./Footer"
import ProductCard from "./ProductCard" 
import { useCart } from '../context/CartContext';// Import the original ProductCard
import { mockProducts } from "../data/mockProducts"

// Styled Components
const LandingContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  width: 100%;
`

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  margin-top: 80px;

  @media (max-width: 991px) {
    padding: 0 2%;
    margin-top: 60px;
  }
`

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #000;

  @media (max-width: 991px) {
    height: 60vh;
  }
`

const HeroSlide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const CategoriesSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 100%;
  margin: 0% 10%;
  flex-direction: column;
  margin-top: 20px;
  align-self: center;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0% 0%;
  }
`

const CategoryTitle = styled.h3`
  color: #000;
  margin-top: 109px;
  font: 700 25px Open Sans, sans-serif;
`

const HeroControls = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 13px;
`

const ArrowButton = styled.img`
  cursor: pointer;
  background-color: #eee;
  aspect-ratio: 1.31;
  object-fit: contain;
  object-position: center;
  width: 47px;
  border-radius: 15px;
  padding: 13px;
`

const SliderContainer = styled.div`
  position: relative;
  width: 95%;
  margin: 0%;
  align-self: start;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
`

const CategoriesProducts = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
`

const CategoryIconWrapper = styled.div`
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  align-items: center;
  width: 124px;
  flex-direction: column;
  justify-content: center;
  padding: 13px 0px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const CategoryIcon = styled.img`
  aspect-ratio: 1.16;
  object-fit: contain;
  object-position: center;
  width: 94px;
  border-radius: 10px;
`

const CategoryLabel = styled.h2`
  color: #000;
  align-self: center;
  margin-top: 9px;
  font: 700 14px Open Sans, sans-serif;
`

const ItemsSection = styled.section`
  color: #000;
  margin-top: 90px;
  font: 700 25px Open Sans, sans-serif;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`

const ImageSection = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`

const Card = styled.div`
  padding: 30px;
  border-radius: 10px;
  text-align: start;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    margin-bottom: 20px;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 0;
    position: relative;
    transition: all 0.3s ease;
    
    &.active {
      font-weight: 700;
      color: #0055b6;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #0055b6;
      }
    }

    &:hover {
      color: #0055b6;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 10px;
    border-bottom: 1px solid #eee;
    
    a {
      text-align: center;
      font-size: 16px;
      padding: 12px 0;
      margin-bottom: 0;
    }
  }
`

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  flex-grow: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const DoubleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;

  img {
    flex: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const ProductTxt = styled.h2`
  width: 50%;
  align-self: start;
  margin-top: 80px;
  font: 700 25px Open Sans, sans-serif;


   @media (max-width: 991px) {
    width: 100%;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px 0;

  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }
`

// Updated to be a horizontal slider with reduced height
const SmallProductsGrid = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  height: 160px; // Adjusted height for better consistency
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    height: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  @media (max-width: 991px) {
    gap: 6px;
    height: 130px; // Adjusted for better mobile view
  }
`

// Grid view for "View All" mode
const FullProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 15px;
  width: 100%;
  padding: 20px 0;

  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 10px;
  }
`

// Header for product sections with title and "View All" link
const ProductSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
`

const ViewAllLink = styled.a`
  color: #0055b6;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  margin-left: auto;
  
  &:hover {
    text-decoration: underline;
  }
`

const PromoBanner = styled.section`
  border-radius: 20px;
  background-color: #c0ddff;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 57px 0px 0 0;
  padding: 15px 70px 25px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 10px 0 0;
    padding: 0 20px;
  }
`

const PromoContent = styled.div`
  width: 755px;
  max-width: 100%;
`

const PromoRow = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }
`

const PromoCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const PromoImage = styled.img`
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const PromoTextCol = styled.div`
  align-self: center;
  line-height: normal;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    text-align: center;
  }
`

const PromoTitle = styled.h2`
  color: #000;
  align-self: stretch;
  margin: auto 0;
  font: 700 80px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`

const PromoDescription = styled.h3`
  color: #000;
  align-self: stretch;
  margin: auto 0;
  font: 700 40px Open Sans, sans-serif;
`

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 76px 0 0 0px;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`

const FeaturesGrid = styled.div`
  gap: 50px;
  width: 80%;
  align-self: center;
  align-items: center;
  display: flex;

  @media (max-width: 991px) {
    align-items: stretch;
    width: 100%;
    gap: 30px;
  }
`

const FeatureCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const FeatureCard = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #000;
  justify-content: start;
  font: 15px Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`

const FeatureContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`

const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 81px;

  @media (max-width: 991px) {
    width: 50px;
  }
`

const FeatureTitle = styled.h3`
  font-weight: 600;
  text-align: center;
  margin-top: 11px;
`

const FeatureDescription = styled.p`
  font-weight: 400;
  text-align: center;
  align-self: stretch;
  margin-top: -7px;

  @media (max-width: 991px) {
    margin-top: 0px;
  }
`

const NewsletterSection = styled.section`
  background-color: #191919;
  display: flex;
  margin: 107px 0 0 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: Inter, sans-serif;
  color: #fff;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  padding: 78px 0;
  align-self: stretch;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 60px 20px;
  }
`

const NewsletterContent = styled.div`
  display: flex;
  width: 542px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`

const NewsletterTitle = styled.h2`
  font-size: 20px;
`

const NewsletterDescription = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
`

const NewsletterForm = styled.form`
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 14px;
  align-items: end;
  font-size: 15px;
  color: #000;
  white-space: nowrap;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    white-space: initial;
  }
`

const EmailInput = styled.input`
  align-self: stretch;
  padding: 0 10px;
  width: 542px;
  display: flex;
  border: none;
  font-size: 15px;
  color: #000;
  white-space: nowrap;
`

const NewsletterButton = styled.button`
  align-self: end;
  background-color: #c0ddff;
  padding: 11px 39px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`

const TrendCard = styled.div`
  background: linear-gradient(135deg,rgb(0, 6, 116) 0%, #0055b6 100%);
  border-radius: 10px;
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 10px;
    position: relative;
    z-index: 2;
  }
`

const HighlightCircle = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;

  img {
    width: 24px;
    height: 24px;
  }
`

// Simplified Product Card Component (renamed to avoid conflicts)
const SimpleProductCardStyled = styled.div`
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 160px;
  flex-shrink: 0;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 991px) {
    min-width: 130px;
  }
  
  // Make cards in SmallProductsGrid much smaller
  ${SmallProductsGrid} & {
    min-width: 120px; // Increased minimum width for better consistency
    height: 100%;
    margin-right: 0; // Removed negative margin
    
    @media (max-width: 991px) {
      min-width: 100px; // Adjusted mobile width
    }
  }
  
  // Make cards in FullProductsGrid smaller too
  ${FullProductsGrid} & {
    min-width: 0; // Allow the grid to control the width
    width: 100%;
    height: auto;
  }
`

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  
  ${SmallProductsGrid} & {
    aspect-ratio: 1;
    height: 110px; // Adjusted height to match container
    
    @media (max-width: 991px) {
      height: 90px; // Adjusted mobile height
    }
  }
  
  ${FullProductsGrid} & {
    height: 140px;
    
    @media (max-width: 991px) {
      height: 120px;
    }
  }
`

const ProductInfo = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${SmallProductsGrid} & {
    padding: 4px;
    height: 40px;
  }
  
  ${FullProductsGrid} & {
    padding: 8px;
    height: auto;
  }
`

const ProductDetails = styled.div`
  flex: 1;
  min-width: 0; // Needed for text-overflow to work
`

const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  ${SmallProductsGrid} & {
    font-size: 11px;
    margin: 0 0 2px 0;
    line-height: 1.2;
  }
  
  ${FullProductsGrid} & {
    font-size: 14px;
    margin: 0 0 6px 0;
  }
`

const ProductPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  display: block;
  
  ${SmallProductsGrid} & {
    font-size: 12px;
  }
  
  ${FullProductsGrid} & {
    font-size: 15px;
  }
`

const AddToCartButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
  margin-left: 8px;
  
  &:hover {
    background-color: #003d82;
  }
  
  ${SmallProductsGrid} & {
    width: 24px;
    height: 24px;
    margin-left: 4px;
  }
`

const CartIcon = styled.img`
  width: 16px;
  height: 16px;
  filter: invert(100%);
  
  ${SmallProductsGrid} & {
    width: 12px;
    height: 12px;
  }
`

// Types
interface Category {
  id: number
  name: string
  image: string
  link: string
}

interface SimpleProductCardProps {
  image: string
  title: string
  price: number
  id: number
}

const SimpleProductCard: React.FC<SimpleProductCardProps> = ({ image, title, price }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: Math.random(), // Temporary ID solution
      image,
      title,
      price
    });
  };

  return (
    <SimpleProductCardStyled>
      <Link to="/product-details">
        <ProductImageWrapper>
          <ProductImage src={image || "/placeholder.svg"} alt={title} />
        </ProductImageWrapper>
      </Link>
      <ProductInfo>
        <ProductDetails>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </ProductDetails>
        <AddToCartButton onClick={handleAddToCart}>
          <CartIcon src="/imgs/Buy - 6.png" alt="Add to cart" />
        </AddToCartButton>
      </ProductInfo>
    </SimpleProductCardStyled>
  )
}

// Define the actual categories
const actualCategories: Category[] = [
  { id: 1, name: "Phones", image: "/imgs/Rectangle 9.png", link: "/phones" },
  { id: 2, name: "Laptops", image: "/imgs/Rectangle 9.png", link: "/laptops" },
  { id: 3, name: "Tablets", image: "/imgs/Rectangle 9.png", link: "/tablets" },
  { id: 4, name: "Headphones", image: "/imgs/Rectangle 9.png", link: "/headphones" },
  { id: 5, name: "Cameras", image: "/imgs/Rectangle 9.png", link: "/cameras" },
  { id: 6, name: "TVs", image: "/imgs/Rectangle 9.png", link: "/tvs" },
  { id: 7, name: "Speakers", image: "/imgs/Rectangle 9.png", link: "/speakers" },
  { id: 8, name: "Wearables", image: "/imgs/Rectangle 9.png", link: "/wearables" },
  { id: 9, name: "Gaming", image: "/imgs/Rectangle 9.png", link: "/gaming" },
  { id: 10, name: "Accessories", image: "/imgs/Rectangle 9.png", link: "/accessories" },
  { id: 11, name: "Smart Home", image: "/imgs/Rectangle 9.png", link: "/smart-home" },
  { id: 12, name: "Office", image: "/imgs/Rectangle 9.png", link: "/office" },
  { id: 13, name: "Audio", image: "/imgs/Rectangle 9.png", link: "/audio" },
  { id: 14, name: "Storage", image: "/imgs/Rectangle 9.png", link: "/storage" },
  { id: 15, name: "Networking", image: "/imgs/Rectangle 9.png", link: "/networking" },
  { id: 16, name: "Components", image: "/imgs/Rectangle 9.png", link: "/components" },
]

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("top-rated")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showAllCategoryProducts, setShowAllCategoryProducts] = useState(false)
  const [showAllTabProducts, setShowAllTabProducts] = useState(false)

  const slides = [
    { id: 1, image: "/imgs/Banner 1.png" },
    { id: 2, image: "/imgs/Banner 2.png" },
    { id: 3, image: "/imgs/Banner 3.png" },
    { id: 4, image: "/imgs/Banner 4.png" },
    { id: 5, image: "/imgs/Banner 5.png" },
  ]

  // Filter products based on the active tab
  const getFilteredProducts = () => {
    switch (activeTab) {
      case "top-rated":
        return mockProducts.filter((product) => product.rating >= 4.5).slice(0, showAllTabProducts ? undefined : 8)
      case "latest-arrivals":
        // Assuming mockProducts has a date field, sort by most recent
        return [...mockProducts].sort((a, b) => b.id - a.id).slice(0, showAllTabProducts ? undefined : 8)
      case "best-deals":
        // Assuming mockProducts has a discount field or we can calculate best deals
        return mockProducts.filter((product) => product.price < 100).slice(0, showAllTabProducts ? undefined : 8)
      default:
        return mockProducts.slice(0, showAllTabProducts ? undefined : 8)
    }
  }

  // Get products for the selected category
  const getCategoryProducts = () => {
    if (!selectedCategory) return mockProducts.slice(0, showAllCategoryProducts ? undefined : 8)
    return mockProducts
      .filter((product) => product.category?.toLowerCase() === selectedCategory.toLowerCase())
      .slice(0, showAllCategoryProducts ? undefined : 8)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) => (prev < actualCategories.length - 4 ? prev + 1 : 0))
  }

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prev) => (prev > 0 ? prev - 1 : actualCategories.length - 4))
  }

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setShowAllCategoryProducts(false)
    // You could also navigate to a category page here
    // history.push(`/category/${categoryName.toLowerCase()}`);
  }

  useEffect(() => {
    const autoRotateInterval = setInterval(handleNextCategory, 3000)
    return () => clearInterval(autoRotateInterval)
  }, [])

  // Reset view all state when tab changes
  useEffect(() => {
    setShowAllTabProducts(false)
  }, [activeTab])

  return (
    <LandingContainer>
      <Header />
      <HeroSection>
        {slides.map((slide, index) => (
          <HeroSlide key={slide.id} active={index === currentSlide}>
            <img src={slide.image || "/placeholder.svg"} alt={`Banner ${slide.id}`} />
          </HeroSlide>
        ))}
      </HeroSection>

      <MainContent>
        <CategoriesSection>
          <CategoryTitle>
            Browse by Category Shop.
            <span style={{ color: "#bbbbbb" }}>the best way to buy the products you love.</span>
          </CategoryTitle>

          <HeroControls>
            <ArrowButton src="/imgs/Vector (1).png" alt="Previous" onClick={handlePrevCategory} />
            <ArrowButton src="/imgs/Vector (2).png" alt="Next" onClick={handleNextCategory} />
          </HeroControls>

          <SliderContainer>
            <CategoriesProducts
              style={{
                transform: `translateX(-${currentCategoryIndex * 144}px)`,
              }}
            >
              {actualCategories.map((category) => (
                <div key={category.id} onClick={() => handleCategoryClick(category.name)}>
                  <div className="categories-products-icon">
                    <CategoryIconWrapper>
                      <CategoryIcon src={category.image} alt={category.name} />
                    </CategoryIconWrapper>
                    <CategoryLabel>{category.name}</CategoryLabel>
                  </div>
                </div>
              ))}
            </CategoriesProducts>
          </SliderContainer>

          {/* Display products for selected category - using SimpleProductCard */}
          {selectedCategory && (
            <div style={{ marginTop: "30px", width: "100%" }}>
              <ProductSectionHeader>
                <ViewAllLink onClick={() => setShowAllCategoryProducts(!showAllCategoryProducts)}>
                  {showAllCategoryProducts ? "Show Less" : "View All " + selectedCategory}
                </ViewAllLink>
              </ProductSectionHeader>

              {showAllCategoryProducts ? (
                <FullProductsGrid>
                  {getCategoryProducts().map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
                </FullProductsGrid>
              ) : (
                <SmallProductsGrid>
                  {getCategoryProducts().map((product) => (
                    <SimpleProductCard
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                    />
                  ))}
                </SmallProductsGrid>
              )}
            </div>
          )}
        </CategoriesSection>

        <ItemsSection>
          <h3>
            Our Latest Items.
            <span style={{ color: "#bbbbbb" }}>Have A Look At What&apos;s New, Now.</span>
          </h3>

          <ImageSection>
            <Card>
              <a
                href="#top-rated"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab("top-rated")
                }}
                className={activeTab === "top-rated" ? "active" : ""}
              >
                Top Rated
              </a>
              <CardContent>
                <img src="/imgs/Rectangle 17.png" alt="Nature Image" />
              </CardContent>
            </Card>

            <Card>
              <a
                href="#latest-arrivals"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab("latest-arrivals")
                }}
                className={activeTab === "latest-arrivals" ? "active" : ""}
              >
                Latest Arrivals
              </a>
              <GridContainer>
                <img src="/imgs/Rectangle 51.png" alt="Forest" />
                <img src="/imgs/Rectangle 52.png" alt="Ocean" />
                <img src="/imgs/Rectangle 53.png" alt="Mountain" />
                <img src="/imgs/Rectangle 54.png" alt="City" />
              </GridContainer>
            </Card>

            <Card>
              <a
                href="#best-deals"
                onClick={(e) => {
                  e.preventDefault()
                  setActiveTab("best-deals")
                }}
                className={activeTab === "best-deals" ? "active" : ""}
              >
                Best Deals
              </a>
              <DoubleImageContainer>
                <img src="/imgs/Rectangle 49.png" alt="Tech Image" />
                <img src="/imgs/Rectangle 50.png" alt="Business Image" />
              </DoubleImageContainer>
            </Card>
          </ImageSection>

          {/* Display products based on active tab - using SimpleProductCard */}
          <div style={{ marginTop: "30px", width: "100%" }}>
            <ProductSectionHeader>
              <ViewAllLink onClick={() => setShowAllTabProducts(!showAllTabProducts)}>
                {showAllTabProducts
                  ? "Show Less"
                  : "View All " +
                    (activeTab === "top-rated"
                      ? "Top Rated"
                      : activeTab === "latest-arrivals"
                        ? "Latest Arrivals"
                        : "Best Deals")}
              </ViewAllLink>
            </ProductSectionHeader>

            {showAllTabProducts ? (
              <FullProductsGrid>
                {getFilteredProducts().map((product) => (
                  <SimpleProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </FullProductsGrid>
            ) : (
              <SmallProductsGrid>
                {getFilteredProducts().map((product) => (
                  <SimpleProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                ))}
              </SmallProductsGrid>
            )}
          </div>
        </ItemsSection>

        <ProductTxt>
          On Sale.
          <span style={{ color: "#bbbbbb" }}>Your favorite gadgets, delivered right to your doorstep in no time.</span>
        </ProductTxt>

        <ProductsGrid>
          <TrendCard>
            <p>
              Trend
              <br />
              Products
            </p>
            <HighlightCircle>
              <img src="/imgs/Vector.png" alt="Trending" />
            </HighlightCircle>
          </TrendCard>

          {/* Using the original ProductCard for the "On Sale" section */}
          {mockProducts.slice().map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
            />
          ))}
        </ProductsGrid>

        <PromoBanner>
          <PromoContent>
            <PromoRow>
              <PromoCol>
                <PromoImage src="/imgs/Watch.png" alt="Fast Sales promotion" />
              </PromoCol>
              <PromoTextCol>
                <PromoTitle>Fast Sales</PromoTitle>
                <PromoDescription>Yanns tech Hub Sales.</PromoDescription>
              </PromoTextCol>
            </PromoRow>
          </PromoContent>
        </PromoBanner>

        <FeaturesSection>
          <FeaturesGrid>
            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/delivery.png" alt="" />
                  <FeatureTitle>Free Delivery</FeatureTitle>
                  <FeatureDescription>And free returns. See checkout for delivery dates.</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>

            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/0-percent.png" alt="" />
                  <FeatureTitle>Pay 0% interest for up to 24months</FeatureTitle>
                  <FeatureDescription>Choose any items of your choice without paying any interest.</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>

            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/support.png" alt="" />
                  <FeatureTitle>Customer Support</FeatureTitle>
                  <FeatureDescription>Helping customers resolve issues with products or services.</FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>
          </FeaturesGrid>
        </FeaturesSection>
      </MainContent>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>Subscribe for Newsletter</NewsletterTitle>
          <NewsletterDescription>Subscribe to get latest updates and information.</NewsletterDescription>
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <EmailInput type="email" placeholder="Enter your email" required />
            <NewsletterButton type="submit">Send</NewsletterButton>
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterSection>

      <Footer />
    </LandingContainer>
  )
}

export default Index