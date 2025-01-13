const express = require("express");
const mongoose = require("mongoose");
const { Item, Category } = require("./models/models");
const path = require("path");

const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
}

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// main page shows all categories
// localhost/categoryName -> shows all items | display GET create POST delete DELETE and update PUT
// localhost/categoryName/itemId -> show specific item |  display GET create POST delete DELETE and update PUT

app.get("/category", async (req, res) => {
  const categories = await Category.find({});
  res.render("category/index", { categories });
});

app.get("/category/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  const categoryItems = await Item.find({ category: `${categoryId}` });
  res.render("category/productDetails", { categoryItems });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
