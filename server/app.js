const express = require("express");
const feedbackRouter = require("./routes/feedbackRoutes");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

app.use("/api/v1/feedbacks", feedbackRouter);

app.all("*", (req, res, next) => {
  next(new Error(`This route ${req.originalUrl} doesn't exist.`));
});

app.use(globalErrorHandler);

module.exports = app;
