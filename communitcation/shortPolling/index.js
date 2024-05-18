const express = require("express");
const app = express();

let data = "initial data";
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({ data });
});

app.get("/updateData", (req, res) => {
  data = "Updated Data";
  res.send({ data });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Short Polling is on Port : ${PORT}`);
});
