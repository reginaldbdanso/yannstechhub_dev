import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const SliderSection = styled.section`
  width: 100%;
  padding: 20px 0;
`;

const SectionTitle = styled.h2`
  color: #000;
  font: 700 25px Open Sans, sans-serif;
  margin-bottom: 20px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Arrow = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e4e4e4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  font-size: 20px;
  color: #000;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 991px) {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
`;

const ProductsContainer = styled.div<{ transform: string }>`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => props.transform};
`;

interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const productsRef = React.useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      rating: 5.0,
      reviews: 58,
      price: 50.00
    },
    {
      id: 2,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      rating: 5.0,
      reviews: 58,
      price: 50.00
    },
    {
      id: 3,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      rating: 5.0,
      reviews: 58,
      price: 50.00
    },
    {
      id: 4,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      rating: 5.0,
      reviews: 58,
      price: 50.00
    }
  ];

  const updateSliderDimensions = React.useCallback(() => {
    if (containerRef.current && productsRef.current?.children[0]) {
      const containerWidth = containerRef.current.offsetWidth;
      const firstCard = productsRef.current.children[0] as HTMLElement;
      const newCardWidth = firstCard.offsetWidth + 20; // Including gap
      const newVisibleCount = Math.floor(containerWidth / newCardWidth);
      
      setCardWidth(newCardWidth);
      setVisibleCount(newVisibleCount);
    }
  }, []);

  React.useEffect(() => {
    updateSliderDimensions();
    window.addEventListener('resize', updateSliderDimensions);
    
    const autoRotateInterval = setInterval(() => {
      setCurrentIndex(current => {
        const maxIndex = Math.max(0, products.length - visibleCount);
        return current < maxIndex ? current + 1 : 0;
      });
    }, 3000);

    return () => {
      window.removeEventListener('resize', updateSliderDimensions);
      clearInterval(autoRotateInterval);
    };
  }, [updateSliderDimensions, products.length, visibleCount]);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const handlePrevClick = () => {
    setCurrentIndex(current => current > 0 ? current - 1 : maxIndex);
  };

  const handleNextClick = () => {
    setCurrentIndex(current => current < maxIndex ? current + 1 : 0);
  };

  return (
    <SliderSection>
      <SectionTitle>You May Also Like</SectionTitle>
      <SliderContainer ref={containerRef}>
        {currentIndex > 0 && 
          <Arrow direction="left" onClick={handlePrevClick}>
            &#10094;
          </Arrow>
        }
        <ProductsContainer ref={productsRef} transform={`translateX(-${currentIndex * cardWidth}px)`}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
            />
          ))}
        </ProductsContainer>
        {currentIndex < maxIndex && 
          <Arrow direction="right" onClick={handleNextClick}>
            &#10095;
          </Arrow>
        }
      </SliderContainer>
    </SliderSection>
  );
};

export default ProductSlider;