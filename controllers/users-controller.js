const MockUsers = require("../data/mockUsers");

exports.getUsers = (req, res) => {
  res.json(MockUsers);
};

exports.getUser = (req, res) => {
  const index = MockUsers.findIndex((item) => item.id === req.params.id);
  MockUsers[index] = { ...MockUsers[index] };
  res.json(MockUsers[index]);
};

exports.createNewUser = (req, res) => {
  const newUser = { ...req.body };
  MockUsers.push(newUser);
  res.json(newUser);
};

exports.deleteUser = (req, res) => {
  let newMockUsers = MockUsers.filter((item) => item.id !== req.params.id);
  res.json(newMockUsers);
};

exports.updateUser = (req, res) => {
  const index = MockUsers.findIndex((item) => item.id === req.params.id);
  MockUsers[index] = { ...MockUsers[index], ...req.body };
  res.json(MockUsers[index]);
};
