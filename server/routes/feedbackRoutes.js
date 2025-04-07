const express = require("express");
const {
  getAllFeedback,
  createFeedback,
} = require("../controllers/feddbackController");

const router = express.Router();

router.route("/").get(getAllFeedback).post(createFeedback);

module.exports = router;
