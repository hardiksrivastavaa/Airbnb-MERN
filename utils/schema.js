const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        geometry: Joi.object({
            type: Joi.string().valid("Point").required(),
            coordinates: Joi.array().items(Joi.number()).length(2).required()
        }).required(),
        category: Joi.string().valid('mountains', 'cities', 'beaches', 'castles', 'artics').required()
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        comment: Joi.string().required(),
        rating: Joi.number().required().min(1).max(5),
    }).required(),
});

