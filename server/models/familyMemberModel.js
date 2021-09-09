const mongoose = require("mongoose");

const familyMemberSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
  password: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  isParent: { type: Boolean, default: false, required: true },
  familySpaces: [{ type: Schema.Types.ObjectId, ref: "familySpace" }],
  memberSpaces: [{ type: Schema.Types.ObjectId, ref: "memberSpace" }],
});
const familyMember = mongoose.model("FamilyMember", familyMemberSchema);
module.exports = familyMember;
