const mongoose = require("mongoose");


const accessTokens = mongoose.Schema(
  {
    token: {
      type: String
    },
    user_id: {
      type: mongoose.Types.ObjectId
    }
  },
  { collection: "token" }
);

module.exports = mongoose.model("Token", accessTokens);

