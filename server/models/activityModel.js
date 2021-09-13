const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent",
  },
  date: {
    type: Date,
    required: [true, "Enter date please"],
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

const activity = mongoose.model("activity", activitySchema);

module.exports = activity;
