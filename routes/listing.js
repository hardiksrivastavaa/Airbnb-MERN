const express = require("express");
const router = express.Router();

// Utility to catch async errors and forward to error handler
const wrapAsync = require("../utils/wrapAsync.js");

// Middleware functions for validation, auth, ownership, and geocoding
const {
    isLoggedIn,
    isOwner,
    validateListing,
    geocodeLocation,
} = require("../middlewares/middleware.js");

// Controller for listing-related logic
const listingController = require("../controllers/listings.js");

// Multer config for file uploads (e.g. images) to cloud storage
const multer = require("multer");
const { storage } = require("../config/cloudConfig.js");
const upload = multer({ storage });

// Routes for listing resource

// GET all listings / POST new listing
router
    .route("/")
    .get(wrapAsync(listingController.renderListings)) // List all listings
    .post(
        isLoggedIn,                            // User must be logged in
        upload.single("listing[image]"),       // Handle image upload
        geocodeLocation,                       // Convert location to coordinates
        validateListing,                       // Validate listing data via Joi
        wrapAsync(listingController.postNewListing) // Save new listing
    );

// Show form to create a new listing
router.get("/new", isLoggedIn, listingController.renderNewListingForm);

// Show listings filtered by category
router.get("/category/:category", wrapAsync(listingController.renderCategoryListings));

// Search listings by keyword or location
router.get("/search", listingController.searchListings);

// GET a single listing / PUT to edit / DELETE to remove
router
    .route("/:id")
    .get(wrapAsync(listingController.showSpecificListing)) // Show single listing
    .put(
        isLoggedIn,                            // Must be logged in
        isOwner,                               // Must be owner of listing
        upload.single("listing[image]"),       // Handle image upload
        geocodeLocation,                       // Geocode location
        validateListing,                       // Validate edited data
        wrapAsync(listingController.postEditListing) // Update listing
    )
    .delete(
        isLoggedIn,                            // Must be logged in
        isOwner,                               // Must be owner of listing
        wrapAsync(listingController.destroyListing) // Delete listing
    );

// Show form to edit a listing
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderListingEditForm)
);

module.exports = router;
