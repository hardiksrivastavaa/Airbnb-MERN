const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MongoURL = process.env.MONGO_URL;

console.log("MongoURL", MongoURL);

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
    initData.data = initData.data.map((obj) => ({...obj, owner: "68132bade83778c6f44282d9" }));
    await Listing.insertMany(initData.data);
    console.log("Inserted initial data into the database");
};

initDB();
