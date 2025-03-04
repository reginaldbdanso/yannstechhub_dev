import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

// Styled Components
const LandingContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  margin-top: 80px;

  @media (max-width: 991px) {
    padding: 0 2%;
    margin-top: 60px;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #000;

  @media (max-width: 991px) {
    height: 60vh;
  }
`;

const HeroSlide = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1.5s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const CategoriesSection = styled.section`
  display: flex;
  width: 100%;
  max-width: 100%;
  margin: 0% 10%;
  flex-direction: column;
  margin-top: 20px;
  align-self: center;
  justify-content: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0% 0%;
  }
`;

const CategoryTitle = styled.h3`
  color: #000;
  margin-top: 109px;
  font: 700 25px Open Sans, sans-serif;
`;

const HeroControls = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 13px;
`;

const ArrowButton = styled.img`
  cursor: pointer;
  background-color: #eee;
  aspect-ratio: 1.31;
  object-fit: contain;
  object-position: center;
  width: 47px;
  border-radius: 15px;
  padding: 13px;
`;

const SliderContainer = styled.div`
  position: relative;
  width: 95%;
  margin: 0%;
  align-self: start;
  overflow: hidden;
  border-radius: 8px;
  padding: 20px;
`;

const CategoriesProducts = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s ease;
`;

const CategoryIconWrapper = styled.div`
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  align-items: center;
  width: 124px;
  flex-direction: column;
  justify-content: center;
  padding: 13px 0px;
`;

const CategoryIcon = styled.img`
  aspect-ratio: 1.16;
  object-fit: contain;
  object-position: center;
  width: 94px;
  border-radius: 10px;
`;

const CategoryLabel = styled.h2`
  color: #000;
  align-self: center;
  margin-top: 9px;
  font: 700 14px Open Sans, sans-serif;
`;

const ItemsSection = styled.section`
  color: #000;
  margin-top: 90px;
  font: 700 25px Open Sans, sans-serif;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-content: space-between;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ItemsNav = styled.nav`
  display: flex;
  width: 95%;
  align-items: center;
  gap: 20px;
  color: #000;
  justify-content: space-between;
  font: 700 25px Open Sans, sans-serif;

  a {
    text-decoration: none;
    color: #000;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ImageSection = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 30px;
  border-radius: 10px;
  text-align: start;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    margin-bottom: 20px;
    color: #000;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  flex-grow: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
`;

const DoubleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;

  img {
    flex: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.5rem;
  }
`;

const ProductTxt = styled.h2`
  width: 50%;
  align-self: start;
  margin-top: 80px;
  font: 700 25px Open Sans, sans-serif;


   @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 10px;
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
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const FavoriteIcon = styled.img`
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

const ProductBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 13px;
  border-radius: 20px;
  background: #ffc107;
  padding: 6px 22px;
  font: 700 12px 'Open Sans', sans-serif;
  color: #000;
`;

const ProductTitle = styled.h2`
  color: #000;
  font: 700 14px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 0px;
    font-size: 25px;
    text-align: center;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  margin-top: 7px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    margin: 5% 15%;
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
`;

const RatingIcon = styled.img`
  width: 20px;
  aspect-ratio: 1;

  @media (max-width: 991px) {
    width: 12px;
    margin: 4px 0px;
  }
`;

const Price = styled.span`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  margin-top: 7px;
  font-family: Inter, sans-serif;

  @media (max-width: 991px) {
    font-size: 12px;
  }
`;

const CartButton = styled.button`
  background-color: #000;
  border-radius: 50%;
  margin-top: 8%;
  cursor: pointer;
  border: none;
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

const PromoBanner = styled.section`
  border-radius: 20px;
  background-color: #c0ddff;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 57px 0px 0 0;
  padding: 15px 70px 25px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 40px 10px 0 0;
    padding: 0 20px;
  }
`;

const PromoContent = styled.div`
  width: 755px;
  max-width: 100%;
`;

const PromoRow = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    align-items: stretch;
    flex-direction: column;
    gap: 0;
  }
`;

const PromoCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 41%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const PromoImage = styled.img`
  aspect-ratio: 0.92;
  object-fit: contain;
  object-position: center;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PromoTextCol = styled.div`
  align-self: center;
  line-height: normal;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    text-align: center;
  }
`;

const PromoTitle = styled.h2`
  color: #000;
  align-self: stretch;
  margin: auto 0;
  font: 700 80px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

