// DB imports
const mongoose = require('mongoose')
const uri = "mongodb+srv://admin:admin1234@cluster0.vrxrvym.mongodb.net/?retryWrites=true&w=majority";


const connect = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected to: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = {
    connect
}