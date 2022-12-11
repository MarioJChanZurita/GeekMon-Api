const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  {
    username: {
      type: String
    },
    password: {
      type: String
    },
    role: {
      type: String
    }
  },
  { collection: "user" }
)


const userModel = mongoose.model("User", userSchema);



module.exports = userModel
