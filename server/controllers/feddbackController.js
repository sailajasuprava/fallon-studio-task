const Feedback = require("../models/feedbackModel");

async function createFeedback(req, res, next) {
  try {
    const { fullname, email, message } = req.body;

    const newFeedback = await Feedback.create({ fullname, email, message });

    res.status(201).json({
      status: "success",
      message: "feedback created successfully",
      data: newFeedback,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllFeedback(req, res, next) {
  try {
    const feedbacks = await Feedback.find();

    if (!feedbacks) {
      throw new Error("No feedbacks found.");
    }

    res.status(200).json({
      status: "success",
      data: feedbacks,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createFeedback, getAllFeedback };
