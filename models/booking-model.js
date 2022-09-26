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

  status: {
    type: String,
    required: true,
  },
  id_room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rooms",
  },
});
const Booking = mongoose.model("Bookings", bookingSchema);
module.exports = Booking;
