const mongoose = require("mongoose");
const MongoURL = process.env.ATLAS_URL;

connectedToDatabase()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

async function connectedToDatabase() {
    await mongoose.connect(MongoURL);
}

module.exports = connectedToDatabase;


