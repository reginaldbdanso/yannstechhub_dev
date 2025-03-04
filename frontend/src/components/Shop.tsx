import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

const Container = styled.section`
  background-color: #eef2f4;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 21px 0 179px;
`;

const Divider = styled.div<{ top?: boolean }>`
  align-self: stretch;
  min-height: 0px;
  margin-top: ${props => props.top ? '100px' : '10px'};
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
  font-weight: ${props => props.bold ? '700' : '400'};
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
`;

const MainGrid = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 23px 0 -24px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const GridContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 40%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

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
`;

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
`;

const CategoryTitle = styled.h2`
  font: 700 15px Open Sans, sans-serif;
  margin-left: 24px;
  margin-bottom:10px;
  margin-top: 15px;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const CategoryDivider = styled.div`
  align-self: stretch;
  margin-top: 0px;
  height: 0px;
  border: 1px solid #d5d5d5;
`;

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
`;

const CategoryLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-family: Inter, sans-serif;
  margin: 5px 0 0 24px;
  padding-top: 0.5rem;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

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
`;

const FilterTitle = styled.h3`
  font: 700 15px Open Sans, sans-serif;
  margin-bottom: 20px;
`;

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
`;

const PriceRange = styled.span`
  border-radius: 10px;
  background-color: #eef2f4;
  padding: 10px 25px;
  flex: 1;
  text-align: center;
`;

const BrandName = styled.h3`
  color: #000;
  margin-top: 24px;
  font: 700 15px Open Sans, sans-serif;
`;

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
`;

const SortTitle = styled.h3`
  color: #000;
  margin-top: 20px;
  font: 700 15px Open Sans, sans-serif;
`;

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
`;

const ConditionsTitle = styled.h3`
  color: #000;
  margin-top: 25px;
  margin-bottom: -5px;
  font: 700 15px Open Sans, sans-serif;
`;

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
`;

const Checkbox = styled.input`
  border-radius: 5px;
  align-self: stretch;
  width: 17px;
  height: 16px;
  margin: auto 0;
  border: 1px solid #afafaf;
  cursor: pointer;
`;

const ConditionLabel = styled.label`
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
`;

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
`;

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
`;

const ProductImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  aspect-ratio: 1.06;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

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
`;

const ProductTitle = styled.h2`
  color: #000;
  margin-top: 28px;
  font: 700 14px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 0px;
    text-align: center;
    font: 700 12px Open Sans, sans-serif;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 0%;
  }
`;

const RatingPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rating = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #a5a5a5;
  align-items: center;

  @media (max-width: 991px) {
    gap: 5px;
  }
`;

const RatingIcon = styled.img`
  width: 16px;
  aspect-ratio: 1;

  @media (max-width: 991px) {
    width: 12px;
    margin: 4px 0px;
  }
`;

const Price = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  margin-top: 7px;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

const CartButton = styled.button`
  background-color: #ffff;
  // border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    align-self: flex-end;
    margin-top: -20px;
  }
`;

const CartIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 25px;
  margin: 3px 0px;

  @media (max-width: 991px) {
    width: 13px;
  }
`;

const Shop: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 2,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 3,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 4,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 5,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 6,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 7,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 8,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 9,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 10,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 11,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    },
    {
      id: 12,
      image: '/imgs/Rectangle 62.png',
      title: 'Lorem ipsum dolor',
      price: 50.00,
      rating: 5.0,
      reviews: 58
    }
  ]);

  const categories = [
    'Phones', 'Computer', 'Accessories', 'Laptops',
    'Monitors', 'Network', 'PC Games', 'Fashion'
  ];

  const [conditions, setConditions] = useState({
    new: false,
    second: false,
    refurbish: false
  });

  const handleConditionChange = (condition: keyof typeof conditions) => {
    setConditions(prev => ({
      ...prev,
      [condition]: !prev[condition]
    }));
  };

  return (
    <Container>
      <MainContent>
        <Header />
        <Divider top />
        <BreadcrumbSort>
          <Breadcrumb>
            <BreadcrumbItem bold>yannstechub</BreadcrumbItem>
            <BreadcrumbItem>/ Shop</BreadcrumbItem>
          </Breadcrumb>
          <SortContainer>
            <SortLabel htmlFor="sortSelect">Sort by</SortLabel>
            <SortSelect id="sortSelect">
              <option value="">Recommended</option>
              <option value="">Best Sellers</option>
              <option value="">Low Price</option>
              <option value="">High Price</option>
              <option value="">Reviews</option>
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
                          <CategoryLink to={`/shop/${category.toLowerCase()}`}>
                            {category}
                          </CategoryLink>
                        </li>
                      ))}
                    </ul>
                  </CategoryNav>
                </CategoriesSection>
                <PriceSection>
                  <FilterTitle>Price Range</FilterTitle>
                  <PriceRangeContainer>
                    <PriceRange>100</PriceRange>
                    <PriceRange>900</PriceRange>
                  </PriceRangeContainer>
                  
                  <BrandName>Brand Name</BrandName>
                  <BrandSelect aria-label="Select brand">
                    <option value="">All Brands</option>
                  </BrandSelect>
                  
                  <SortTitle>Sort by</SortTitle>
                  <SortOptions>
                    <option value="">Reviews</option>
                  </SortOptions>
                  
                  <ConditionsTitle>Conditions</ConditionsTitle>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="new"
                      checked={conditions.new}
                      onChange={() => handleConditionChange('new')}
                    />
                    <ConditionLabel htmlFor="new">New</ConditionLabel>
                  </ConditionOption>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="second"
                      checked={conditions.second}
                      onChange={() => handleConditionChange('second')}
                    />
                    <ConditionLabel htmlFor="second">Second</ConditionLabel>
                  </ConditionOption>
                  <ConditionOption>
                    <Checkbox
                      type="checkbox"
                      id="refurbish"
                      checked={conditions.refurbish}
                      onChange={() => handleConditionChange('refurbish')}
                    />
                    <ConditionLabel htmlFor="refurbish">Refurbish</ConditionLabel>
                  </ConditionOption>
                </PriceSection>
              </SidebarContent>
            </Sidebar>
            <ProductsGrid>
              {products.map((product) => (
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
                        <span>{product.rating} ({product.reviews} reviews)</span>
                      </Rating>
                      <Price>${product.price.toFixed(2)}</Price>
                    </RatingPrice>
                    <CartButton aria-label="Add to cart">
                      <CartIcon src="/imgs/Buy - 6 (1).png" alt="" />
                    </CartButton>
                  </ProductDetails>
                </ProductCard>
              ))}
            </ProductsGrid>
          </GridContainer>
        </MainGrid>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default Shop; 