const { body, param, query, validationResult } = require("express-validator");

const validateBooking = [
  body("bookingId").isString().notEmpty(),
  body("customerName").isString().notEmpty(),
  body("bookingDate").isISO8601(),
  body("amount").isNumeric(),
  body("vendor.name").isString().notEmpty(),
  body("vendor.type").isIn(["AIRLINE", "HOTEL"]),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateFilters = [
  query("date").optional().isISO8601(),
  query("vendor").optional().isString(),
];

module.exports = {
  validateBooking,
  validateFilters,
};
