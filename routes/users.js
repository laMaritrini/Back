var express = require("express");
const {
  getUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require("../controllers/users-controller");
var router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;

module.exports = router;
