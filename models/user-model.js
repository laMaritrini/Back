const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  job_title: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  phone_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  working_functions: {
    type: String,
    required: true,
  },
  working_situation: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("Users", userSchema);
module.exports = User;
