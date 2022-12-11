const mongoose = require("mongoose");



const message = mongoose.Schema(
    {
      content: {
        type: String
      },
      userId: {
        type: mongoose.Types.ObjectId
      }
    },
    { collection: "message"}
  );
  
module.exports = mongoose.model("Message", message);