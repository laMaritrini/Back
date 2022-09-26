require("../db");
const Room = require("../models/room-model");

exports.getRooms = (req, res) => {
  Room.find({}, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.getRoom = (req, res) => {
  Room.findById(req.params.id, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.createNewRoom = (req, res) => {
  let newRoom = new Room(req.body);
  newRoom.save((err, room) => {
    if (err) {
      res.send(err);
    }
    res.json(room);
  });
};

exports.deleteRoom = (req, res) => {
  Room.remove({ _id: req.params.id }, (err, room) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted room!" });
  });
};

exports.updateRoom = (req, res) => {
  Room.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, room) => {
      if (err) {
        res.send(err);
      }
      res.json(room);
    }
  );
};
