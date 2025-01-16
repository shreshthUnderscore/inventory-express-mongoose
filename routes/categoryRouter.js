const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.displayCategories);
router.post("/", categoryController.createCategory);
router.get("/:categoryId", categoryController.displayCategoryItems);
router.post("/:categoryId", categoryController.updateCategory);
router.get("/:categoryId/edit", categoryController.editCategory);

module.exports = router;
