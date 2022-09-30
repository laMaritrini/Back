require("../db");
const Room = require("../models/room-model");

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.json(room);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.createNewRoom = async (req, res) => {
  try {
    let newRoom = new Room(req.body);
    await newRoom.save();
    res.json(newRoom);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Successfully deleted room!" });
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    let room = await Room.findByIdAndUpdate(req.params.id, req.body);
    res.json(room);
  } catch (err) {
    return res.json({ success: false, message: err.message });
  }
};
