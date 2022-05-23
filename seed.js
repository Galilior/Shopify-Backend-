const { green, red } = require("chalk");
const { db, Inventory } = require("./server/db");
//const Inventory = require("./server/db/inventory");


const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log(typeof Inventory)
    console.log(Inventory)
    // seed your database here!
    const strawberry = await Inventory.create({
        name: "Strawberry Slush",
        qty: 100
    });

    const banana = await Inventory.create({
        name: "Banana Blitz",
        qty: 100
    });

    const brownSugar = await Inventory.create({
        name: "Brown Sugar",
        qty: 200
    });

    const galaxy = await Inventory.create({
        name: "Galaxy Swirl",
        qty: 100
    });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    // const galaxy = await Inventory.create({
    //     name: "Galaxy Swirl",
    //     qty: 100
    // });

    db.close()

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
