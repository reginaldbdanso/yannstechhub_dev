"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
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
  overflow: hidden; /* Ensure overflow is hidden for the infinite loop effect */

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0% 0%;
  }
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

const CategoryTitle = styled.h3`
  color: #000;
  margin-top: 109px;
  font: 700 25px Open Sans, sans-serif;
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
    color: #9a9494;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 0;
    position: relative;
    transition: all 0.3s ease;
    
    &.active {
      font-weight: 700;
      color:rgb(6, 6, 6);
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color:rgb(6, 6, 6);
      }
    }

    &:hover {
      color:rgb(6, 6, 6);
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

// Update the SmallProductsGrid to have consistent card sizing with FullProductsGrid
// and improve the scrolling functionality
const SmallProductsGrid = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  overflow-x: auto;
  padding: 0;
  margin: 0;
  height: auto; // Remove fixed height to allow cards to determine the height
  scrollbar-width: thin;
  padding: 20px 0;
  
  &::-webkit-scrollbar {
    height: 5px;
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
    gap: 10px;
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
  margin-top: -60px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
  
  @media (max-width: 991px) {
    margin-top: 0px;
  }
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
    margin-top: 20px;
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
    width: 15px;
  }
`

// Update the SimpleProductCardStyled to have consistent sizing in both grid types
const SimpleProductCardStyled = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  text-align: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  // Make cards in SmallProductsGrid match FullProductsGrid
  ${SmallProductsGrid} & {
    min-width: 160px; // Match the minmax width from FullProductsGrid
    width: 160px; // Fixed width for consistency
    flex-shrink: 0; // Prevent shrinking in flex container
    
    @media (max-width: 991px) {
      min-width: 130px;
      width: 130px;
    }
  }
  
  // Make cards in FullProductsGrid smaller too
  ${FullProductsGrid} & {
    min-width: 0; // Allow the grid to control the width
    width: 100%;
  }
