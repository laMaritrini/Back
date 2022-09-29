const mongoose = require("mongoose");
const { uri } = require("./envdb");

mongoose
  .connect(uri, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
