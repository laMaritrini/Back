const { db } = require("../db");

exports.getContacts = (req, res) => {
  db.query("SELECT * FROM contacts", (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
};

exports.getContact = (req, res) => {
  db.query(
    "SELECT * FROM contacts WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
};
exports.deleteContact = (req, res) => {
  db.query(
    "DELETE FROM contacts WHERE id = ?",
    [req.params.id],
    (err, rows, field) => {
      if (!err) res.send("Booking deleted successfully.");
      else console.log(err);
    }
  );
};
