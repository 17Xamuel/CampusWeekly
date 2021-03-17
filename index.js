const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3600;

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/lifestyle", function (req, res) {
  res.render("lifestyle");
});
app.get("/carrier", function (req, res) {
  res.render("carrier");
});
app.get("/relationships", function (req, res) {
  res.render("relationships");
});
app.get("/personalities", function (req, res) {
  res.render("personalities");
});
app.get("/post", function (req, res) {
  res.render("story");
});

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} ....`);
});
