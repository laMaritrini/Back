require("../db");
const Contact = require("../models/contact-model");

exports.getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

exports.getContact = (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
exports.deleteContact = (req, res) => {
  Contact.remove({ _id: req.params.id }, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted contact!" });
  });
};
