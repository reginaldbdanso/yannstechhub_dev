"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

interface Product {
  id: number
  image: string
  title: string
  price: number
  rating: number
  reviews: number
  brand: string
  condition: "New" | "Second" | "Refurbished"
  category: string
}

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
  }
`

const Breadcrumb = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  color: #000;
  font: 15px Open Sans, sans-serif;
`

const BreadcrumbItem = styled.span<{ bold?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
`

const SortContainer = styled.div`
  display: flex;
  gap: 5px;
`

const SortLabel = styled.label`
  color: #000;
  flex-grow: 1;
  margin: auto 0;
  font: 500 15px Open Sans, sans-serif;
`

const SortSelect = styled.select`
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 30px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
`

const MainGrid = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 23px 0 -24px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`

const GridContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`

const SidebarContent = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin: 0% 5%;

  @media (max-width: 991px) {
    margin-top: 33px;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
  }
`

const CategoriesSection = styled.div`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #000;
  padding: 18px 16px 38px;
  font: 500 15px Open Sans, sans-serif;

  @media (max-width: 991px) {
    padding-right: 20px;
    width: 100%;
  }
`

const CategoryTitle = styled.h2`
  font: 700 15px Open Sans, sans-serif;
  margin-left: 24px;
  margin-bottom:10px;
  margin-top: 15px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`

const CategoryDivider = styled.div`
  align-self: stretch;
  margin-top: 0px;
  height: 0px;
  border: 1px solid #d5d5d5;
`

const CategoryNav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }
`

const CategoryLink = styled.button<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#000" : "#666")};
  text-decoration: none;
  font-family: Inter, sans-serif;
  margin: 5px 0 0 24px;
  padding-top: 0.5rem;
  display: block;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "700" : "400")};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`

const PriceSection = styled.div`
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #000;
  padding: 18px 30px 38px;
  font: 500 15px Open Sans, sans-serif;

  @media (max-width: 991px) {
    width: 100%;
    padding: 18px 20px 38px;
  }
`

const FilterTitle = styled.h3`
  font: 700 15px Open Sans, sans-serif;
  margin-bottom: 20px;
`

const PriceRangeContainer = styled.div`
  align-self: stretch;
  display: flex;
  gap: 20px;
  color: #000;
  white-space: nowrap;
  margin-top: -10px;
  justify-content: space-between;
  font: 500 15px Open Sans, sans-serif;
  width: 100%;
`

const PriceRange = styled.input`
  border-radius: 10px;
  background-color: #eef2f4;
  padding: 10px 15px;
  flex: 1;
  text-align: center;
  border: none;
  width: 80px;
`

const PriceRangeText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const BrandName = styled.h3`
  color: #000;
  margin-top: 24px;
  font: 700 15px Open Sans, sans-serif;
`

const BrandSelect = styled.select`
  border-radius: 10px;
  background-color: #eef2f4;
  align-self: stretch;
  display: flex;
  margin-top: 5px;
  gap: 20px;
  color: #000;
  justify-content: space-between;
  padding: 10px 13px;
  font: 500 15px Open Sans, sans-serif;
  width: 100%;
  border-style: none;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`

const SortTitle = styled.h3`
  color: #000;
  margin-top: 20px;
  font: 700 15px Open Sans, sans-serif;
`

const SortOptions = styled.select`
  border-radius: 10px;
  background-color: #eef2f4;
  align-self: stretch;
  display: flex;
  margin-top: 5px;
  gap: 20px;
  color: #000;
  justify-content: space-between;
  padding: 10px 13px;
  font: 500 15px Open Sans, sans-serif;
  width: 100%;
  border: none;
  cursor: pointer;
`

const ConditionsTitle = styled.h3`
  color: #000;
  margin-top: 25px;
  margin-bottom: -5px;
  font: 700 15px Open Sans, sans-serif;
`

const ConditionOption = styled.div`
  display: flex;
  margin-top: 14px;
  align-items: center;
  gap: 10px;
  color: #000;
  white-space: nowrap;
  justify-content: start;
  font: 500 15px Open Sans, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Checkbox = styled.input`
  border-radius: 5px;
  align-self: stretch;
  width: 17px;
  height: 16px;
  margin: auto 0;
  border: 1px solid #afafaf;
  cursor: pointer;
`

const ConditionLabel = styled.label`
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 70%;

  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 5px;
    align-self: center;
    margin-top: 20px;
    max-width: 95%;
  }
