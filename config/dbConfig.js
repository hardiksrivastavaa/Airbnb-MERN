const mongoose = require("mongoose");

let dbUrl;

if (process.env.NODE_ENV !== "production") {
    dbUrl = process.env.MONGO_URL;
} else {
    dbUrl = process.env.ATLAS_URL;
}
connectedToDatabase()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });

async function connectedToDatabase() {
    await mongoose.connect(dbUrl);
}

module.exports = connectedToDatabase;


