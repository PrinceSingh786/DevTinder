const express = require("express");

const app = express();

// Route handlers are given below

// This route will match any request to the root URL ("/test") and respond with "Hello World!"
// app.use("/test", (req, res) => {
//   res.send("Hello World from server using Express bbhaiya!");
// });

// app.use("/jai", (req, res) => {
//   res.send("Jai jai  jai ho! from server using Express!");
// });

// app.use("/", (req, res) => {
//   res.send("Ram Ram  bhaiya ji");
// });

// This will match only GET requests to the "/user" URL
app.get("/user", (req, res) => {
  res.send({ firstname: "Prince", lastname: "Singh" });
});

app.post("/us er", (req, res) => {
  //saving data to database
  res.send("Data saved to database");
});

app.delete("/user", (req, res) => {
  //deleting data from database
  res.send("Data deleted from database");
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
