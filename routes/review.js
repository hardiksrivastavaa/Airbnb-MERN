const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
    isLoggedIn,
    validateReview,
    isReviewAuthor,
} = require("../middlewares/middleware.js");
const reviewController = require("../controllers/reviews.js");

// Create a new review
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.postNewReview)
);

// Delete a review
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;
