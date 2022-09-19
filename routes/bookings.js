var express = require("express");


const {
  getBookings,
  getBooking,
  createNewBooking,
  deleteBooking,
  updateBooking,
} = require("../controllers/bookings-controller");

var router = express.Router();

router.get("/",  getBookings);
router.get("/:id", getBooking);
router.post("/", createNewBooking);
router.delete("/:id", deleteBooking);
router.patch("/:id", updateBooking);

module.exports = router;
