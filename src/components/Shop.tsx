import React, { useState, useEffect } from "react"
import '../styles/components/Shop_module.css'
import Header from "./Header"
import Footer from "./Footer"
import ProductCard from "./ProductCard"
import { mockProducts } from "../data/mockProducts"
import { useProducts } from "@/context/ProductContext"


const Shop: React.FC = () => {
  const categories = ["All Categories", ...Array.from(new Set(mockProducts.map((product) => product.category)))]
  const brands = ["All Brands", ...Array.from(new Set(mockProducts.map((product) => product.brand)))]
  const { products: contextProducts } = useProducts();
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
  const [filteredProducts, setFilteredProducts] = useState<typeof contextProducts>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(15)

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

  const handleConditionChange = (condition: keyof typeof conditions) => {
    setConditions((prev) => ({
      ...prev,
      [condition]: !prev[condition],
    }))
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (selectedCategory !== "All Categories") count++
    if (selectedBrand !== "All Brands") count++
    if (conditions.new || conditions.second || conditions.refurbish) count++
    if (minPrice !== "100" || maxPrice !== "1500") count++
    return count
  }

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
    setFilteredProducts(contextProducts)
  }

  const applyFilters = () => {
    let filtered = [...contextProducts]

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    const minPriceValue = Number.parseFloat(minPrice) || 0
    const maxPriceValue = Number.parseFloat(maxPrice) || Number.POSITIVE_INFINITY

    filtered = filtered.filter((product) => product.price >= minPriceValue && product.price <= maxPriceValue)

    if (selectedBrand !== "All Brands") {
      filtered = filtered.filter((product) => product.brand === selectedBrand)
    }

    const selectedConditions: string[] = []
    if (conditions.new) selectedConditions.push("New")
    if (conditions.second) selectedConditions.push("Second")
    if (conditions.refurbish) selectedConditions.push("Refurbished")

    if (selectedConditions.length > 0) {
      filtered = filtered.filter((product) => selectedConditions.includes(product.condition))
    }

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
    }

    setFilteredProducts(filtered)
  }

  useEffect(() => {
    applyFilters()
  }, [selectedCategory, selectedBrand, minPrice, maxPrice, conditions, sortOption, mainSortOption])

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
            <span className="breadcrumbItem">
              / Shop {selectedCategory !== "All Categories" && `/ ${selectedCategory}`}
            </span>
          </div>
          <div className="sortContainer">
            <label className="sortLabel" htmlFor="sortSelect">Sort by</label>
            <select
              id="sortSelect"
              className="sortSelect"
              value={mainSortOption}
              onChange={(e) => setMainSortOption(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="reviews">Best Reviews</option>
              <option value="low">Low Price</option>
              <option value="high">High Price</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
        <div className="dividerNormal" />
        <div className="mainGrid">
          <div className="gridContainer">
            <aside className="sidebar">
              <div className="sidebarContent">
                <div className="categoriesSection">
                  <h2 className="categoryTitle">Categories</h2>
                  <div className="categoryDivider" />
                  <nav className="categoryNav">
                    <ul>
                      {categories.map((category, index) => (
                        <li key={index}>
                          <button
                            className={selectedCategory === category ? "categoryLinkActive" : "categoryLink"}
                            onClick={() => handleCategorySelect(category)}
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="priceSection">
                  <h2 className="filterTitle">
                    Filters
                    {getActiveFilterCount() > 0 && <span className="filterCount">{getActiveFilterCount()}</span>}
                  </h2>

                  <h3 className="filterTitle">Price Range</h3>
                  <div className="priceRangeContainer">
                    <input
                      type="number"
                      className="priceRange"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      min="0"
                    />
                    <span className="priceRangeText">to</span>
                    <input
                      type="number"
                      className="priceRange"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      min="0"
                    />
                  </div>

                  <h3 className="brandName">Brand Name</h3>
                  <select
                    className="brandSelect"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                  >
                    {brands.map((brand, index) => (
                      <option key={index} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>

                  <h3 className="sortTitle">Sort by</h3>
                  <select
                    className="sortOptions"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="reviews">Reviews</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>

                  <h3 className="conditionsTitle">Conditions</h3>
                  <div className="conditionOption">
                    <input
                      type="checkbox"
                      id="new"
                      className="checkbox"
                      checked={conditions.new}
                      onChange={() => handleConditionChange("new")}
                    />
                    <label htmlFor="new" className="conditionLabel">
                      New
                    </label>
                  </div>
                  <div className="conditionOption">
                    <input
                      type="checkbox"
                      id="second"
                      className="checkbox"
                      checked={conditions.second}
                      onChange={() => handleConditionChange("second")}
                    />
                    <label htmlFor="second" className="conditionLabel">
                      Second
                    </label>
                  </div>
                  <div className="conditionOption">
                    <input
                      type="checkbox"
                      id="refurbish"
                      className="checkbox"
                      checked={conditions.refurbish}
                      onChange={() => handleConditionChange("refurbish")}
                    />
                    <label htmlFor="refurbish" className="conditionLabel">
                      Refurbished
                    </label>
                  </div>

                  <button className="resetFiltersButton" onClick={clearAllFilters}>
                    Reset Filters
                  </button>

                  {getActiveFilterCount() > 0 && (
                    <button className="clearFiltersButton" onClick={clearAllFilters}>
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            </aside>
            <div className="productsGrid">
              {currentProducts.length > 0 ? (
                <>
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
                    <label className="itemsPerPageLabel" htmlFor="itemsPerPage">
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
                  No products match your filter criteria. Try adjusting your filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop;