const PromoDescription = styled.h3`
  color: #000;
  align-self: stretch;
  margin: auto 0;
  font: 700 40px Open Sans, sans-serif;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 76px 0 0 0px;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FeaturesGrid = styled.div`
  gap: 50px;
  width: 80%;
  align-self: center;
  align-items: center;
  display: flex;

  @media (max-width: 991px) {
    align-items: stretch;
    width: 100%;
    gap: 30px;
  }
`;

const FeatureCol = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #000;
  justify-content: start;
  font: 15px Inter, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FeatureContent = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FeatureIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 81px;

  @media (max-width: 991px) {
    width: 50px;
  }
`;

const FeatureTitle = styled.h3`
  font-weight: 600;
  text-align: center;
  margin-top: 11px;
`;

const FeatureDescription = styled.p`
  font-weight: 400;
  text-align: center;
  align-self: stretch;
  margin-top: -7px;

  @media (max-width: 991px) {
    margin-top: 0px;
  }
`;

const NewsletterSection = styled.section`
  background-color: #191919;
  display: flex;
  margin: 107px 0 0 0;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: Inter, sans-serif;
  color: #fff;
  font-weight: 700;
  text-align: center;
  justify-content: center;
  padding: 78px 0;
  align-self: stretch;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 60px 20px;
  }
`;

const NewsletterContent = styled.div`
  display: flex;
  width: 542px;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const NewsletterTitle = styled.h2`
  font-size: 20px;
`;

const NewsletterDescription = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
`;

const NewsletterForm = styled.form`
  background-color: #fff;
  align-self: stretch;
  display: flex;
  margin-top: 14px;
  align-items: end;
  font-size: 15px;
  color: #000;
  white-space: nowrap;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    white-space: initial;
  }
`;

const EmailInput = styled.input`
  align-self: stretch;
  padding: 0 10px;
  width: 542px;
  display: flex;
  border: none;
  font-size: 15px;
  color: #000;
  white-space: nowrap;
`;

const NewsletterButton = styled.button`
  align-self: end;
  background-color: #c0ddff;
  padding: 11px 39px;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const TrendCard = styled.div`
  background: linear-gradient(135deg,rgb(0, 6, 116) 0%, #0055b6 100%);
  border-radius: 10px;
  padding: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 300px;
  position: relative;
  overflow: hidden;

  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 10px;
    position: relative;
    z-index: 2;
  }
`;

const HighlightCircle = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  right: 30px;

  img {
    width: 24px;
    height: 24px;
  }
`;

// Types
interface Category {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

const Index: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const slides = [
    { id: 1, image: '/imgs/Banner 1.png' },
    { id: 2, image: '/imgs/Banner 2.png' },
    { id: 3, image: '/imgs/Banner 3.png' },
    { id: 4, image: '/imgs/Banner 4.png' },
    { id: 5, image: '/imgs/Banner 5.png' }
  ];

