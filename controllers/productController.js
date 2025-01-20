const { Item, Category } = require("../models/models");

const showAllProducts = async function (req, res) {
  const productObjs = await Item.find({});
  res.render("products/index", { data: productObjs });
};

const productDetails = async function (req, res) {
  const { productId } = req.params;
  const productObj = await Item.findById(productId).populate("category");
  res.render("products/details", { object: productObj, id: productId });
};

const newProduct = async function (req, res) {
  const categoryObj = await Category.find({});
  res.render("products/new", { data: categoryObj });
};

const createProduct = async function (req, res) {
  const { itemName, category, price } = req.body;
  const categoryId = await Category.findOne({ name: category }, "_id");
  await Item.create({ itemName, category: categoryId._id, price });
  res.redirect("/products");
};

const editProduct = async function (req, res) {
  const { productId } = req.params;
  const categories = await Category.find({});
  const product = await Item.findById(productId);
  res.render("products/edit", { id: productId, data: product, categories });
};

const updateProduct = async function (req, res) {
  const { itemName, category, price } = req.body;
  const { productId } = req.params;
  const categoryId = await Category.findOne({ name: category }, "_id");
  await Item.findByIdAndUpdate(productId, { itemName, categoryId, price });
  res.redirect(`/products/${productId}`);
};

const deleteProduct = async function (req, res) {
  const { productId } = req.params;
  await Item.findByIdAndDelete(productId);
  res.redirect("/products");
};

module.exports = {
  showAllProducts,
  productDetails,
  newProduct,
  createProduct,
  editProduct,
  updateProduct,
  deleteProduct,
};
