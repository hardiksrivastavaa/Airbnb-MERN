const express = require("express");
const router = express.Router();

const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares/middleware.js");
const userController = require("../controllers/users.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Route to show signup form and handle user registration
router.route("/signup")
    .get(userController.showSignUpForm) 
    .post(wrapAsync(userController.handleSignUpLogic));

// Route to show login form and handle user login
router.route("/login")
    .get(userController.showLoginForm)
    .post(
        saveRedirectUrl, 
        passport.authenticate("local", {
            failureRedirect: "/login", 
            failureFlash: true,        
        }),
        userController.handleLoginLogic 
    );

// Logout route
router.get("/logout", userController.handleLogoutLogic); 

module.exports = router;
