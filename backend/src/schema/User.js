const mongooose = require("mongoose");

const userSchema = mongooose.Schema({
  userName: String,
  userEmail: String,
  password: String,
  role: String,
});

module.exports = mongooose.model("User", userSchema);
