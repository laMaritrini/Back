var express = require("express");
const {
  getRooms,
  getRoom,
  createNewRoom,
  deleteRoom,
  updateRoom,
} = require("../controllers/rooms-controller");

var router = express.Router();

router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", createNewRoom);
router.delete("/:id", deleteRoom);
router.put("/:id", updateRoom);

module.exports = router;
