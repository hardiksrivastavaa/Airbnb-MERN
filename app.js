const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv").config();
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const { validateHeaderName } = require("http");
const MongoURL = process.env.MONGO_URL;

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

async function main() {
    await mongoose.connect(MongoURL);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

// Middleware for validating listings data
function validateListing(req, res, next) {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
}

// Middleware for validating reviews data
function validateReview(req, res, next) {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
}

// Root Route
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// Listing Route
app.get(
    "/listings",
    wrapAsync(async (req, res) => {
        const allListings = await Listing.find({});
        res.render("listings/index.ejs", { allListings });
    })
);

// New Listing Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Create Listing Route
app.post(
    "/listings",
    validateListing,
    wrapAsync(async (req, res) => {
        {
            const newListing = new Listing(req.body.listing);
            await newListing.save();
            res.redirect("/listings");
        }
    })
);

// Show Lisitng Route
app.get(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id).populate("reviews");
        res.render("listings/show.ejs", { listing });
    })
);

// Edit Listing Route
app.get(
    "/listings/:id/edit",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const listing = await Listing.findById(id);
        res.render("listings/edit.ejs", { listing });
    })
);

// Update Listing Route
app.put(
    "/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const updatedListing = await Listing.findByIdAndUpdate(
            id,
            { ...req.body.listing },
            {
                new: true,
                runValidators: true,
            }
        );
        res.redirect(`/listings/${id}`);
    })
);

// Delete Listing Route
app.delete(
    "/listings/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        await Listing.findByIdAndDelete(id);
        res.redirect("/listings");
    })
);

// Post Review Route
app.post(
    "/listings/:id/reviews",
    validateReview,
    wrapAsync(async (req, res) => {
        const listing = await Listing.findById(req.params.id);
        const newReview = new Review(req.body.review);
        listing.reviews.push(newReview);
        await newReview.save();
        await listing.save();
        res.redirect(`/listings/${listing._id}`);
    })
);

// Delete Review Route
app.delete(
    "/listings/:id/reviews/:reviewId",
    wrapAsync(async (req, res) => {
        const { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        res.redirect(`/listings/${id}`);
    })
);

// Catch-all route for 404 errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

// Start the server
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on port 8080");
});
