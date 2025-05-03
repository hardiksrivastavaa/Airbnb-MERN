const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoURL = process.env.ATLAS_URL;

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

const initDB = async () => {
    await Listing.deleteMany({});
    console.log("Deleted all Listings from the database");
    initData.data = initData.data.map((obj) => ({...obj, owner: "6815845cb3682e0f7b4365e4" }));
    await Listing.insertMany(initData.data);
    console.log("Inserted initial data into the database");
};

initDB();
