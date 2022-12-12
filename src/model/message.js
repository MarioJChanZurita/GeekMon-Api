const mongoose = require("mongoose");



const message = mongoose.Schema(
    {
      content: {
        type: String
      },
      userId: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
      }]
    },
    { collection: "message"}
  );
  
module.exports = mongoose.model("Message", message);