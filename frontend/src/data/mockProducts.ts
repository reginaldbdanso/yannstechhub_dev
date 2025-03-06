export interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    image: '/imgs/phone 1.png',
    title: 'Samsung Galaxy S23 Ultra',
    rating: 4.8,
    reviews: 320,
    price: 1199.99
  },
  {
    id: 2,
    image: '/imgs/phone 2.png',
    title: 'Apple iphone  14 Pro Max',
    rating: 4.9,
    reviews: 450,
    price: 1299.99
  },
  {
    id: 3,
    image: '/imgs/phone 3.png',
    title: 'Google Pixel 7 Pro',
    rating: 4.7,
    reviews: 280,
    price: 899.99
  },
  {
    id: 4,
    image: '/imgs/phone 4.png',
    title: 'OnePlus 11 5G',
    rating: 4.6,
    reviews: 210,
    price: 799.99
  },
  {
    id: 5,
    image: '/imgs/phone 5.png',
    title: 'Xiaomi 13 Pro',
    rating: 4.5,
    reviews: 150,
    price: 749.99
  },
  {
    id: 6,
    image: '/imgs/phone 6.png',
    title: 'Samsung Galaxy Z Flip 4',
    rating: 4.4,
    reviews: 190,
    price: 999.99
  },
  {
    id: 7,
    image: '/imgs/phone 7.png',
    title: 'Apple iphone  13',
    rating: 4.7,
    reviews: 340,
    price: 799.99
  },
  {
    id: 8,
    image: '/imgs/phone 8.png',
    title: 'Google Pixel 6a',
    rating: 4.3,
    reviews: 130,
    price: 449.99
  },
  {
    id: 9,
    image: '/imgs/phone 9.png',
    title: 'Realme GT 3',
    rating: 4.2,
    reviews: 120,
    price: 599.99
  },
  {
    id: 10,
    image: '/imgs/phone 10.png',
    title: 'Nothing phone  (1)',
    rating: 4.1,
    reviews: 100,
    price: 499.99
  },
  {
    id: 11,
    image: '/imgs/phone 11.png',
    title: 'Samsung Galaxy A54',
    rating: 4.0,
    reviews: 220,
    price: 449.99
  },
  {
    id: 12,
    image: '/imgs/phone 12.png',
    title: 'Motorola Edge 30 Ultra',
    rating: 4.3,
    reviews: 140,
    price: 699.99
  }
];
