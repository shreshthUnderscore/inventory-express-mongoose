const { Category, Item } = require("../models/models");

const displayCategories = async function (req, res) {
  const categories = await Category.find({});
  res.render("category/index", { categories });
};

const displayCategoryItems = async function (req, res) {
  const categoryId = req.params.categoryId;
  const categoryName = await Category.findById(categoryId);
  const categoryItems = await Item.find({ category: categoryId });
  res.render("category/productDetails", { categoryName, categoryItems });
};

module.exports = {
  displayCategories,
  displayCategoryItems,
};