`

// Update the ProductOverlay to cover the entire image with a gradient
const ProductOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.88) 0%, rgb(0 0 0 / 62%) 50%, rgba(0, 0, 0, 0) 100%); 
  padding: 10px;
  color: white;
  transition: opacity 0.3s ease;
  
  h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
  }
  
  // ${SmallProductsGrid} & {
  //   padding: 6px;
    
  //   h3 {
  //     font-size: 12px;
  //   }
  }
`

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`

// Update the ProductImage to have consistent sizing
const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  
  ${SmallProductsGrid} & {
    height: 160px; // Match height with FullProductsGrid
    
    @media (max-width: 991px) {
      height: 130px;
    }
  }
  
  ${FullProductsGrid} & {
    height: 160px;
    
    @media (max-width: 991px) {
      height: 130px;
    }
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
  id: number
}

// Now replace the SimpleProductCard component with this updated version
const SimpleProductCard: React.FC<SimpleProductCardProps> = ({ image, title, id }) => {
  return (
    <SimpleProductCardStyled>
      <Link to={`/product/${id}`} state={{ product: { id, image, title } }}>
        <ProductImageWrapper>
          <ProductImage src={image || "/placeholder.svg"} alt={title} />
          <ProductOverlay>
            <h3>{title}</h3>
          </ProductOverlay>
        </ProductImageWrapper>
      </Link>
    </SimpleProductCardStyled>
  )
}

// Define the actual categories
// Extract unique categories from mockProducts
const getUniqueCategories = () => {
  const uniqueCategories: string[] = []
  const categoryIcons: Record<string, string> = {}

  // Collect unique categories and their icons
  mockProducts.forEach((product) => {
    if (product.category && !uniqueCategories.includes(product.category)) {
      uniqueCategories.push(product.category)

      // If the product has a categoryIcon, store it for this category
      if (product.categoryIcon) {
        categoryIcons[product.category] = product.categoryIcon
      }
    }
  })

  console.log("Unique categories found:", uniqueCategories)

  // Map to Category objects
  return uniqueCategories.map((category, index) => {
    const categorySlug = category.toLowerCase().replace(/\s+/g, "-")
    console.log(`Category: ${category}, Slug: ${categorySlug}`)

    // Use the category icon if available, otherwise use the first product image from this category
    let categoryImage = "/imgs/Rectangle 9.png" // Default fallback image

    if (categoryIcons[category]) {
      // If we have a dedicated category icon, use it
      categoryImage = categoryIcons[category]
    } else {
      // Otherwise, find the first product in this category and use its image
      const productInCategory = mockProducts.find((product) => product.category === category)
      if (productInCategory) {
        categoryImage = productInCategory.image
      }
    }

    return {
      id: index + 1,
      name: category,
      image: categoryImage,
      link: `/category/${categorySlug}`,
    }
  })
}

// Get categories dynamically from products
const actualCategories: Category[] = getUniqueCategories()

// Update the Index component to include these changes
const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("top-rated")
  const [showAllTabProducts, setShowAllTabProducts] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Create a reference to store the categories with clones for infinite loop
  const categoriesWithClones = useMemo(() => {
    if (actualCategories.length === 0) return []

    // Clone the first few categories and append them to the end
    // This creates the illusion of an infinite loop
    const numClones = Math.min(4, actualCategories.length)
    const clones = actualCategories.slice(0, numClones)
    return [...actualCategories, ...clones]
  }, [])

  const totalCategories = actualCategories.length

  const handleNextCategory = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentCategoryIndex((prev) => {
      // If we're at the end of the original items, prepare to loop
      if (prev >= totalCategories - 1) {
        // We'll handle the reset in the transitionend effect
        return prev + 1
      }
      return prev + 1
    })
  }

  const handlePrevCategory = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentCategoryIndex((prev) => {
      if (prev <= 0) {
        // For backward movement, jump to the end
        return totalCategories - 1
      }
      return prev - 1
    })
  }

  // Handle the transition end and reset position if needed
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false)

      // If we've scrolled past the original items to the clones
      if (currentCategoryIndex >= totalCategories) {
        // Immediately reset to the beginning without transition
        setTimeout(() => {
          const categoriesElement = document.querySelector(`.${CategoriesProducts.styledComponentId}`)
          if (categoriesElement) {
            categoriesElement.classList.add("no-transition")
            setCurrentCategoryIndex(0)

            // Force a reflow before removing the class
            // void categoriesElement.offsetWidth

            setTimeout(() => {
              categoriesElement.classList.remove("no-transition")
            }, 50)
          }
        }, 50)
      }
    }

    const categoriesElement = document.querySelector(`.${CategoriesProducts.styledComponentId}`)
    if (categoriesElement) {
      categoriesElement.addEventListener("transitionend", handleTransitionEnd)
      return () => {
        categoriesElement.removeEventListener("transitionend", handleTransitionEnd)
      }
    }
  }, [currentCategoryIndex, totalCategories])

  // Auto-rotate categories
  useEffect(() => {
    const autoRotateInterval = setInterval(handleNextCategory, 3000)
    return () => clearInterval(autoRotateInterval)
  }, [isTransitioning])

  // Add a global style for the no-transition class
  useEffect(() => {
    // Add a style tag for the no-transition class
    const styleTag = document.createElement("style")
    styleTag.innerHTML = `.no-transition { transition: none !important; }`
    document.head.appendChild(styleTag)

    return () => {
      document.head.removeChild(styleTag)
    }
  }, [])

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
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
            {categoriesWithClones.length > 0 ? (
              <CategoriesProducts
                style={{
                  transform: `translateX(-${currentCategoryIndex * 144}px)`,
                }}
              >
                {categoriesWithClones.map((category, index) => (
                  <div key={`${category.id}-${index}`} style={{ cursor: "pointer" }}>
                    <Link
                      to={category.link}
                      style={{ textDecoration: "none", display: "block" }}
                      onClick={() => {
                        console.log(`Clicked category: ${category.name}, navigating to: ${category.link}`)
                      }}
                    >
                      <CategoryIconWrapper>
                        <CategoryIcon src={category.image} alt={category.name} />
                        <CategoryLabel>{category.name}</CategoryLabel>
                      </CategoryIconWrapper>
                    </Link>
                  </div>
                ))}
              </CategoriesProducts>
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>No categories found</div>
            )}
          </SliderContainer>
        </CategoriesSection>

        <ItemsSection>
          <h3>
            Our Latest Items.
            <span style={{ color: "#bbbbbb" }}>Have A Look At What&apos;s New, Now.</span>
          </h3>

          <ImageSection>
            <Card>
              <CardContent>
                <img src="/imgs/Rectangle 17.png" alt="Nature Image" />
              </CardContent>
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
            </Card>

            <Card>
              <GridContainer>
                <img src="/imgs/Rectangle 51.png" alt="Forest" />
                <img src="/imgs/Rectangle 52.png" alt="Ocean" />
                <img src="/imgs/Rectangle 53.png" alt="Mountain" />
                <img src="/imgs/Rectangle 54.png" alt="City" />
              </GridContainer>
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
            </Card>

            <Card>
              <DoubleImageContainer>
                <img src="/imgs/Rectangle 49.png" alt="Tech Image" />
                <img src="/imgs/Rectangle 50.png" alt="Business Image" />
              </DoubleImageContainer>
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
            </Card>
          </ImageSection>

          {/* Display products based on active tab - using SimpleProductCard */}
          <div style={{ marginTop: "30px", width: "100%" }}>
            <ProductSectionHeader>
              <ViewAllLink onClick={() => setShowAllTabProducts(!showAllTabProducts)}>
                {showAllTabProducts ? "Show Less" : "View All"}
              </ViewAllLink>
            </ProductSectionHeader>

            {showAllTabProducts ? (
              <FullProductsGrid>
                {getFilteredProducts().map((product) => (
                  <SimpleProductCard key={product.id} id={product.id} image={product.image} title={product.title} />
                ))}
              </FullProductsGrid>
            ) : (
              <SmallProductsGrid>
                {getFilteredProducts().map((product) => (
                  <SimpleProductCard key={product.id} id={product.id} image={product.image} title={product.title} />
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
              noBorder
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

