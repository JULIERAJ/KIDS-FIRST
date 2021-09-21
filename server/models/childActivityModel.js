const mongoose = require("mongoose");

const childActivitySchema = new mongoose.Schema({
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "activity",
  },
  childId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "child",
  },
});

const childActivity = mongoose.model("childActivity", childActivitySchema);

module.exports = childActivity;
