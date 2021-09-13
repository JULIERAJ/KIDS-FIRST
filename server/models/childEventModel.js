const mongoose = require("mongoose");

const childEventSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "event",
  },
  childId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "child",
  },
});

const event = mongoose.model("event", eventSchema);

module.exports = event;
