const MockReservations = require("../data/mockReservations");

exports.getBookings = (req, res) => {
  res.json(MockReservations);
};

exports.getBooking = (req, res) => {
  const index = MockReservations.findIndex((item) => item.id === req.params.id);
  MockReservations[index] = { ...MockReservations[index] };
  res.json(MockReservations[index]);
};

exports.createNewBooking = (req, res) => {
  const newBooking = { ...req.body };
  MockReservations.push(newBooking);
  res.json(newBooking);
};

exports.deleteBooking = (req, res) => {
  let newMockReservations = MockReservations.filter(
    (item) => item.id !== req.params.id
  );
  res.json(newMockReservations);
};

exports.updateBooking = (req, res) => {
  const index = MockReservations.findIndex((item) => item.id === req.params.id);
  MockReservations[index] = { ...MockReservations[index], ...req.body };
  res.json(MockReservations[index]);
};
