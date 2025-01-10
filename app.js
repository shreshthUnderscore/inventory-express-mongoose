const express = require("express");
const mongoose = require("mongoose");
const PRODUCT = require("./models/product");
const app = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
}

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// main page shows all categories
// localhost/categoryName -> shows all items | display GET create POST delete DELETE and update PUT
// localhost/categoryName/itemId -> show specific item |  display GET create POST delete DELETE and update PUT

app.get("/", (req, res) => {});
app.get("/:categoryName", (req, res) => {});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
