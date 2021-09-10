const mongoose = require("mongoose");

const familySpaceSchema = new mongoose.Schema({
  creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "familyMember" },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
});
const familySpace = mongoose.model("familySpace", familySpaceSchema);
module.exports = familySpace;
