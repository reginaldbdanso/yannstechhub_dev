"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
// Fix import paths to use relative paths
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { mockProducts, type Product } from "../data/mockProducts"

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

const NoProductsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`

const ResetFiltersButton = styled.button`
  background-color: #333;
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
    background-color: #000;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`

const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.active ? "#080808" : "#d5d5d5")};
  background-color: ${(props) => (props.active ? "#080808" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#080808" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
const ItemsPerPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`

const ItemsPerPageLabel = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
`

const ItemsPerPageSelect = styled.select`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
`

// Add a styled component for the load more button
const Shop: React.FC = () => {
  // Extract unique categories from mockProducts
  const categories = ["All Categories", ...Array.from(new Set(mockProducts.map((product) => product.category)))]

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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)

  const [itemsPerPage, setItemsPerPage] = useState<number>(12)
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  // Debug logging
  useEffect(() => {
    console.log("Available categories:", Array.from(new Set(mockProducts.map((p) => p.category))))
    console.log(
      "Accessories products:",
      mockProducts.filter((p) => p.category === "Accessories"),
    )

    if (selectedCategory === "Accessories") {
      console.log("Filtered products for Accessories:", filteredProducts)
      console.log("Selected conditions:", conditions)
      console.log("Selected brand:", selectedBrand)
      console.log("Price range:", minPrice, maxPrice)
    }
  }, [selectedCategory, filteredProducts, conditions, selectedBrand, minPrice, maxPrice])

  // Extract unique brands from mockProducts
  const brands = ["All Brands", ...Array.from(new Set(mockProducts.map((product) => product.brand)))]

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
    setFilteredProducts(mockProducts)
  }

  // Apply filters and sorting
  const applyFilters = () => {
    // Start with all products
    let filtered = [...mockProducts]

    console.log("Starting filter with", filtered.length, "products")

    // Filter by category
    if (selectedCategory !== "All Categories") {
      // Fix: Use direct string comparison but log each product for debugging
      filtered = filtered.filter((product) => {
        // Log each product's category when filtering for Accessories
        if (selectedCategory === "Accessories") {
          console.log(
            `Product ${product.id} (${product.title}): category="${product.category}", selected="${selectedCategory}"`,
          )
        }
        return product.category === selectedCategory
      })
      console.log(`After category filter (${selectedCategory}):`, filtered.length, "products")
    }

    // Filter by price - POTENTIAL ISSUE: Check if price filtering is excluding accessories
    const minPriceValue = Number.parseFloat(minPrice) || 0
    const maxPriceValue = Number.parseFloat(maxPrice) || Number.POSITIVE_INFINITY

    // Log price range when filtering for Accessories
    if (selectedCategory === "Accessories") {
      console.log(`Price range: ${minPriceValue} to ${maxPriceValue}`)
      filtered.forEach((product) => {
        console.log(
          `Product ${product.id} (${product.title}): price=${product.price}, in range? ${product.price >= minPriceValue && product.price <= maxPriceValue}`,
        )
      })
    }

    filtered = filtered.filter((product) => product.price >= minPriceValue && product.price <= maxPriceValue)
    console.log("After price filter:", filtered.length, "products")

    // Filter by brand
    if (selectedBrand !== "All Brands") {
      // Log brand info when filtering for Accessories
      if (selectedCategory === "Accessories") {
        console.log(`Selected brand: "${selectedBrand}"`)
        filtered.forEach((product) => {
          console.log(
            `Product ${product.id} (${product.title}): brand="${product.brand}", matches? ${product.brand === selectedBrand}`,
          )
        })
      }

      filtered = filtered.filter((product) => product.brand === selectedBrand)
      console.log("After brand filter:", filtered.length, "products")
    }

    // Filter by condition
    const selectedConditions: string[] = []
    if (conditions.new) selectedConditions.push("New")
    if (conditions.second) selectedConditions.push("Second")
    if (conditions.refurbish) selectedConditions.push("Refurbished")

    // Log condition info when filtering for Accessories
    if (selectedCategory === "Accessories" && selectedConditions.length > 0) {
      console.log(`Selected conditions:`, selectedConditions)
      filtered.forEach((product) => {
        console.log(
          `Product ${product.id} (${product.title}): condition="${product.condition}", matches? ${selectedConditions.includes(product.condition)}`,
        )
      })
    }

    if (selectedConditions.length > 0) {
      filtered = filtered.filter((product) => selectedConditions.includes(product.condition))
      console.log("After condition filter:", filtered.length, "products")
    }

    // Apply sorting
    const sortingOption = sortOption === "recommended" ? mainSortOption : sortOption

    switch (sortingOption) {
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

  // Apply filters when component mounts and when filter values change
  useEffect(() => {
    applyFilters()
  }, [selectedCategory, selectedBrand, minPrice, maxPrice, conditions, sortOption, mainSortOption])

  // Update displayed products when filtered products or itemsPerPage changes
  useEffect(() => {
    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
    setDisplayedProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct))
  }, [filteredProducts, itemsPerPage, currentPage])

  // Handle items per page change
  const handleItemsPerPageChange = (newValue: number) => {
    setItemsPerPage(newValue)
    setCurrentPage(1) // Reset to first page when changing items per page
  }

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
                <>
                  {displayedProducts.map((product) => (
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

                  {filteredProducts.length > itemsPerPage && (
                    <div style={{ gridColumn: "1 / -1", margin: "20px 0" }}>
                      <PaginationContainer>
                        <PageButton
                          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          aria-label="Previous page"
                        >
                          &laquo;
                        </PageButton>

                        {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => i + 1).map(
                          (number) => (
                            <PageButton
                              key={number}
                              active={currentPage === number}
                              onClick={() => setCurrentPage(number)}
                              aria-label={`Page ${number}`}
                              aria-current={currentPage === number ? "page" : undefined}
                            >
                              {number}
                            </PageButton>
                          ),
                        )}

                        <PageButton
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, Math.ceil(filteredProducts.length / itemsPerPage)),
                            )
                          }
                          disabled={currentPage === Math.ceil(filteredProducts.length / itemsPerPage)}
                          aria-label="Next page"
                        >
                          &raquo;
                        </PageButton>
                      </PaginationContainer>
                    </div>
                  )}

                  <div
                    style={{
                      gridColumn: "1 / -1",
                      display: "flex",
                      justifyContent: "center",
                      margin: "20px 0",
                      gap: "10px",
                    }}
                  >
                    <ItemsPerPageContainer>
                      <ItemsPerPageLabel htmlFor="itemsPerPage">Items per page:</ItemsPerPageLabel>
                      <ItemsPerPageSelect
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                        aria-label="Number of items per page"
                      >
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                      </ItemsPerPageSelect>
                    </ItemsPerPageContainer>
                  </div>
                </>
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

