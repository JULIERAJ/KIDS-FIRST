const mongoose = require("mongoose");

const familySpaceSchema = new mongoose.Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "familyMember" },
  memberSpaces: [{ type: Schema.Types.ObjectId, ref: "memberSpace" }],
});
const familySpace = mongoose.model("FamilySpace", familySpaceSchema);
module.exports = familySpace;
