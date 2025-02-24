const Booking = require("../models/booking");
const { NotFoundError } = require("../utils/errors");

class BookingService {
  static async createBooking(bookingData) {
    try {
      const booking = new Booking(bookingData);
      return await booking.save();
    } catch (error) {
      throw error;
    }
  }

  static async getBookings(filters = {}) {
    try {
      const query = {};
      if (filters.date) {
        query.bookingDate = new Date(filters.date);
      }
      if (filters.vendor) {
        query["vendor.name"] = filters.vendor;
      }
      return await Booking.find(query);
    } catch (error) {
      throw error;
    }
  }

  static async getBookingById(id) {
    try {
      const booking = await Booking.findOne({ bookingId: id });
      if (!booking) {
        throw new NotFoundError("Booking not found");
      }
      return booking;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBooking(id) {
    try {
      const result = await Booking.deleteOne({ bookingId: id });
      if (result.deletedCount === 0) {
        throw new Error("Booking not found");
      }
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookingService;
