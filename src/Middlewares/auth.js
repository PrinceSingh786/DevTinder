const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  console.log("Authentication middleware called");
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new Error("Token not found");
    }
    const decodedtoken = await jwt.verify(token, "mysecretkey");
    if (!decodedtoken) {
      throw new Error("Invalid token");
    }

    const user = await User.findOne({ email: req.body.email }); // Await here!
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send("Authentication failed: " + err.message);
  }
};

module.exports = {
  auth,
};
