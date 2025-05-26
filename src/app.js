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

// app.use("/user", [
//   (req, res, next) => {
//     console.log("Request received at /user");
//     next();
//     console.log("first hu");
//     // res.send("Ram   bhaiya ji");
//   },
//   (req, res, next) => {
//     console.log("2nd hu");
//     next();
//     // res.send("Ram Ram  bhaiya ji");
//   },
//   (req, res) => {
//     console.log("3rd hu");
//     res.send("Ram Rm  bhaiya ji");
//   },
// ]);

// This will match only GET requests to the "/user" URL
// app.get("/user/:userID/:age", (req, res) => {
//   console.log(req.params);
//   res.send({ firstname: "Prince", lastname: "Singh" });
// });

// app.post("/user", (req, res) => {
//   //saving data to database
//   res.send("Data saved to database");
// });

// app.delete("/user", (req, res) => {
//   //deleting data from database
//   res.send("Data deleted from database");
// });

const { auth } = require("./Middlewares/auth");
app.use("/admin", auth);

app.get("/dashboard", (req, res) => {
  try {
    throw new Error("This is an error from the dashboard route");
    res.send("Welcome to the admin ");
  } catch (err) {
    console.error("Error occurred:", err);
    res
      .status(500)
      .send("Prince Ji An error occurred while processing your request.");
  }
  // res.send("Welcome to the admin dashboard");
});
app.get("/user", (req, res) => {
  res.send("Welcome to the user ");
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
