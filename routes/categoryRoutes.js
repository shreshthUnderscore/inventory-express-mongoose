const Router = require("express");
const categoryRouter = Router();
const categoryController = require("../contollers/categoryController");

categoryRouter.get("/", (req, res) => {
  req.render("index.ejs", {
    title: Categories,
    data: categoryController.getAllCategories,
  });
});
