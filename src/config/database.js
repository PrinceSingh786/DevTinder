const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://psjeee8:c2gLwSR7IQZtopbM@firstflight.b41ip9k.mongodb.net/princebabu"
  );
};

module.exports = connectDB;
