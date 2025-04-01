import React, { useState, useEffect } from "react"
import '../styles/components/DailyDeals_module.css'
import Header from "./Header"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { useProducts } from "@/context/ProductContext"

type Product = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  isFavorite: boolean;
  reviews: number;
  badge?: string;
  brand: string;
  condition: 'new' | 'used' | 'refurbished';
  category: string;
  descriptions: Array<any>;
  features: string[];
  specs: string[];
  stock: number;
  thumbnails: string[];
  createdAt: string;
  updatedAt: string;
}

const DailyDeals: React.FC = () => {
  const { products: contextProducts } = useProducts();
  const [products, setProducts] = useState<Product[]>([])
  const [sortOption, setSortOption] = useState<"recommended" | "bestSellers" | "lowPrice" | "highPrice" | "reviews">("recommended")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setIsLoading(true)
  //     try {
  //       const response = await fetch("https://yannstechhub-dev-api.onrender.com/api/products")
  //       if (!response.ok) {
  //         throw new Error(`API error: ${response.status}`)
  //       }
  //       const data = await response.json()
  //       console.log('Fetched products:', data) // Debug log
  //       if (Array.isArray(data)) {
  //         setProducts(data)
  //       } else if (data.products && Array.isArray(data.products)) {
  //         setProducts(data.products)
  //       } else {
  //         throw new Error('Invalid data format')
  //       }
  //       setError(null)
  //     } catch (err) {
  //       setError("Failed to load products. Please try again later.")
  //       console.error("Error fetching products:", err)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }

  //   // Only fetch if we don't have context products
  //   if (!contextProducts || contextProducts.length === 0) {
  //     fetchProducts()
  //   }
  // }, []) // Remove contextProducts dependency

  // Separate effect for handling context products
  useEffect(() => {
    if (contextProducts && contextProducts.length > 0) {
      setProducts(contextProducts)
      setIsLoading(false)
      setError(null)
    }
  }, [contextProducts])

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
          return productsCopy.sort((a, b) => b.rating * b.reviews - a.rating * a.reviews)
      }
    }

    setProducts(sortProducts())
    setCurrentPage(1)
  }, [sortOption])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value as typeof sortOption)
  }

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1))

  return (
    <div className="container">
      <div className="mainContent">
        <Header />
        <div className="dividerTop" />

        <div className="breadcrumbSort">
          <div className="breadcrumb">
            <span className="breadcrumbItemBold">yannstechub</span>
            <span className="breadcrumbItem">/ Daily deals</span>
          </div>
          <div className="sortContainer">
            <label className="sortLabel" htmlFor="sortSelect">Sort by</label>
            <select
              id="sortSelect"
              className="sortSelect"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="recommended">Recommended</option>
              <option value="bestSellers">Best Sellers</option>
              <option value="lowPrice">Low Price</option>
              <option value="highPrice">High Price</option>
              <option value="reviews">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="dividerNormal" />

        {isLoading ? (
          <div className="statusMessage">Loading products...</div>
        ) : error ? (
          <div className="statusMessage">{error}</div>
        ) : (
          <>
            <div className="resultsInfo">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, products.length)} of {products.length} products
            </div>

            <div className="productsGrid">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="paginationContainer">
                <button
                  className="pageButton"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  &laquo;
                </button>

                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={currentPage === number ? "pageButtonActive" : "pageButton"}
                    onClick={() => paginate(number)}
                    aria-label={`Page ${number}`}
                    aria-current={currentPage === number ? "page" : undefined}
                  >
                    {number}
                  </button>
                ))}

                <button
                  className="pageButton"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  &raquo;
                </button>
              </div>
            )}

            <div className="itemsPerPageContainer">
              <label className="itemsPerPageLabel" htmlFor="itemsPerPage">Items per page:</label>
              <select
                id="itemsPerPage"
                className="itemsPerPageSelect"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                aria-label="Number of items per page"
              >
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="35">35</option>
              </select>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default DailyDeals