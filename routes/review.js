const express = require("express");

// Use mergeParams to access params from parent routes (e.g., :id from /listings/:id/reviews)
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync.js");

// Middleware for authentication, validation, and authorization
const {
    isLoggedIn,
    validateReview,
    isReviewAuthor,
} = require("../middlewares/middleware.js");

// Controller containing review-related logic
const reviewController = require("../controllers/reviews.js");

// Route to create a new review for a listing
router.post(
    "/",
    isLoggedIn,                            // User must be logged in
    validateReview,                        // Validate review data using Joi
    wrapAsync(reviewController.postNewReview) // Handle review creation
);

// Route to delete a review
router.delete(
    "/:reviewId",
    isLoggedIn,                            // User must be logged in
    isReviewAuthor,                        // User must be the author of the review
    wrapAsync(reviewController.destroyReview) // Handle review deletion
);

module.exports = router;
