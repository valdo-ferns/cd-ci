const BookingService = require("../services/bookingService");

class BookingController {
  static async createBooking(req, res, next) {
    try {
      const booking = await BookingService.createBooking(req.body);
      res.status(201).json({
        success: true,
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getBookings(req, res, next) {
    try {
      const filters = {
        date: req.query.date,
        vendor: req.query.vendor,
      };
      const bookings = await BookingService.getBookings(filters);
      res.json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getBookingById(req, res, next) {
    try {
      const booking = await BookingService.getBookingById(req.params.id);
      res.json({
        success: true,
        data: booking,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteBooking(req, res, next) {
    try {
      await BookingService.deleteBooking(req.params.id);
      res.json({
        success: true,
        message: "Booking deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = BookingController;
