const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.showAllProducts);
router.post("/", productController.createProduct);
router.get("/new", productController.newProduct);
router.get("/:productId", productController.productDetails);

module.exports = router;
