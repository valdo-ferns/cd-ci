const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/bookingController");
const { validateBooking, validateFilters } = require("../middleware/validator");

router.post("/", validateBooking, BookingController.createBooking);
router.get("/", validateFilters, BookingController.getBookings);
router.get("/:id", BookingController.getBookingById);
router.delete("/:id", BookingController.deleteBooking);

module.exports = router;
