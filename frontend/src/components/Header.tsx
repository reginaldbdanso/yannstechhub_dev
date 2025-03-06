import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useClickOutside } from '../utils/useClickOutside';
import { useCart } from '../context/CartContext';

const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  background-color: #f2f2f2;
  display: flex;
  width: 80%;
  overflow: hidden;
  gap: 20px;
  justify-content: space-between;
  padding: 21px 68px;
  box-shadow: 1px 5px 9px 3px rgba(0, 0, 0, 0.147);
  z-index: 1000;
  margin: 0 auto;

  @media (max-width: 991px) {
    width: 90%;
    padding: 15px 20px;
    top: 10px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 4.13;
  object-fit: contain;
  object-position: center;
  width: 132px;
  max-width: 100%;
`;

const NavButtons = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  color: #000;
  justify-content: start;
  margin: auto 0;
  font: 500 14px Open Sans, sans-serif;
  position: relative;
`;

const SearchContainer = styled.form<{ isSearching: boolean }>`
  position: absolute;
  left: 400px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${props => props.isSearching ? '1' : '0'};
  visibility: ${props => props.isSearching ? 'visible' : 'hidden'};
  pointer-events: ${props => props.isSearching ? 'auto' : 'none'};
  transition: all 0.3s ease;
  width: 200px;
  z-index: 1002;

  @media (max-width: 991px) {
    left: 380px;
    width: 180px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 6px 15px;
  border: 2px solid #e4e4e4;
  border-radius: 15px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #0055b6;
  }
`;

const SearchResults = styled.div<{ show: boolean }>`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  width: 250px;
  overflow-y: auto;
  display: ${props => props.show ? 'block' : 'none'};
  z-index: 10001;
`;

const ResultItem = styled.div`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  border-bottom: 1px solid #e4e4e4;

  &:hover {
    background-color: #f5f5f5;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ResultImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
`;

const ResultPrice = styled.div`
  color: #0055b6;
  font-weight: 500;
  font-size: 13px;
`;

const NavLink = styled(Link)`
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const UserActions = styled.div`
  align-self: start;
  display: flex;
  margin-top: 4px;
  align-items: start;
  gap: 30px;
`;

const ActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const CartNotification = styled.div<{ show: boolean }>`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  opacity: ${props => props.show ? 1 : 0};
  transform: ${props => props.show ? 'scale(1)' : 'scale(0.5)'};
  transition: all 0.15s ease-out;
  will-change: transform, opacity;
  pointer-events: none;
`;

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Header: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const searchContainerRef = useRef<HTMLFormElement>(null);
  useClickOutside(searchContainerRef, () => setIsSearching(false));
  const { cartCount } = useCart();
  // Mock data - replace with actual API call in production
  const mockProducts: Product[] = [
    { id: 1, title: 'Wireless Earbuds', price: 99.99, image: '/imgs/Rectangle 62.png' },
    { id: 2, title: 'Smart Watch', price: 199.99, image: '/imgs/Rectangle 62 (4).png' },
    { id: 3, title: 'Bluetooth Speaker', price: 79.99, image: '/imgs/asi.png' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = mockProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Real-time search results
    const filtered = mockProducts.filter(product =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setResults(filtered);
  };
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src="/imgs/Logo.png" alt="YannsTechHub Logo" />
      </Link>
      <NavButtons>
        <NavLink to="/daily-deals">Daily deals</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/bundle-deals">Bundle Deals</NavLink>
        <NavLink to="/support">Support</NavLink>
        <SearchContainer isSearching={isSearching} onSubmit={handleSearch} ref={searchContainerRef}>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            autoFocus={isSearching}
          />
          <SearchResults show={isSearching && results.length > 0}>
            {results.map(product => (
              <ResultItem key={product.id}>
                <ResultImage src={product.image} alt={product.title} />
                <ResultInfo>
                  <ResultTitle>{product.title}</ResultTitle>
                  <ResultPrice>${product.price.toFixed(2)}</ResultPrice>
                </ResultInfo>
              </ResultItem>
            ))}
          </SearchResults>
        </SearchContainer>
      </NavButtons>
      <UserActions>
        <ActionIcon 
          src="/imgs/Search - 7.png" 
          alt="Search" 
          onClick={() => setIsSearching(!isSearching)}
        />
        <Link to="/login">
          <ActionIcon src="/imgs/Profile - 3.png" alt="User Account" />
        </Link>
        <Link to="/cart">
          <CartIconWrapper>
            <ActionIcon src="/imgs/Buy - 6 (1).png" alt="Shopping Cart" />
            <CartNotification show={cartCount > 0}>{cartCount}</CartNotification>
          </CartIconWrapper>
        </Link>
      </UserActions>
    </HeaderContainer>
  );
};

export default Header;