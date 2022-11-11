const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },

  customer: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model("Contacts", contactSchema);
module.exports = Contact;
