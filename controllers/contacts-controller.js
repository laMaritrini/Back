const MockContacts = require("../data/mockContacts");

exports.getContacts = (req, res) => {
  res.json(MockContacts);
};

exports.getContact = (req, res) => {
  const index = MockContacts.findIndex((item) => item.id === req.params.id);
  MockContacts[index] = { ...MockContacts[index] };
  res.json(MockContacts[index]);
};
exports.deleteContact = (req, res) => {
  let newMockContacts = MockContacts.filter(
    (item) => item.id !== req.params.id
  );
  res.json(newMockContacts);
};
