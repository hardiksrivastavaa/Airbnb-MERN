// Import required modules and schemas
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../utils/schema.js");


// Middleware to check if user is authenticated (logged in)
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // Save the original URL to redirect after successful login
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You Must be logged in to perform this action!");
        return res.redirect("/login");
    }
    next();
};

// Middleware to pass saved redirect URL to views if it exists
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Middleware to check if current user is the owner of the listing
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Middleware to check if current user is the author of the review
module.exports.isReviewAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author._id.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Middleware to validate listing data before saving/updating
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

// Middleware to validate review data before saving
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

// Middleware to geocode a listing's location and attach coordinates to the request body
module.exports.geocodeLocation = async (req, res, next) => {
    try {

        let { location, country } = req.body.listing;
        let geometryLocation = `${location}, ${country}`;
        const apiKey = process.env.MAP_API;

        // Send a geocoding request to MapTiler
        const geoRes = await fetch(`https://api.maptiler.com/geocoding/${encodeURIComponent(geometryLocation)}.json?key=${apiKey}`);
        const geoData = await geoRes.json();

        let coordinates;

        // If geocoding returns valid results, extract coordinates from the first result
        if (geoData.features && geoData.features.length > 0) {
            coordinates = geoData.features[0].center;
        } else {
            // Default to New Delhi, India if no coordinates are found
            coordinates = [77.2090, 28.6139];
        }

        // Attach the coordinates to the listing as a GeoJSON Point
        req.body.listing.geometry = {
            type: "Point",
            coordinates: coordinates
        };
        
        return next(); 
    } catch (err) {
        req.flash("error", "Something went wrong while creating the listing.");
        res.redirect("/listings/new");
    }
};
