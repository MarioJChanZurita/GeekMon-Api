const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let accessTokens = new Schema(
  {
    token: {
      type: String
    },
    user_id: {
      type: String
    }
  },
  { collection: "token" }
);

module.exports = mongoose.model("accessTokens", accessTokens);