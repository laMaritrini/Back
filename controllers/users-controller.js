require("../db");
const User = require("../models/user-model");

exports.getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted user!" });
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    }
  );
};
