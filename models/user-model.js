const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },

  job_title: {
    type: String,
    enum: ["Manager", "Room Service", "Reception"],
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
    enum: ["ACTIVE", "INACTIVE"],
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const user = this;
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

const User = mongoose.model("Users", UserSchema);
module.exports = User;
