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

module.exports = {
  showAllProducts,
  productDetails,
};
