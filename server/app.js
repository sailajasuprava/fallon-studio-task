const express = require("express");
const cors = require("cors");
const feedbackRouter = require("./routes/feedbackRoutes");
const globalErrorHandler = require("./controllers/errorController");

const corsOptions = {
  origin: " http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const app = express();

app.use(express.json());

app.use(cors(corsOptions));
app.use("/api/v1/feedbacks", feedbackRouter);

app.all("*", (req, res, next) => {
  next(new Error(`This route ${req.originalUrl} doesn't exist.`));
});

app.use(globalErrorHandler);

module.exports = app;
