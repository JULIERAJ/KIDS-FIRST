const mongoose = require("mongoose");

const familyMemberSchema = new mongoose.Schema({
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
});
const familyMember = mongoose.model("familyMember", familyMemberSchema);
const ParentSchema = new mongoose.Schema();
const parent = familyMember.model("parent", ParentSchema);
const ChildSchema = new mongoose.Schema({
  height: {
    type: Double,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  weight: {
    type: Double,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  bloodType: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  clothingSize: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
});
const child = familyMember.model("child", ChildSchema);

module.exports = { familyMember, parent, child };
