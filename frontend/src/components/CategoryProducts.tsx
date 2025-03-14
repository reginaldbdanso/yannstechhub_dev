"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { mockProducts } from "../data/mockProducts"
import ProductCard from "./ProductCard"
import Header from "./Header"
import Footer from "./Footer"

// Styled Components
const PageContainer = styled.div`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 179px;
  position: relative;

  @media (max-width: 991px) {
    padding: 80px 0 40px;
  }
`

const Divider = styled.div<{ top?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${(props) => (props.top ? "20px" : "10px")};
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
  font: ${(props) => (props.bold ? "700" : "400")} 15px Open Sans, sans-serif;
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

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 70%;

  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 5px;
    margin-top: 20px;
    max-width: 95%;
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

const ResultsInfo = styled.div`
  width: 100%;
  max-width: 70%;
  text-align: left;
  margin-top: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #555;
`

const CategoryDescription = styled.p`
  width: 100%;
  max-width: 70%;
  text-align: left;
  margin-top: 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #333;
`

const NoProductsMessage = styled.div`
  text-align: center;
  padding: 50px 0;
  font-size: 18px;
  color: #666;
  width: 100%;
  max-width: 70%;
`

const DebugInfo = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-family: monospace;
  white-space: pre-wrap;
  overflow-x: auto;
  margin-bottom: 20px;
  display: none; /* Set to 'block' to show debug info */
  width: 100%;
  max-width: 70%;
`

type SortOption = "default" | "price-low-high" | "price-high-low" | "rating-high-low" | "name-a-z" | "name-z-a"

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const [filteredProducts, setFilteredProducts] = useState<typeof mockProducts>([])
  const [sortOption, setSortOption] = useState<SortOption>("default")
  const [debugInfo, setDebugInfo] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)

  // Format the category name for display (convert from URL format to display format)
  const formatCategoryName = (categorySlug: string) => {
    return categorySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const displayCategory = category ? formatCategoryName(category) : ""

  // Filter products by category
  useEffect(() => {
    let debug = ""
    debug += `Category param: ${category}\n`
    debug += `All categories in mockProducts: ${mockProducts.map((p) => p.category).join(", ")}\n\n`

    if (category) {
      // Convert URL format to a comparable format
      const categoryParam = category.toLowerCase()
      debug += `Looking for products with category matching: ${categoryParam}\n\n`

      const filtered = mockProducts.filter((product) => {
        if (!product.category) return false

        // Convert product category to URL-friendly format for comparison
        const productCategory = product.category.toLowerCase().replace(/\s+/g, "-")

        debug += `Product: ${product.title}, Category: ${product.category}, URL format: ${productCategory}, Match: ${productCategory === categoryParam}\n`

        return productCategory === categoryParam
      })

      debug += `\nFound ${filtered.length} matching products`
      setDebugInfo(debug)

      console.log("Filtered products:", filtered)
      setFilteredProducts(filtered)
    } else {
      debug += "No category parameter, showing all products"
      setDebugInfo(debug)
      setFilteredProducts(mockProducts)
    }

    // Reset to first page when category changes
    setCurrentPage(1)
  }, [category])

  // Sort products based on selected option
  useEffect(() => {
    if (filteredProducts.length === 0) return

    const sortedProducts = [...filteredProducts]

    switch (sortOption) {
      case "price-low-high":
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case "rating-high-low":
        sortedProducts.sort((a, b) => b.rating - a.rating)
        break
      case "name-a-z":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "name-z-a":
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        // Keep default order
        break
    }

    setFilteredProducts(sortedProducts)
    setCurrentPage(1) // Reset to first page when sorting changes
  }, [sortOption])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1) // Reset to first page when items per page changes
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  // Generate page numbers
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  // Pagination controls
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <PageContainer>
      <MainContent>
        <Header />
        <Divider top />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ {displayCategory || "All Products"}</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect id="sortSelect" aria-label="Sort products" value={sortOption} onChange={handleSortChange}>
              <option value="default">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Rating: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </SortSelect>
          </SortContainer>
        </BreadcrumbSort>

        <Divider />

        {/* Debug information - set display to 'block' in styled component to show */}
        <DebugInfo>{debugInfo}</DebugInfo>

        {displayCategory && (
          <CategoryDescription>
            Browse our selection of {displayCategory.toLowerCase()} from top brands.
          </CategoryDescription>
        )}

        <ResultsInfo>
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
          {filteredProducts.length} products
        </ResultsInfo>

        {currentProducts.length > 0 ? (
          <>
            <ProductsGrid>
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
                  badge={product.badge}
                />
              ))}
            </ProductsGrid>

            {totalPages > 1 && (
              <PaginationContainer>
                <PageButton onClick={prevPage} disabled={currentPage === 1} aria-label="Previous page">
                  &laquo;
                </PageButton>

                {pageNumbers.map((number) => (
                  <PageButton
                    key={number}
                    active={currentPage === number}
                    onClick={() => paginate(number)}
                    aria-label={`Page ${number}`}
                    aria-current={currentPage === number ? "page" : undefined}
                  >
                    {number}
                  </PageButton>
                ))}

                <PageButton onClick={nextPage} disabled={currentPage === totalPages} aria-label="Next page">
                  &raquo;
                </PageButton>
              </PaginationContainer>
            )}

            <ItemsPerPageContainer>
              <ItemsPerPageLabel htmlFor="itemsPerPage">Items per page:</ItemsPerPageLabel>
              <ItemsPerPageSelect
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                aria-label="Number of items per page"
              >
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="35">35</option>
              </ItemsPerPageSelect>
            </ItemsPerPageContainer>
          </>
        ) : (
          <NoProductsMessage>
            No products found in this category. Please check back later or browse other categories.
          </NoProductsMessage>
        )}
      </MainContent>
      <Footer />
    </PageContainer>
  )
}

export default CategoryProducts

