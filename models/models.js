const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: "true",
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Item = new mongoose.model("Product", itemSchema);
const Category = new mongoose.model("Category", categorySchema);

module.exports = {
  Item,
  Category,
};
