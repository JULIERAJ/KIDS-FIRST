const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent",
  },
  childId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "child",
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

const interest = mongoose.model("interest", interestSchema);

module.exports = interest;
