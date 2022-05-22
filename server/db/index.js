//this is the access point for all things database related!
const db = require('./database')

const Inventory = require('./inventory')

//associations could go here!

module.exports = {
  db,
  Inventory,
}