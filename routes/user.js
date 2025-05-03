const express = require("express");
const router = express.Router();

const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares/middleware.js");
const userController = require("../controllers/users.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Route to show signup form and handle user registration
router.route("/signup")
    .get(userController.showSignUpForm) // Render signup form
    .post(wrapAsync(userController.handleSignUpLogic)); // Handle new user signup

// Route to show login form and handle user login
router.route("/login")
    .get(userController.showLoginForm) // Render login form
    .post(
        saveRedirectUrl, // Save the original URL the user wanted to access
        passport.authenticate("local", {
            failureRedirect: "/login", // Redirect back on login failure
            failureFlash: true,        // Show flash message on failure
        }),
        userController.handleLoginLogic // Custom login logic on success
    );

// Logout route
router.get("/logout", userController.handleLogoutLogic); // Log the user out and redirect

module.exports = router;
