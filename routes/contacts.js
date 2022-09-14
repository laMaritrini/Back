var express = require("express");
const {
  getContacts,
  getContact,
  deleteContact,
} = require("../controllers/contacts-controller");

var router = express.Router();

router.get("/", getContacts);
router.get("/:id", getContact);
router.delete("/:id", deleteContact);

module.exports = router;
