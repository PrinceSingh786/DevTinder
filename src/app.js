const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello World from server using Express!");
});

app.use("/jai", (req, res) => {
  res.send("Jai jai  jai ho! from server using Express!");
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
