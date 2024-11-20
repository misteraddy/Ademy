const { MONGO_URI } = require("./serverConfig");
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.log(error);
  }
}

module.exports = connectDB;
