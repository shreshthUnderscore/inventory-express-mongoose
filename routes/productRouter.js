const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.showAllProducts);
router.post("/", productController.createProduct);
router.get("/new", productController.newProduct);
router.get("/:productId", productController.productDetails);
router.patch("/:productId", productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);
router.get("/:productId/edit", productController.editProduct);

module.exports = router;
