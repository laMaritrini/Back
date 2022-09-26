const mongoose = require("mongoose");
const { uri } = require("./env");

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
