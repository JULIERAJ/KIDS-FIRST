const mongoose = require("mongoose");

const memberSpaceSchema = new mongoose.Schema({
  memberId: { type: Schema.Types.ObjectId, ref: "familyMember" },
  spaceId: { type: Schema.Types.ObjectId, ref: "familySpace" },
  date: {
    type: Date,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
});
const memberSpace = mongoose.model("memberSpace", memberSpaceSchema);
module.exports = memberSpace;
