const express = require("express");

const app = express();
const PORT = process.env.PORT || 3500;
app.get("/", (req, res) => {
  res.send("Hello Campus");
});
app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT} ....`);
});
