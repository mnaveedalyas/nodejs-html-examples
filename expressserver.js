require('dotenv').config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3001;
//const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!... i am testing my express server at Port "+port);
});

app.listen(port, () => {
  console.log(`My Test app listening on port ${port}!`);
});