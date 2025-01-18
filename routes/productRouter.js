const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.showAllProducts);
router.get("/:productId", productController.productDetails);

module.exports = router;
