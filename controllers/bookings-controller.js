require("../db");
const Booking = require("../models/booking-model");

exports.getBookings = async (req, res) => {
  try {
    let bookings = await Booking.find({}).populate("id_room").exec();
    res.json(bookings);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getBooking = async (req, res) => {
  try {
    {
      let booking = await Booking.findById(req.params.id)
        .populate("id_room")
        .exec();
      res.json(booking);
      console.log(`Booking ${booking.id_room.room_number} `);
    }
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.createNewBooking = async (req, res) => {
  try {
    let newBooking = new Booking(req.body);
    await newBooking.save((err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json(booking);
    });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted booking!" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    let booking = await Booking.findByIdAndUpdate(req.params.id, req.body);
    res.json(booking);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
