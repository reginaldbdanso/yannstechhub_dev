import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../styles/components/CategoryProducts_module.css'
// import { mockProducts } from "../data/mockProducts"
import ProductCard from "./ProductCard"
import Header from "./Header"
import Footer from "./Footer"
import { useProducts } from "@/context/ProductContext"

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([])
  const [sortOption, setSortOption] = useState<string>("default")
  const [debugInfo, setDebugInfo] = useState<string>("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const { products } = useProducts()

  const formatCategoryName = (categorySlug: string) => {
    return categorySlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const displayCategory = category ? formatCategoryName(category) : ""

  useEffect(() => {
    let debug = ""
    debug += `Category param: ${category}\n`
    debug += `All categories in Products: ${products.map((p) => p.category).join(", ")}\n\n`

    if (category) {
      const categoryParam = category.toLowerCase()
      debug += `Looking for products with category matching: ${categoryParam}\n\n`

      const filtered = products.filter((product) => {
        if (!product.category) return false
        const productCategory = product.category.toLowerCase().replace(/\s+/g, "-")
        debug += `Product: ${product.title}, Category: ${product.category}, URL format: ${productCategory}, Match: ${productCategory === categoryParam}\n`
        return productCategory === categoryParam
      })

      debug += `\nFound ${filtered.length} matching products`
      setDebugInfo(debug)
      setFilteredProducts(filtered)
    } else {
      debug += "No category parameter, showing all products"
      setDebugInfo(debug)
      setFilteredProducts(products)
    }

    setCurrentPage(1)
  }, [category])

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
        break
    }

    setFilteredProducts(sortedProducts)
    setCurrentPage(1)
  }, [sortOption])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value)
  }

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

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
            <span className="breadcrumbItem">/ {displayCategory || "All Products"}</span>
          </div>
          <div className="sortContainer">
            <label htmlFor="sortSelect" className="sortLabel">Sort by</label>
            <select
              id="sortSelect"
              className="sortSelect"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="default">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Rating: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>

        <div className="dividerNormal" />

        <div className="debugInfo">{debugInfo}</div>

        {displayCategory && (
          <p className="categoryDescription">
            Browse our selection of {displayCategory.toLowerCase()} from top brands.
          </p>
        )}

        <div className="resultsInfo">
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
          {filteredProducts.length} products
        </div>

        {currentProducts.length > 0 ? (
          <>
            <div className="productsGrid">
              {currentProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id.toString()}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
                  badge={product.badge}
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
              <label htmlFor="itemsPerPage" className="itemsPerPageLabel">
                Items per page:
              </label>
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
        ) : (
          <div className="noProductsMessage">
            No products found in this category. Please check back later or browse other categories.
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default CategoryProducts