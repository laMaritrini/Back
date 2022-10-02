require("../db");
const User = require("../models/user-model");

exports.getUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.json(users);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.json({
      message: "You made it to the secure route",
      user: req.user,
      token: req.query.secret_token,
    });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.createNewUser = async (req, res) => {
  try {
    let newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted user!" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
