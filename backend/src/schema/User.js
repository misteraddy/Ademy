const mongooose = require("mongoose");

const userSchema = mongooose.Schema(
  {
    userName: String,
    userEmail: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);

module.exports = mongooose.model("User", userSchema);
