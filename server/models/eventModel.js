const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent",
  },
  startDate: {
    type: Date,
    required: [true, "Enter start date please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  endDate: {
    type: Date,
    required: [true, "Enter end date please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  title: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  type: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
