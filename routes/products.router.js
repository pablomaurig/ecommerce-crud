const express = require('express');
const { getProducts, addProduct } = require('../services/products.service')

const router = express.Router();

router.get('/', async (req, res) => {
    const productos = await getProducts();

    res.json(productos);
})

router.post('/', async (req, res) => {
    const newProduct = req.body
    const product = await addProduct(newProduct);

    res.json(product);
})

module.exports = router;