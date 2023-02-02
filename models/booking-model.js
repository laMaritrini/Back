const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  order_date: {
    type: Date,
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  special_request: {
    type: String,
    required: false,
  },
  room_type: {
    type: String,
    enum: ["Single Bed", "Double Superior", "Suite", "Double Bed"],
    required: true,
  },
  room_number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["In progress", "Check In", "Check Out"],
    required: true,
  },
});
const Booking = mongoose.model("Bookings", bookingSchema);
module.exports = Booking;
