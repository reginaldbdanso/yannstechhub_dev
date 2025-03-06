import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: string;
  isFavorite: boolean;
  reviews: number;
  badge?: string;
  brand: string;
  condition: 'new' | 'used' | 'refurbished';
}

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  filters: {
    priceRange: { min: string; max: string };
    brand: string;
    conditions: {
      new: boolean;
      used: boolean;
      refurbished: boolean;
    };
    sortBy: string;
  };
  setFilters: (filters: any) => void;
  updateProductRating: (productId: number, rating: number) => void;
  toggleFavorite: (productId: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Smart Watch",
      price: 50.00,
      rating: 5.0,
      image: "/imgs/Watch 1.png",
      isFavorite: false,
      reviews: 58,
      badge: "2 FOR USD 80",
      brand: "Apple",
      condition: "new"
    },
    {
      id: 2,
      title: "Wireless Headphones",
      price: 80.00,
      rating: 4.5,
      image: "/imgs/Rectangle 62.png",
      isFavorite: false,
      reviews: 45,
      brand: "Samsung",
      condition: "new"
    },
    {
      id: 3,
      title: "Smartphone",
      price: 299.99,
      rating: 4.7,
      image: "/imgs/Rectangle 62 (9).png",
      isFavorite: false,
      reviews: 120,
      brand: "Apple",
      condition: "refurbished"
    }
  ]);

  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
    brand: 'all',
    conditions: {
      new: false,
      used: false,
      refurbished: false
    },
    sortBy: 'featured'
  });

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let result = [...products];

    // Apply price filter
    if (filters.priceRange.min || filters.priceRange.max) {
      result = result.filter(product => {
        const min = filters.priceRange.min ? parseFloat(filters.priceRange.min) : 0;
        const max = filters.priceRange.max ? parseFloat(filters.priceRange.max) : Infinity;
        return product.price >= min && product.price <= max;
      });
    }

    // Apply brand filter
    if (filters.brand !== 'all') {
      result = result.filter(product => product.brand === filters.brand);
    }

    // Apply condition filters
    const activeConditions = Object.entries(filters.conditions)
      .filter(([_, isActive]) => isActive)
      .map(([condition]) => condition);

    if (activeConditions.length > 0) {
      result = result.filter(product => 
        activeConditions.includes(product.condition)
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - no sorting needed
        break;
    }

    setFilteredProducts(result);
  }, [filters, products]);

  const updateProductRating = (productId: number, rating: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, rating: (product.rating + rating) / 2, reviews: product.reviews + 1 }
          : product
      )
    );
  };

  const toggleFavorite = (productId: number) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        filters,
        setFilters,
        updateProductRating,
        toggleFavorite
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};