  const categories = Array(16).fill({
    name: 'Phones',
    image: '/imgs/Rectangle 9.png'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) => 
      prev < categories.length - 4 ? prev + 1 : 0
    );
  };

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prev) => 
      prev > 0 ? prev - 1 : categories.length - 4
    );
  };

  useEffect(() => {
    const autoRotateInterval = setInterval(handleNextCategory, 3000);
    return () => clearInterval(autoRotateInterval);
  }, []);

  return (
    <LandingContainer>
      <Header />
      <HeroSection>
        {slides.map((slide, index) => (
          <HeroSlide
            key={slide.id}
            active={index === currentSlide}
          >
            <img src={slide.image} alt={`Banner ${slide.id}`} />
          </HeroSlide>
        ))}
      </HeroSection>
      
      <MainContent>
        <CategoriesSection>
          <CategoryTitle>
            Browse by Category Shop.
            <span style={{ color: '#bbbbbb' }}>
              the best way to buy the products you love.
            </span>
          </CategoryTitle>
          
          <HeroControls>
            <ArrowButton
              src="/imgs/Vector (1).png"
              alt="Previous"
              onClick={handlePrevCategory}
            />
            <ArrowButton
              src="/imgs/Vector (2).png"
              alt="Next"
              onClick={handleNextCategory}
            />
          </HeroControls>

          <SliderContainer>
            <CategoriesProducts
              style={{
                transform: `translateX(-${currentCategoryIndex * 144}px)`
              }}
            >
              {categories.map((category, index) => (
                <Link to="/phone" key={index}>
                  <div className="categories-products-icon">
                    <CategoryIconWrapper>
                      <CategoryIcon src={category.image} alt={category.name} />
                    </CategoryIconWrapper>
                    <CategoryLabel>{category.name}</CategoryLabel>
                  </div>
                </Link>
              ))}
            </CategoriesProducts>
          </SliderContainer>
        </CategoriesSection>

        <ItemsSection>
          <h3>
            Our Latest Items. 
            <span style={{ color: '#bbbbbb' }}>Have A Look At What's New, Now.</span>
          </h3>
          
          <ImageSection>
            <Card>
              <Link to="#top-rated">Top Rated</Link>
              <CardContent>
                <img src="/imgs/Rectangle 17.png" alt="Nature Image" />
              </CardContent>
            </Card>
            
            <Card>
              <Link to="#latest-arrivals">Latest Arrivals</Link>
              <GridContainer>
                <img src="/imgs/Rectangle 51.png" alt="Forest" />
                <img src="/imgs/Rectangle 52.png" alt="Ocean" />
                <img src="/imgs/Rectangle 53.png" alt="Mountain" />
                <img src="/imgs/Rectangle 54.png" alt="City" />
              </GridContainer>
            </Card>
            
            <Card>
              <Link to="#best-deals">Best Deals</Link>
              <DoubleImageContainer>
                <img src="/imgs/Rectangle 49.png" alt="Tech Image" />
                <img src="/imgs/Rectangle 50.png" alt="Business Image" />
              </DoubleImageContainer>
            </Card>
          </ImageSection>
        </ItemsSection>

        <ProductTxt>
          On Sale. 
          <span style={{ color: '#bbbbbb' }}>
            Your favorite gadgets, delivered right to your doorstep in no time.
          </span>
        </ProductTxt>

        <ProductsGrid>
          <TrendCard>
            <p>
              Trend<br />Products
            </p>
            <HighlightCircle>
              <img src="/imgs/Vector.png" alt="Trending" />
            </HighlightCircle>
          </TrendCard>

          {Array(6).fill(null).map((_, index) => (
            <ProductCard key={index}>
              <Link to="/product-details-2">
                <ProductImageContainer>
                  <ProductImage src="/imgs/Rectangle 62.png" alt="Product 1" />
                  <FavoriteIcon src="/imgs/favorie 1.png" alt="Add to wishlist" />
                </ProductImageContainer>
              </Link>
              <ProductTitle>Lorem ipsum dolor</ProductTitle>
              <ProductDetails>
                <RatingPrice>
                  <Rating>
                    <RatingIcon src="/imgs/star 1.png" />
                    <span>5.0 (58 reviews)</span>
                  </Rating>
                  <Price>$ 50.00</Price>
                </RatingPrice>
                <CartButton aria-label="Add to cart">
                  <CartIcon src="/imgs/Buy - 6.png" alt="" />
                </CartButton>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductsGrid>

        <PromoBanner>
          <PromoContent>
            <PromoRow>
              <PromoCol>
                <PromoImage src="/imgs/Watch.png" alt="Fast Sales promotion" />
              </PromoCol>
              <PromoTextCol>
                <PromoTitle>Fast Sales</PromoTitle>
                <PromoDescription>Yanns tech Hub Sales.</PromoDescription>
              </PromoTextCol>
            </PromoRow>
          </PromoContent>
        </PromoBanner>

        <FeaturesSection>
          <FeaturesGrid>
            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/delivery.png" alt="" />
                  <FeatureTitle>Free Delivery</FeatureTitle>
                  <FeatureDescription>
                    And free returns. See checkout for delivery dates.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>
            
            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/0-percent.png" alt="" />
                  <FeatureTitle>Pay 0% interest for up to 24months</FeatureTitle>
                  <FeatureDescription>
                    Choose any items of your choice without paying any interest.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>
            
            <FeatureCol>
              <FeatureCard>
                <FeatureContent>
                  <FeatureIcon src="/imgs/support.png" alt="" />
                  <FeatureTitle>Customer Support</FeatureTitle>
                  <FeatureDescription>
                    Helping customers resolve issues with products or services.
                  </FeatureDescription>
                </FeatureContent>
              </FeatureCard>
            </FeatureCol>
          </FeaturesGrid>
        </FeaturesSection>
      </MainContent>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>Subscribe for Newsletter</NewsletterTitle>
          <NewsletterDescription>
            Subscribe to get latest updates and information.
          </NewsletterDescription>
          <NewsletterForm onSubmit={(e) => e.preventDefault()}>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              required
            />
            <NewsletterButton type="submit">Send</NewsletterButton>
          </NewsletterForm>
        </NewsletterContent>
      </NewsletterSection>
      
      <Footer />
    </LandingContainer>
  );
};

export default Index; 