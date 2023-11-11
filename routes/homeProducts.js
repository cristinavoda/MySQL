const express = require('express')
const router = express.Router();
const { getProducts, getProduct, deleteProduct, createProduct, updateProduct } = require('../controllers/homeProducts')

router.get("/home-products", getProducts)
router.get("/home-products/:id", getProduct)
router.post("/home-products", createProduct)
router.put("/home-products/:id", updateProduct)
router.delete("/home-products/:id", deleteProduct)

module.exports = router