`

const ProductCard = styled.article`
  border-radius: 10px;
  background-color: #fff;
  padding: 15px 16px 26px;
  border: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    padding: 5px 5px 10px;
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

  @media (max-width: 991px) {
    width: 13px;
    top: 11px;
    left: 12px;
  }
`

const ProductTitle = styled.h2`
  color: #000;
  margin-top: 28px;
  font: 700 14px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 0px;
    text-align: center;
    font: 700 12px Open Sans, sans-serif;
  }
`

const ProductDetails = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 0%;
  }
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

  @media (max-width: 991px) {
    gap: 5px;
  }
`

const RatingIcon = styled.img`
  width: 16px;
  aspect-ratio: 1;

  @media (max-width: 991px) {
    width: 12px;
    margin: 4px 0px;
  }
`

const Price = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 7px;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`

const CartButton = styled.button`
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    align-self: flex-end;
    margin-top: -20px;
  }
`

const CartIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 25px;
  margin: 3px 0px;

  @media (max-width: 991px) {
    width: 13px;
  }
`

const NoProductsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`

const ApplyFilterButton = styled.button`
  background-color: #000;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`

const FilterCount = styled.span`
  display: inline-block;
  background-color: #000;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  margin-left: 8px;
`

const ClearFiltersButton = styled.button`
  background-color: transparent;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px 15px;
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`

