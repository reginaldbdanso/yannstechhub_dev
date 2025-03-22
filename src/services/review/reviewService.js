const Review = require('../../models/Review.js');

// Create a new review
const createreview = async (reviewData) => {
  try {
    const review = new Review(reviewData);
    return await review.save();
  } catch (error) {
    throw error;
  }
};

// Get all reviews
const getAllReviews = async () => {
  try {
    return await Review.find();
  } catch (error) {
    throw error;
  }
};

// Get review by ID
const getReviewById = async (reviewId) => {
  try {
    return await Review.findById(reviewId);
  } catch (error) {
    throw error;
  }
};

// Update review
const updatereview = async (reviewId, updateData) => {
  try {
    return await Review.findByIdAndUpdate(reviewId, updateData, { new: true });
  } catch (error) {
    throw error;
  }
};

// Delete review
const deletereview = async (reviewId) => {
  try {
    return await Review.findByIdAndDelete(reviewId);
  } catch (error) {
    throw error;
  }
};

// Get reviews by user ID
const getReviewsByUserId = async (userId) => {
  try {
    return await Review.find({ userId: userId });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createreview,
  getAllReviews,
  getReviewById,
  updatereview,
  deletereview,
  getReviewsByUserId
};
