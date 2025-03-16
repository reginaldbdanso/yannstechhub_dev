"use client"

import type React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { mockProducts } from "../data/mockProducts"

// Use the type from mockProducts directly
type Product = (typeof mockProducts)[0]

const Container = styled.section`
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

const StatusMessage = styled.div`
  margin: 40px 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #555;
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

type SortOption = "recommended" | "bestSellers" | "lowPrice" | "highPrice" | "reviews"

const DailyDeals: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [sortOption, setSortOption] = useState<SortOption>("recommended")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Simulate data fetching with a delay
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      try {
        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 800))
        setProducts(mockProducts)
        setError(null)
      } catch (err) {
        setError("Failed to load products. Please try again later.")
        console.error("Error fetching products:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Sort products when sort option changes
  useEffect(() => {
    if (products.length === 0) return

    const sortProducts = () => {
      const productsCopy = [...products]

      switch (sortOption) {
        case "bestSellers":
          return productsCopy.sort((a, b) => b.reviews - a.reviews)
        case "lowPrice":
          return productsCopy.sort((a, b) => a.price - b.price)
        case "highPrice":
          return productsCopy.sort((a, b) => b.price - a.price)
        case "reviews":
          return productsCopy.sort((a, b) => b.rating - a.rating)
        case "recommended":
        default:
          // For recommended, we could use a more complex algorithm
          // Here we'll just mix rating and reviews
          return productsCopy.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
      }
    }

    setProducts(sortProducts())
    setCurrentPage(1) // Reset to first page when sorting changes
  }, [sortOption])

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as SortOption)
  }

  // Handle items per page change
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1) // Reset to first page when items per page changes
  }

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

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
    <Container>
      <MainContent>
        <Header />
        <Divider top />

        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Daily deals</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect id="sortSelect" aria-label="Sort products" value={sortOption} onChange={handleSortChange}>
              <option value="recommended">Recommended</option>
              <option value="bestSellers">Best Sellers</option>
              <option value="lowPrice">Low Price</option>
              <option value="highPrice">High Price</option>
              <option value="reviews">Top Rated</option>
            </SortSelect>
          </SortContainer>
        </BreadcrumbSort>

        <Divider />

        {isLoading ? (
          <StatusMessage>Loading products...</StatusMessage>
        ) : error ? (
          <StatusMessage>{error}</StatusMessage>
        ) : (
          <>
            <ResultsInfo>
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length}{" "}
              products
            </ResultsInfo>

            <ProductsGrid>
              {currentProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id} // Pass the product ID
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
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
        )}
      </MainContent>
      <Footer />
    </Container>
  )
}

export default DailyDeals

