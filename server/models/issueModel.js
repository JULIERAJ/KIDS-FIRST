const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
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

const issue = mongoose.model("issue", issueSchema);

module.exports = issue;
