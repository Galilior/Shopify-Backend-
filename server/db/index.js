//this is the access point for all things database related!
const db = require('./db')

const Inventory = require('./Inventory')

//associations could go here!

module.exports = {
  db,
  models: {
    Inventory,
  },
}