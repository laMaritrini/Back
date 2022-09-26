const MockReservations = require("../data/mockReservations");
require("../db");
const Booking = require("../models/booking-model");

exports.getBookings = (req, res) => {
  Booking.find({}, (err, booking) => {
    if (err) {
      res.send(err);
    }
    res.json(booking);
  });
};

exports.getBooking = (req, res) => {
  Booking.findById(req.params.id, (err, booking) => {
    if (err) {
      res.send(err);
    }
    res.json(booking);
  });
};

exports.createNewBooking = (req, res) => {
  let newBooking = new Booking(req.body);
  newBooking.save((err, booking) => {
    if (err) {
      res.send(err);
    }
    res.json(booking);
  });
};

exports.deleteBooking = (req, res) => {
  Booking.remove({ _id: req.params.id }, (err, booking) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted booking!" });
  });
};

exports.updateBooking = (req, res) => {
  Booking.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json(booking);
    }
  );
};
