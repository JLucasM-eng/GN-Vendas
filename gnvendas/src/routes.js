const router = require('express').Router()

//import controllers

const ProductController = require('./controllers/ProductController')

router.get('/listProduct',ProductController.listProduct)
router.post('/register',ProductController.register)
router.post('/buyProduct',ProductController.buyProduct)

module.exports = router