const express = require("express");

const app = express();

const PORT = 3010;

app.use(express.static("public"));

app.get("/example1", (req, res) => {
  console.log("hey");
  res.sendFile(__dirname + "/public/example1.html");
});

app.get("/example2", (req, res) => {
  res.sendFile(__dirname + "/public/example2.html");
});
app.get("/example3", (req, res) => {
  res.sendFile(__dirname + "/public/example3.html");
});

app.listen(PORT, () => {
  console.log(`Server 1 | Parent Is Listening at ${PORT}`);
});
