const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {
    isLoggedIn,
    isOwner,
    validateListing,
    geocodeLocation,
} = require("../middlewares/middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../config/cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.renderListings))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        geocodeLocation,
        validateListing,
        wrapAsync(listingController.postNewListing)
    );

// Show form to create a new listing
router.get("/new", isLoggedIn, listingController.renderNewListingForm);

router.get("/category/:category", wrapAsync(listingController.renderCategoryListings));

router.get("/search", listingController.searchListings);
router
    .route("/:id")
    .get(wrapAsync(listingController.showSpecificListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        geocodeLocation,
        validateListing,
        wrapAsync(listingController.postEditListing)
    )
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Show form to edit a listing
router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderListingEditForm)
);

module.exports = router;
