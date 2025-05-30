const express = require("express");
const { auth } = require("../Middlewares/auth");
const profileRouter = express.Router();
const User = require("../models/user");

profileRouter.get("/profile", auth, async (req, res) => {
  res.send(await User.findOne({ email: req.body.email }));
});

profileRouter.get("/feed", auth, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Error fetching feed data");
  }
});

module.exports = profileRouter;
