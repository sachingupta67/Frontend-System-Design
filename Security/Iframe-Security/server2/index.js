const express = require("express");

const app = express();

const PORT = 3020;
// app.use((req, res, next) => {
//   res.setHeader("Content-Security-Policy", "frame-ancestors 'none'"); // it will refuse if is not same origin
//   next();
// });
app.use(express.static("public"));

app.get("/iframe-website1", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website1.html");
});

app.get("/iframe-website2", (req, res) => {
  res.sendFile(__dirname + "/public/iframe-website2.html");
});

app.listen(PORT, () => {
  console.log(`Server 2 | Child Is Listening at ${PORT}`);
});
