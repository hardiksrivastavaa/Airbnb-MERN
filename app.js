const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dontenv = require('dotenv').config();
const listing = require("./models/listing.js");

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

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new listing({
        title: "Rama Niwas",
        description: "Srivastava's Home",
        price: 100,
        location: "Raebareli",
        country: "India",
    });

    await sampleListing.save();
    console.log("Sample Listing Created");
    res.send("Sample Listing Created");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
