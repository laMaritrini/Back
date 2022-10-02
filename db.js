const mongoose = require("mongoose");
const { uriExample } = require("./envdb-example");
const { uri } = require("./envdb");

mongoose
  .connect(uriExample, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
