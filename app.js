const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

require("dotenv").config(); // Load env variables
require("./config/dbConfig.js"); // Connect to DB
const MongoURL = process.env.ATLAS_URL;

// Route files
const userRoute = require("./routes/user.js");
const listingRoute = require("./routes/listing.js");
const reviewRoute = require("./routes/review.js");

// View engine setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware setup
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Session configuration
const store = MongoStore.create({
    mongoUrl: MongoURL,
    crypto: {
        secret: process.env.SESSION_SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("Error in Mongo Session Store", err);
});

// Session configuration
const sessionOptions = {
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to pass flash messages and current user to views
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Home route
app.get("/", (req, res) => {
    res.redirect("/listings");
});

// Mounting routes
app.use("/", userRoute);
app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);

// Catch-all for unknown routes
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

if (process.env.NODE_ENV !== "production") {
    app.listen(process.env.PORT, async () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
        await connectedToDatabase();
    });
} else {
    await connectedToDatabase();
}

module.exports = app;
