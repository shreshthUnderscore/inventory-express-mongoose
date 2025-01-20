const express = require("express");
const mongoose = require("mongoose");
const { Item, Category } = require("./models/models");
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");
const path = require("path");
const methodOverride = require("method-override");
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
}

app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// main page shows all categories
// localhost/categoryName -> shows all items | display GET create POST delete DELETE and update PUT
// localhost/categoryName/itemId -> show specific item |  display GET create POST delete DELETE and update PUT

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/category", categoryRouter);
app.use("/products", productRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