const Shop: React.FC = () => {
  const allProducts: Product[] = [
    {
      id: 1,
      image: "/imgs/phone 1.png",
      title: "Samsung Galaxy S23 Ultra",
      rating: 4.8,
      reviews: 320,
      price: 1199.99,
      brand: "Samsung",
      condition: "New",
      category: "Phones",
    },
    {
      id: 2,
      image: "/imgs/phone 2.png",
      title: "Apple iPhone 14 Pro Max",
      rating: 4.9,
      reviews: 450,
      price: 1299.99,
      brand: "Apple",
      condition: "New",
      category: "Phones",
    },
    {
      id: 3,
      image: "/imgs/phone 3.png",
      title: "Google Pixel 7 Pro",
      rating: 4.7,
      reviews: 280,
      price: 899.99,
      brand: "Google",
      condition: "New",
      category: "Phones",
    },
    {
      id: 4,
      image: "/imgs/phone 4.png",
      title: "OnePlus 11 5G",
      rating: 4.6,
      reviews: 210,
      price: 799.99,
      brand: "OnePlus",
      condition: "New",
      category: "Phones",
    },
    {
      id: 5,
      image: "/imgs/phone 5.png",
      title: "Xiaomi 13 Pro",
      rating: 4.5,
      reviews: 150,
      price: 749.99,
      brand: "Xiaomi",
      condition: "Second",
      category: "Phones",
    },
    {
      id: 6,
      image: "/imgs/phone 6.png",
      title: "Samsung Galaxy Z Flip 4",
      rating: 4.4,
      reviews: 190,
      price: 999.99,
      brand: "Samsung",
      condition: "New",
      category: "Phones",
    },
    {
      id: 7,
      image: "/imgs/phone 7.png",
      title: "Apple iPhone 13",
      rating: 4.7,
      reviews: 340,
      price: 799.99,
      brand: "Apple",
      condition: "Refurbished",
      category: "Phones",
    },
    {
      id: 8,
      image: "/imgs/phone 8.png",
      title: "Google Pixel 6a",
      rating: 4.3,
      reviews: 130,
      price: 449.99,
      brand: "Google",
      condition: "Second",
      category: "Phones",
    },
    {
      id: 9,
      image: "/imgs/phone 9.png",
      title: "Realme GT 3",
      rating: 4.2,
      reviews: 120,
      price: 599.99,
      brand: "Realme",
      condition: "New",
      category: "Phones",
    },
    {
      id: 10,
      image: "/imgs/phone 10.png",
      title: "Nothing Phone (1)",
      rating: 4.1,
      reviews: 100,
      price: 499.99,
      brand: "Nothing",
      condition: "New",
      category: "Phones",
    },
    {
      id: 11,
      image: "/imgs/phone 11.png",
      title: "Samsung Galaxy A54",
      rating: 4.0,
      reviews: 220,
      price: 449.99,
      brand: "Samsung",
      condition: "Refurbished",
      category: "Phones",
    },
    {
      id: 12,
      image: "/imgs/phone 12.png",
      title: "Motorola Edge 30 Ultra",
      rating: 4.3,
      reviews: 140,
      price: 699.99,
      brand: "Motorola",
      condition: "Second",
      category: "Phones",
    },
    // Adding products for other categories
    {
      id: 13,
      image: "/placeholder.svg",
      title: "Dell XPS 15",
      rating: 4.7,
      reviews: 280,
      price: 1499.99,
      brand: "Dell",
      condition: "New",
      category: "Laptops",
    },
    {
      id: 14,
      image: "/placeholder.svg",
      title: 'MacBook Pro 16"',
      rating: 4.8,
      reviews: 350,
      price: 2499.99,
      brand: "Apple",
      condition: "New",
      category: "Laptops",
    },
    {
      id: 15,
      image: "/placeholder.svg",
      title: "Logitech MX Master 3",
      rating: 4.6,
      reviews: 420,
      price: 99.99,
      brand: "Logitech",
      condition: "New",
      category: "Accessories",
    },
    {
      id: 16,
      image: "/placeholder.svg",
      title: 'Samsung 32" Curved Monitor',
      rating: 4.5,
      reviews: 180,
      price: 349.99,
      brand: "Samsung",
      condition: "New",
      category: "Monitors",
    },
    {
      id: 17,
      image: "/placeholder.svg",
      title: "TP-Link Archer AX6000",
      rating: 4.3,
      reviews: 150,
      price: 299.99,
      brand: "TP-Link",
      condition: "New",
      category: "Network",
    },
    {
      id: 18,
      image: "/placeholder.svg",
      title: "Cyberpunk 2077",
      rating: 4.0,
      reviews: 520,
      price: 59.99,
      brand: "CD Projekt",
      condition: "New",
      category: "PC Games",
    },
  ]

  const categories = [
    "All Categories",
    "Phones",
    "Computer",
    "Accessories",
    "Laptops",
    "Monitors",
    "Network",
    "PC Games",
    "Fashion",
  ]

  // Extract unique brands from products
  const brands = ["All Brands", ...Array.from(new Set(allProducts.map((product) => product.brand)))]

  // State for filters
  const [minPrice, setMinPrice] = useState<string>("100")
  const [maxPrice, setMaxPrice] = useState<string>("1500")
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands")
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories")
  const [conditions, setConditions] = useState({
    new: false,
    second: false,
    refurbish: false,
  })
  const [sortOption, setSortOption] = useState<string>("recommended")
  const [mainSortOption, setMainSortOption] = useState<string>("recommended")

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)

  // Handle condition checkbox changes
  const handleConditionChange = (condition: keyof typeof conditions) => {
    setConditions((prev) => ({
      ...prev,
      [condition]: !prev[condition],
    }))
  }

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    applyFilters(category, selectedBrand, minPrice, maxPrice, conditions, sortOption || mainSortOption)
  }

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0
    if (selectedCategory !== "All Categories") count++
    if (selectedBrand !== "All Brands") count++
    if (conditions.new || conditions.second || conditions.refurbish) count++
    if (minPrice !== "100" || maxPrice !== "1500") count++
    return count
  }

  // Clear all filters
  const clearAllFilters = () => {
    setMinPrice("100")
    setMaxPrice("1500")
    setSelectedBrand("All Brands")
    setSelectedCategory("All Categories")
    setConditions({
      new: false,
      second: false,
      refurbish: false,
    })
    setSortOption("recommended")
    setFilteredProducts(allProducts)
  }

  // Apply filters and sorting
  const applyFilters = (
    category = selectedCategory,
    brand = selectedBrand,
    min = minPrice,
    max = maxPrice,
    conditionState = conditions,
    sort = sortOption || mainSortOption,
  ) => {
    let filtered = [...allProducts]

    // Filter by category
    if (category !== "All Categories") {
      filtered = filtered.filter((product) => product.category === category)
    }

    // Filter by price
    const minPriceValue = Number.parseFloat(min) || 0
    const maxPriceValue = Number.parseFloat(max) || Number.POSITIVE_INFINITY
    filtered = filtered.filter((product) => product.price >= minPriceValue && product.price <= maxPriceValue)

    // Filter by brand
    if (brand !== "All Brands") {
      filtered = filtered.filter((product) => product.brand === brand)
    }

    // Filter by condition
    const selectedConditions: string[] = []
    if (conditionState.new) selectedConditions.push("New")
    if (conditionState.second) selectedConditions.push("Second")
    if (conditionState.refurbish) selectedConditions.push("Refurbished")

    if (selectedConditions.length > 0) {
      filtered = filtered.filter((product) => selectedConditions.includes(product.condition))
    }

    // Apply sorting
    switch (sort) {
      case "reviews":
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
      case "low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      // Default is recommended (no sorting)
    }

    setFilteredProducts(filtered)
  }

  // Apply filters when component mounts and when main sort changes
  useEffect(() => {
    applyFilters(selectedCategory, selectedBrand, minPrice, maxPrice, conditions, sortOption || mainSortOption)
  }, [selectedCategory, selectedBrand, minPrice, maxPrice, conditions, sortOption, mainSortOption])

  const ResetFiltersButton = styled(ApplyFilterButton)`
  background-color: #333;
  
  &:hover {
    background-color: #000;
  }
`

  return (
    <Container>
      <MainContent>
        <Header />
        <Divider top />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Shop {selectedCategory !== "All Categories" && `/ ${selectedCategory}`}</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect id="sortSelect" value={mainSortOption} onChange={(e) => setMainSortOption(e.target.value)}>
              <option value="recommended">Recommended</option>
              <option value="reviews">Best Reviews</option>
              <option value="low">Low Price</option>
              <option value="high">High Price</option>
              <option value="rating">Top Rated</option>
            </SortSelect>
          </SortContainer>
        </BreadcrumbSort>
        <Divider />
        <MainGrid>
          <GridContainer>
            <Sidebar>
              <SidebarContent>
                <CategoriesSection>
                  <CategoryTitle>Categories</CategoryTitle>
                  <CategoryDivider />
                  <CategoryNav>
                    <ul>
                      {categories.map((category, index) => (
                        <li key={index}>
                          <CategoryLink
                            onClick={() => handleCategorySelect(category)}
                            active={selectedCategory === category}
                          >
                            {category}
                          </CategoryLink>
                        </li>
                      ))}
                    </ul>
                  </CategoryNav>
                </CategoriesSection>
                <PriceSection>
                  <FilterTitle>
                    Filters
                    {getActiveFilterCount() > 0 && <FilterCount>{getActiveFilterCount()}</FilterCount>}
                  </FilterTitle>

                  <FilterTitle>Price Range</FilterTitle>
                  <PriceRangeContainer>
                    <PriceRange type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} min="0" />
                    <PriceRangeText>to</PriceRangeText>
                    <PriceRange type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} min="0" />
                  </PriceRangeContainer>

                  <BrandName>Brand Name</BrandName>
                  <BrandSelect
                    aria-label="Select brand"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    {brands.map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </BrandSelect>

                  <SortTitle>Sort by</SortTitle>
                  <SortOptions value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="reviews">Reviews</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </SortOptions>

                  <ConditionsTitle>Conditions</ConditionsTitle>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="new"
                      checked={conditions.new}
                      onChange={() => handleConditionChange("new")}
                    />
                    <ConditionLabel htmlFor="new">New</ConditionLabel>
                  </ConditionOption>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="second"
                      checked={conditions.second}
                      onChange={() => handleConditionChange("second")}
                    />
                    <ConditionLabel htmlFor="second">Second</ConditionLabel>
                  </ConditionOption>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="refurbish"
                      checked={conditions.refurbish}
                      onChange={() => handleConditionChange("refurbish")}
                    />
                    <ConditionLabel htmlFor="refurbish">Refurbished</ConditionLabel>
                  </ConditionOption>

                  <ResetFiltersButton onClick={clearAllFilters}>Reset Filters</ResetFiltersButton>

                  {getActiveFilterCount() > 0 && (
                    <ClearFiltersButton onClick={clearAllFilters}>Clear All Filters</ClearFiltersButton>
                  )}
                </PriceSection>
              </SidebarContent>
            </Sidebar>
            <ProductsGrid>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id}>
                    <Link to={`/product/${product.id}`}>
                      <ProductImageContainer>
                        <ProductImage src={product.image} alt={product.title} />
                        <WishlistIcon src="/imgs/favorie 1.png" alt="Add to wishlist" />
                      </ProductImageContainer>
                    </Link>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductDetails>
                      <RatingPrice>
                        <Rating>
                          <RatingIcon src="/imgs/star 1.png" alt="Rating" />
                          <span>
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </Rating>
                        <Price>${product.price.toFixed(2)}</Price>
                      </RatingPrice>
                      <CartButton aria-label="Add to cart">
                        <CartIcon src="/imgs/Buy - 6 (1).png" alt="" />
                      </CartButton>
                    </ProductDetails>
                  </ProductCard>
                ))
              ) : (
                <NoProductsMessage>
                  No products match your filter criteria. Try adjusting your filters.
                </NoProductsMessage>
              )}
            </ProductsGrid>
          </GridContainer>
        </MainGrid>
      </MainContent>
      <Footer />
    </Container>
  )
}

export default Shop

