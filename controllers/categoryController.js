const { Category, Item } = require("../models/models");

const displayCategories = async function (req, res) {
  const categories = await Category.find({});
  res.render("category/index", { categories });
};

const displayCategoryItems = async function (req, res) {
  const categoryId = req.params.categoryId;
  const categoryObj = await Category.findById(categoryId);
  const categoryName = categoryObj.name;
  const categoryItems = await Item.find({ category: categoryId });
  res.render("category/productDetails", { categoryName, categoryItems });
};

const createCategory = async function (req, res) {
  const categoryName = req.body.name;
  await Category.create({ name: categoryName });
  res.redirect("/category");
};

module.exports = {
  displayCategories,
  displayCategoryItems,
  createCategory,
};
