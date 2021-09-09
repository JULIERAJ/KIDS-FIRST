const mongoose = require("mongoose");

const familySpaceSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  creatorId: { type: Schema.Types.ObjectId, ref: "familyMember" },
  memberSpaces: [{ type: Schema.Types.ObjectId, ref: "memberSpace" }],
});
const familySpace = mongoose.model("familySpace", familySpaceSchema);
module.exports = familySpace;
