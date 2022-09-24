const { db } = require("../db");

exports.getBookings = (req, res) => {
  db.query("SELECT * FROM bookings", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getBooking = (req, res) => {
  db.query(
    "SELECT * FROM bookings WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      console.log(req.params.id);
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};

exports.createNewBooking = (req, res) => {
  let booking = req.body;
  let newBooking = [
    booking.full_name,
    booking.order_date,
    booking.check_in,
    booking.check_out,
    booking.special_request,
    booking.status,
  ];
  let sql =
    "INSERT INTO bookings (full_name, order_date, check_in, check_out, special_request, status) VALUES (?)";
  db.query(
    sql,
    [newBooking],

    (err, rows, fields) => {
      console.log(rows);
      if (!err) res.send("Booking created successfully.");
      else console.log(err);
    }
  );
};

exports.deleteBooking = (req, res) => {
  db.query(
    "DELETE FROM bookings WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send("Booking deleted successfully.");
      else console.log(err);
    }
  );
};

exports.updateBooking = (req, res) => {
  let booking = req.body;
  let sql =
    "UPDATE bookings SET full_name=?, order_date=?, check_in=?, check_out=?, special_request=?, status=? WHERE id =" +
    req.params.id;
  db.query(
    sql,
    [
      booking.full_name,
      booking.order_date,
      booking.check_in,
      booking.check_out,
      booking.special_request,
      booking.status,
    ],

    (err, rows, fields) => {
      if (!err) res.send("Booking updated successfully.");
      else console.log(err);
    }
  );
};
