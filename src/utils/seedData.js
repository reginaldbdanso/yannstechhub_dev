const User = require('../models/User');
const Product = require('../models/Product');

const seedData = async () => {
  try {
    // Check if data already exists
    const userCount = await User.countDocuments();
    const productCount = await Product.countDocuments();

    if (userCount > 0 || productCount > 0) {
      console.log('Database already seeded. Skipping seed operation.');
      return;
    }

    // Create test user
    const user = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      password: 'Password@123',
      role: 'admin'
    });

    // Create sample products
    const products = await Product.create([
      {
        name: 'Laptop',
        description: 'High-performance laptop with latest specifications',
        price: 999.99,
        imageUrl: 'https://example.com/laptop.jpg',
        category: 'Electronics',
        seller: user._id,
        stock: 10
      },
      {
        name: 'Smartphone',
        description: 'Latest smartphone with advanced camera features',
        price: 699.99,
        imageUrl: 'https://example.com/phone.jpg',
        category: 'Electronics',
        seller: user._id,
        stock: 15
      },
      {
        name: 'Headphones',
        description: 'Premium wireless headphones with noise cancellation',
        price: 199.99,
        imageUrl: 'https://example.com/headphones.jpg',
        category: 'Electronics',
        seller: user._id,
        stock: 20
      }
    ]);

    console.log('Sample data seeded successfully');
    console.log('Test user credentials:');
    console.log('Email: test@example.com');
    console.log('Password: Password@123');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  }
};

module.exports = seedData;