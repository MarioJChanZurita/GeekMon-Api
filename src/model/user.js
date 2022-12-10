const mongoose = require("mongoose");
const crypto = require("crypto");


const userSchema = mongoose.Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String
    }
  },
  { collection: "user" }
)


const userModel = mongoose.model("User", userSchema);



module.exports = userModel
