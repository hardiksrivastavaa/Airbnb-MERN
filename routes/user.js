const express = require("express");
const router = express.Router();
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares/middleware.js");
const userController = require("../controllers/users.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.route("/signup")
    .get(userController.showSignUpForm)
    .post(wrapAsync(userController.handleSignUpLogic));

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

// Logout user
router.get("/logout", userController.handleLogoutLogic);

module.exports = router;
