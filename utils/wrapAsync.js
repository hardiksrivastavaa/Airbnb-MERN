// A utility function to wrap async route handlers and pass errors to Express's error handler
module.exports = (fn) => {
    return (req, res, next) => {
        // Call the async function and catch any errors, forwarding them to the next middleware (error handler)
        fn(req, res, next).catch(next);
    };
};
