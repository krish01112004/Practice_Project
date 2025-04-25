const joi = require("joi");
// using joi api to avoid empty information in post requests schema validation
// also works on get
module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().required(),
      description: joi.string().required(),
      location: joi.string().required(),
      country: joi.string().required(),
      price: joi.number().required().min(0),
      image: joi
        .object({
          url: joi.string().allow("", null),
        })
        .optional(),
    })
    .required(),
});

// checking for reviews
module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      comment: joi.string().allow(""),
    })
    .required(),
});
