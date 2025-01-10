const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fresh vegetables", "fruits", "dairy"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const PRODUCT = new mongoose.model("Product", productSchema);

module.exports = PRODUCT;
