const mongoose = require("mongoose");
const MongoURL = process.env.MONGO_URL;

dbConnect()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

async function dbConnect() {
    await mongoose.connect(MongoURL);
}

module.exports = dbConnect;