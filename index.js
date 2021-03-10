const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} ....`);
});
