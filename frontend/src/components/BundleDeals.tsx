import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import { mockProducts } from '../data/mockProducts';

const Container = styled.section`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

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
`;

const Divider = styled.div<{ top?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${props => props.top ? '20px' : '10px'};
  width: 99.9%;
  border: 1px solid #d5d5d5;
`;

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
`;

const Breadcrumb = styled.div`
  align-self: start;
  display: flex;
  gap: 12px;
  color: #000;
  font: 15px Open Sans, sans-serif;
`;

const BreadcrumbItem = styled.span<{ bold?: boolean }>`
  align-self: stretch;
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 14px;
  font: ${props => props.bold ? '700' : '400'} 15px Open Sans, sans-serif;
`;

const SortContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const SortLabel = styled.label`
  color: #000;
  flex-grow: 1;
  margin: auto 0;
  font: 500 15px Open Sans, sans-serif;
`;

const SortSelect = styled.select`
  border-radius: 10px;
  background-color: #fff;
  padding: 4px 30px;
  border: 1px solid #e4e4e4;
  cursor: pointer;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

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
`;

const BundleDeals: React.FC = () => {
  return (
    <Container>
      <MainContent>
        <Header />
        <Divider top />
        
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Bundle Deals</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect id="sortSelect" aria-label="Sort products">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
            </SortSelect>
          </SortContainer>
        </BreadcrumbSort>

        <Divider />

        <ProductsGrid>
          {mockProducts.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              rating={product.rating}
              reviews={product.reviews}
              price={product.price}
            />
          ))}
        </ProductsGrid>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default BundleDeals; 