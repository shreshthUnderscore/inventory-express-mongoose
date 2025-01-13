const mongoose = require("mongoose");
const { Category, Item } = require("./models/models");

// async function main() {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");

//     const categories = await Category.insertMany([
//       { name: "fresh vegetables" },
//       { name: "fruits" },
//       { name: "dairy, bread & eggs" },
//       { name: "munchies" },
//     ]);

//     console.log("Inserted categories:", categories);
//   } catch (err) {
//     console.error("Error:", err);
//   } finally {
//     mongoose.connection.close(); // Ensure the connection is closed
//   }
// }

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/inventoryExpress");
    const allData = await Category.find({});

    const items = [];

    allData.forEach((category) => {
      items.push(
        {
          itemName: `${category.name} item 1`,
          category: category.id,
          price: `${Math.floor(Math.random() * 100)}`,
        },
        {
          itemName: `${category.name} item 2`,
          category: category.id,
          price: `${Math.floor(Math.random() * 100)}`,
        },
        {
          itemName: `${category.name} item 3`,
          category: category.id,
          price: `${Math.floor(Math.random() * 100)}`,
        }
      );
    });

    console.log(await Item.insertMany(items));
  } catch (err) {
    console.error(err);
  }
}

main();
