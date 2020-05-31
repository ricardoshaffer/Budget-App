const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api.js"));
// added localhost/budget for mongoose connect for offline rendering
mongoose.connect("mongodb://localhost/budget" || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
mongoose.connect(MONGODB_URI);
// routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});