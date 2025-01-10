const mongoose = require("mongoose");
const PRODUCT = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
}

async function getAllCategories() {
  const allCategories = await PRODUCT.find({});
  console.log(allCategories);
}

module.exports = {
  getAllCategories,
};
