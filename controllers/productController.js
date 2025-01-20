const { Item, Category } = require("../models/models");

const showAllProducts = async function (req, res) {
  const productObjs = await Item.find({});
  res.render("products/index", { data: productObjs });
};

const productDetails = async function (req, res) {
  const { productId } = req.params;
  const productObj = await Item.findById(productId).populate("category");
  res.render("products/details", { object: productObj });
};

const newProduct = async function (req, res) {
  const categoryObj = await Category.find({});
  res.render("products/new", { data: categoryObj });
};

const createProduct = async function (req, res) {
  const { itemName, category, price } = req.body;
  const categoryId = await Category.find({ name: category }, "_id");
  await Item.create({ itemName, categoryId, price });
  res.redirect("/products");
};

module.exports = {
  showAllProducts,
  productDetails,
  newProduct,
  createProduct,
};
