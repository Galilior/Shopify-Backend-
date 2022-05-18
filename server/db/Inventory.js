const Sequelize = require('sequelize');
const db = require('./db');

const Inventory = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    qty: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
})

module.export = Inventory;