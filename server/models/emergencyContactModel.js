const mongoose = require("mongoose");

const emergencyContactSchema = new mongoose.Schema({
  spaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "familySpace",
  },

  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent",
  },
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
  phone: {
    type: Number,
    required: [true, "Enter your phone please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
  address: {
    type: String,
    required: [true, "Enter your address please"],
    trim: true,
    unique: false,
    lowercase: true,
  },
});

const emergencyContact = mongoose.model(
  "emergencyContact",
  emergencyContactSchema
);

module.exports = emergencyContact;
