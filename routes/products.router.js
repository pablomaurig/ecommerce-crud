const express = require('express');
const res = require('express/lib/response');
const { addProduct, deleteProduct, getProducts, updateProduct } = require('../services/products.service')

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

router.patch('/:id', async (req, res) => {
    const response = await updateProduct(req.params.id, req.body)

    res.send(response)
})

router.delete('/:id', async (req, res) => {
    const response = await deleteProduct(req.params.id)

    res.send(response)
})

module.exports = router;