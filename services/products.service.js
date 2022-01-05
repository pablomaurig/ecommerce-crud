const db = require('mongoose');
const ProductModel = require('../models/products.model')
require('dotenv').config()
const MONGODB_URI = process.env.MONGODB_URL

db.Promise = global.Promise;
db.connect(
    MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log(" Mongoose is connected")
)

console.log('[db] Successfully connected')

async function addProduct(product){
    try{
        console.log('product', product)
        const newProduct = new ProductModel(product);
        
        return await newProduct.save()
    } catch(error){
        console.log(error)
    }
}

async function getProducts(){
    try{
        const products = await ProductModel.find();

        return products;
    } catch(error){
        console.log(error)
    }
}

module.exports = {
    addProduct,
    getProducts
}