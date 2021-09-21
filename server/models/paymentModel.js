const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "parent",
  },

  title: {
    type: String,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },
  amount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true,
    trim: true,
    unique: false,
    lowercase: true,
  },

  description: {
    type: String,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
  date: {
    type: Date,
    required: false,
    trim: true,
    unique: false,
    lowercase: true,
  },
});

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;
