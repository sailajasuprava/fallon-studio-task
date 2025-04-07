require("dotenv").config();
const express = require("express");
const connectToDatabase = require("./db/db");

const app = express();

const port = process.env.PORT || 3000;

connectToDatabase()
  .then(() => {
    console.log("DB connection successful");
    app.listen(port, () => {
      console.log(`Server started at port:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
