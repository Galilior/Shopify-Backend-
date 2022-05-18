const router = require('express').Router()
const { models: { Inventory }} = require('../db')
module.exports = router


//These are all mounted on /api/inventory
//route to get all Inventory Items
router.get('/', async (req, res, next) => {
  try {
    const stock = await Inventory.findAll();
    res.json(stock)
  } catch (err) {
    next(err)
  }
 })

//route to edit items
// router.put('/:name', async(req, res, next) => {
//     try{

//     }catch(err){
//         next(err)
//     }
// })

//route to delete items
// router.delete('/:name', async(req, res, next) => {
//     try{

//     }catch(err){
//         next(err)
//     }
// })

//route to create items
// router.post('/', async(req, res, next) => {
//     try{

//     }catch(err){
//         next(err)
//     }
// })