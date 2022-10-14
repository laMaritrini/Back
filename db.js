const mongoose = require("mongoose");
const { uriExample } = require("./envdb-example");
const { uri } = require("./envdb");

mongoose
  .connect(uri, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));
