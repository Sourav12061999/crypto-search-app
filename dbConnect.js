const mongoose = require("mongoose");
let connection = false;
require("dotenv").config();
async function dbConnect() {
  if (connection) {
    return;
  }
  const MONGODB_URL = process.env.MONGODB_URL;
  await mongoose.connect(MONGODB_URL);
  connection = true;
}

export default dbConnect;
