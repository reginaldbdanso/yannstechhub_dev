import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 1100;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 20px;
  border: 2px solid #e4e4e4;
  border-radius: 30px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0055b6;
  }
`;

const SearchButton = styled.button`
  background-color: #0055b6;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003d82;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
`;

const SearchResults = styled.div`
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e4e4e4;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ResultImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ResultPrice = styled.div`
  color: #0055b6;
  font-weight: 500;
`;

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Mock data - replace with actual API call in production
  const mockProducts = [
    { id: 1, title: 'Wireless Earbuds', price: 99.99, image: '/imgs/Rectangle 62.png' },
    { id: 2, title: 'Smart Watch', price: 199.99, image: '/imgs/Rectangle 62 (4).png' },
    { id: 3, title: 'Bluetooth Speaker', price: 79.99, image: '/imgs/asi.png' },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter mock products based on search term
    const filtered = mockProducts.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (overlayRef.current === e.target) {
      onClose();
    }
  };

  const handleResultClick = (productId: number) => {
    // Navigate to product page
    navigate(`/product/${productId}`);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} ref={overlayRef} onClick={handleClickOutside}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <SearchContainer>
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        <SearchResults>
          {results.map(product => (
            <ResultItem key={product.id} onClick={() => handleResultClick(product.id)}>
              <ResultImage src={product.image} alt={product.title} />
              <ResultInfo>
                <ResultTitle>{product.title}</ResultTitle>
                <ResultPrice>${product.price.toFixed(2)}</ResultPrice>
              </ResultInfo>
            </ResultItem>
          ))}
        </SearchResults>
      </SearchContainer>
    </Overlay>
  );
};

export default SearchOverlay; 