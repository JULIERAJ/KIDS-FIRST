const mongoose = require("mongoose");

const familyMemberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Enter your name please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Enter your last name please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  password: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: [true, "Enter your date of birth please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Enter your email please"],
    unique: true,
    trim: true,
    lowercase: true,
  },

  isParent: { type: Boolean, default: false, required: true },
});
const familyMember = mongoose.model("familyMember", familyMemberSchema);
const ParentSchema = new mongoose.Schema();
const parent = familyMember.discriminator("parent", ParentSchema);
const ChildSchema = new mongoose.Schema({
  height: {
    type: mongoose.Schema.Types.Decimal128,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  weight: {
    type: mongoose.Schema.Types.Decimal128,
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
const child = familyMember.discriminator("child", ChildSchema);

module.exports = { familyMember, parent, child };
