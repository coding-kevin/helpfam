const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required"],
    },
    email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
      unique: true,
    },
    userType: {
      type: String,
      required: [true, "Select user role"],
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UsersSchema);

module.exports = User;
