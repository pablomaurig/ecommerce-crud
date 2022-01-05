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
    () => console.log("Mongoose is connected")
)

async function addProduct(product){
    try{
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

async function updateProduct(id, product){
    try{
        let updatedProduct = await ProductModel.findOneAndUpdate({_id: id}, product, {
            new: true
        });

        return updatedProduct;
    } catch(error){
        console.log(error)
    }
}

async function deleteProduct(id){
    try{
        let deletedProduct = await ProductModel.findOneAndDelete({_id: id});

        return deletedProduct;
    } catch(error){
        console.log(error)
    }
}

module.exports = {
    addProduct,
    deleteProduct,
    getProducts,
    updateProduct
}