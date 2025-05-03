const Listing = require("../models/listing");

// Render all listings
module.exports.renderListings = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

// Handle searching of listings based on their category
module.exports.renderCategoryListings = async (req, res) => {
    const { category } = req.params;
    const listings = await Listing.find({ category });
    res.render("listings/index", { allListings: listings });
};

// Handle searching of listings
module.exports.searchListings = async (req, res) => {
    const query = req.query.query; 
    const listings = await Listing.find({
        title: { $regex: query, $options: "i" } // 'i' for case-insensitive matching
    });
    res.render("listings/index", { allListings: listings });
};

// Render form to create a new listing
module.exports.renderNewListingForm = (req, res) => {
    res.render("listings/new.ejs");
};

// Handle creation of a new listing
module.exports.postNewListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let geometry = req.body.listing.geometry;

    const newListing = new Listing(req.body.listing);
    newListing.geometry = geometry;
    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();
    req.flash("success", "Listing Created Successfully!");
    res.redirect("/listings");
};

// Show a specific listing by ID
module.exports.showSpecificListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: { path: "author" },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested for does not exists!");
        return res.redirect("/listings");
    }
    
    res.render("listings/show.ejs", { listing });
};

// Render edit form for a specific listing
module.exports.renderListingEditForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exists!");
        return res.redirect("/listings");
    }

    // Resize image preview
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

// Handle update to a listing
module.exports.postEditListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    listing.geometry = req.body.listing.geometry;

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
    }

    await listing.save();

    req.flash("success", "Listing Edited Successfully!");
    res.redirect(`/listings/${id}`);
};

// Delete a listing
module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully!");
    res.redirect("/listings");
};
