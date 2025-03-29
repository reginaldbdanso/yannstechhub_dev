const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
// const seedData = require('./utils/seedData');
const seedData = require('./utils/populateProducts');

// Load environment variables
require('dotenv').config();

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const ordersRoutes = require('./routes/ordersRoutes');
const cartRoutes = require('./routes/cartRoutes');
const reviewsRoutes = require('./routes/reviewsRoutes');
// const protect = require('./middleware/auth').protect;

const app = express();


// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/reviews', reviewsRoutes);
app.use('/', (req, res) => {
  res.json({ message: "You have reached the Yannstechhub API" });
});
// app.use('/api/admin', protect, require('./routes/adminRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});



const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas
connectDB().then(() => {
  // Seed data in development environment
  if (process.env.NODE_ENV === 'development') {
    seedData().catch(console.error);
  }
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
}).catch((err) => {
  console.log(err);
});
