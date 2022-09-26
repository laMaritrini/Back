const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: false,
  },
  room_type: {
    type: String,
    required: true,
  },

  room_number: {
    type: Number,
    required: true,
  },
  facilities: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offer_price: {
    type: Number,
    required: false,
  },

  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const Room = mongoose.model("Rooms", roomSchema);
module.exports = Room;
