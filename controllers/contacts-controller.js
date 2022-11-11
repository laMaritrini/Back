require("../db");
const Contact = require("../models/contact-model");

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
exports.deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted contact!" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
