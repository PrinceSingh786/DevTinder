const validator = require("validator");
const validateSignupData = (req) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("All fields are required: name, email, and password.");
  }

  if (!validator.isEmail(req.body.email)) {
    throw new Error("kya be ! Invalid email format");
    res.send("Invalid email format");
  }
};

module.exports = { validateSignupData };
