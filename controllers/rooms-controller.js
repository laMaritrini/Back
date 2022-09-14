const MockRooms = require("../data/mockRooms");

exports.getRooms = (req, res) => {
  res.json(MockRooms);
};

exports.getRoom = (req, res) => {
  const index = MockRooms.findIndex((item) => item.id === req.params.id);
  MockRooms[index] = { ...MockRooms[index] };
  res.json(MockRooms[index]);
};

exports.createNewRoom = (req, res) => {
  const newRoom = { ...req.body };
  MockRooms.push(newRoom);
  res.json(newRoom);
};

exports.deleteRoom = (req, res) => {
  let newMockRooms = MockRooms.filter((item) => item.id !== req.params.id);
  res.json(newMockRooms);
};

exports.updateRoom = (req, res) => {
  const index = MockRooms.findIndex((item) => item.id === req.params.id);
  MockRooms[index] = { ...MockRooms[index], ...req.body };
  res.json(MockRooms[index]);
};
