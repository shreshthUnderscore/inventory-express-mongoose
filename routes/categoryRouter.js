const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.displayCategories);
router.post("/", categoryController.createCategory);
router.get("/:categoryId", categoryController.displayCategoryItems);

module.exports = router;
