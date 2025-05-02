const User = require("../models/user");

module.exports.showSignUpForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.handleSignUpLogic = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", `Dear ${username}! Welcome to Wanderlust!`);
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.showLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.handleLoginLogic = async (req, res) => {
    req.flash(
        "success",
        `Dear ${req.user.username}! Welcome back to Wanderlust!`
    );
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.handleLogoutLogic = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};
