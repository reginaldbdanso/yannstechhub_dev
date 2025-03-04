import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

const Card = styled.article`
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

const ImageContainer = styled.div`
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

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 13px;
  border-radius: 20px;
  background: #ffc107;
  padding: 6px 22px;
  font: 700 12px 'Open Sans', sans-serif;
  color: #000;

  @media (max-width: 991px) {
    top: 10px;
    right: 9px;
    border-radius: 5px;
    padding: 1px 3px;
    font: 700 7px 'Open Sans', sans-serif;
  }
`;

const Title = styled.h2`
  color: #000;
  margin-top: 28px;
  font: 700 14px Open Sans, sans-serif;

  @media (max-width: 991px) {
    margin-top: 0px;
    text-align: center;
    font: 700 12px Open Sans, sans-serif;
  }
`;

const Details = styled.div`
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
  background-color: #000;
  border-radius: 50%;
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

const ProductCard: React.FC<ProductCardProps> = ({ image, title, rating, reviews, price }) => {
  return (
    <Card>
      <ImageContainer>
        <ProductImage src={image} alt={title} />
        <WishlistIcon src="/imgs/favorie 2.png" alt="Add to wishlist" />
        <ProductBadge>LIMITED OFFER</ProductBadge>
      </ImageContainer>
      <Title>{title}</Title>
      <Details>
        <RatingPrice>
          <Rating>
            <RatingIcon src="/imgs/star 1.png" alt="Rating star" />
            <span>{rating.toFixed(1)} ({reviews} reviews)</span>
          </Rating>
          <Price>$ {price.toFixed(2)}</Price>
        </RatingPrice>
        <CartButton aria-label="Add to cart">
          <CartIcon src="/imgs/Buy - 6.png" alt="" />
        </CartButton>
      </Details>
    </Card>
  );
};

export default ProductCard; 