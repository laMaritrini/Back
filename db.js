const mongoose = require("mongoose");
const { uri } = require("./env");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// const bookingSchema = new mongoose.Schema({
//   fullName: String,
// });

// const Booking = mongoose.model("Booking", bookingSchema);

// const newBooking = new Booking({ fullName: "Pepe" });
// console.log(newBooking.fullName);
//  newBooking.save()
