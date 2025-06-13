const express = require("express");

const app = express();

app.use("/hey", (req, res) => {
  res.send("Hello from hey route!");
});

app.use("/test", (req, res) => {
  res.send("Hello from prince bro!");
});
app.use("/", (req, res) => {
  res.send("Hello from root route!");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
