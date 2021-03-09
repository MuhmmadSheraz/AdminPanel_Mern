const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Provide Username"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
});

// Middlewares

// Compare Password
UserSchema.methods.matchPassword = async function (password) {
  console.log("1" + password);
  console.log("2" + this.password);
  if (password === this.password) {
    return true;
  } else false;
};

// Creating Token
UserSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, "JSON_WEB_TOKEN_PROTECTED", {
    expiresIn: "1h",
  });
};

const User = mongoose.model("users", UserSchema);
module.exports = User;
