// Custom error class to handle application-specific errors
class ExpressError extends Error {
    constructor(statusCode, message) {
        super(); // Call the parent class (Error) constructor
        this.statusCode = statusCode; // HTTP status code for the error (e.g., 404, 500)
        this.message = message; // Custom error message
    }
}

module.exports = ExpressError; // Export the class for use in other files
