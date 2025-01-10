const mongoose = require("mongoose");
const PRODUCT = require("./models/product");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
}

const Onion = new PRODUCT({
  itemName: "Onion",
  category: "fresh vegetables",
  amount: 100,
  price: 99.18,
});

Onion.save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
