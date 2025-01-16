const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.displayCategories);
router.get("/:categoryId", categoryController.displayCategoryItems);

module.exports = router;
