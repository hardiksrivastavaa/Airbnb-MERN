const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env"});
const initData = require("./data.js");
const listing = require("../models/listing.js");

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
    await listing.deleteMany({});
    console.log("Deleted all listings from the database");
    await listing.insertMany(initData.data);
    console.log("Inserted initial data into the database");
};

initDB();