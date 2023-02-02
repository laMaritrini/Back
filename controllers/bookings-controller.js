require("../db");
const Booking = require("../models/booking-model");

exports.getBookings = async (req, res) => {
  try {
    let bookings = await Booking.find({}).exec();
    res.json(bookings);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getBooking = async (req, res) => {
  try {
    {
      let booking = await Booking.findById(req.params.id).exec();
      res.json(booking);
    }
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.createNewBooking = async (req, res) => {
  try {
    let newBooking = new Booking(req.body);
    await newBooking.save();
    res.json(newBooking);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    let bookings = Booking.findByIdAndDelete(req.params.id);
    await bookings;
    res.json({ message: "Successfully deleted booking!" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    let booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
    res.json(booking);
    console.log(booking);
  } catch (err) {
    return res.json({ status: 500, success: false, message: err.message });
  }
};
