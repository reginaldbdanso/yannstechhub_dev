const { StatusCodes } = require('http-status-codes');
const reviewService = require('../services/review/reviewService');

// Get all reviews
const getReviews = async (req, res) => {
  const reviews = await reviewService.getAllReviews();
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

// Get single review
const getReview = async (req, res) => {
  const { id: reviewId } = req.params;
  const review = await reviewService.getReviewById(reviewId);
  res.status(StatusCodes.OK).json({ review });
};

// Create review
const createReview = async (req, res) => {
  const reviewData = {
    ...req.body,
    user: req.user.userId
  };
  const review = await reviewService.createreview(reviewData);
  res.status(StatusCodes.CREATED).json({ review });
};

// Update review
const updateReview = async (req, res) => {
  const { id: reviewId } = req.params;
  const { rating, title, comment } = req.body;
  const userId = req.user.userId;
  
  const review = await reviewService.updatereview(reviewId, {
    rating,
    title,
    comment
  }, userId);
  
  res.status(StatusCodes.OK).json({ review });
};

// Delete review
const deleteReview = async (req, res) => {
  const { id: reviewId } = req.params;
  const userId = req.user.userId;
  
  await reviewService.deletereview(reviewId, userId);
  res.status(StatusCodes.OK).json({ msg: 'Review removed successfully' });
};

module.exports = {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
