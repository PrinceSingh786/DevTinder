const express = require("express");
require("./config/database");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken"); // For generating JWT tokens
const { auth } = require("./Middlewares/auth"); // Importing the auth middleware
const authRouter = require("./routes/authRouter"); // Importing the authentication routes
const profileRouter = require("./routes/profileRouter"); // Importing the profile routes

const app = express();
const { validateSignupData } = require("./utils/validation");
const connectDB = require("./config/database");
const bcrypt = require("bcrypt"); // For hashing passwords

const User = require("./models/user");

app.use(express.json());
// Middleware to parse JSON request bodies
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);

// app.get("/user", async (req, res) => {
//   const name = req.body.name;
//   try {
//     res.send(await User.findOne({ name: req.body.name }));
//   } catch (err) {
//     res.status(400).send("Error fetching user data");
//   }
// });

// app.get("/feed", async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.send(users);
//   } catch (err) {
//     res.status(400).send("Error fetching feed data");
//   }
// });

// app.delete("/user", async (req, res) => {
//   try {
//     await User.findOneAndDelete({});
//     res.send("Deleted successfully");
//   } catch (err) {
//     res.status(400).send("Error bhaiya ji");
//   }
// });

// app.patch("/user/:_id", async (req, res) => {
//   try {
//     const updatekrlo = ["name", "bio", "email"];
//     const isValidUpdate = Object.keys(req.body).every((key) =>
//       updatekrlo.includes(key)
//     );
//     if (req.body.name === "ramu aka") {
//       throw new Error("Name cannot be ramu aka   chalo bhago !");
//     }
//     if (!isValidUpdate) {
//       return res.status(400).send("Invalid update fields");
//     }
//     const eid = req.params?._id;
//     const data = req.body;
//     const updatedUser = await User.findByIdAndUpdate(eid, data, {
//       new: true, // Return the updated document
//       runValidators: true, // Ensure that the update respects the schema validation
//     });
//     res.send("all is ok " + updatedUser);
//   } catch (err) {
//     res.status(400).send("Error updating user data: " + err.message);
//   }
// });

connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

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

// const { auth } = require("./Middlewares/auth");
// app.use("/admin", auth);

// app.get("/dashboard", (req, res) => {
//   try {
//     throw new Error("This is an error from the dashboard route");
//     res.send("Welcome to the admin ");
//   } catch (err) {
//     console.error("Error occurred:", err);
//     res
//       .status(500)
//       .send("Prince Ji An error occurred while processing your request.");
//   }
//   // res.send("Welcome to the admin dashboard");
// });
// app.get("/user", (req, res) => {
//   res.send("Welcome to the user ");
// });

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
