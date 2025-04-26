const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require("dotenv").config();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const MongoURL = process.env.MONGO_URL;

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


async function main() {
    await mongoose.connect(MongoURL);
}

// Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

//New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Create Route
app.post("/listings/new", async (req, res) => {
    {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    }
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

// Update Route
app.put("/listings/:id", async (req, res) => {
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
});

// Delete Route
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on port 8080");
});
