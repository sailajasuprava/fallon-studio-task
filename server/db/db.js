const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("DB connection error - ", error);
  }
}

module.exports = connectToDatabase;
