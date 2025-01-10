const pool = require("./pool.js");

async function getAllCategories() {
  const allCategories = await PRODUCT.find({});
  console.log(allCategories);
}

module.exports = {
  getAllCategories,
};
