require("../db");
const Booking = require("../models/booking-model");

exports.getBookings = (req, res) => {
  try {
    Booking.find({})
      .populate("id_room")
      .exec((err, booking) => {
        if (err) {
          console.log(err);
        }
        res.json(booking);
      });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getBooking = (req, res) => {
  try {
    {
      Booking.findById(req.params.id)
        .populate("id_room")
        .exec((err, booking) => {
          if (err) {
            console.log(err);
          }
          res.json(booking);
          console.log(`Booking ${booking.id_room.room_number} `);
        });
    }
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.createNewBooking = (req, res) => {
  try {
    let newBooking = new Booking(req.body);
    newBooking.save((err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json(booking);
    });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.deleteBooking = (req, res) => {
  try {
    Booking.remove({ _id: req.params.id }, (err, booking) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted booking!" });
    });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.updateBooking = (req, res) => {
  try {
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
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
