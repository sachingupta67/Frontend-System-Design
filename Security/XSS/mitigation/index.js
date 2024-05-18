const express = require("express");
const app = express();
const PORT = 8080;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" + // local from own source do not trust from any where
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" // at script level we can define self & specific url & inline script
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(PORT, () => {
  console.log(`Listen ${PORT}`);
});
