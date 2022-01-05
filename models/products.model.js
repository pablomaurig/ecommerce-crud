const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price:  {
        type: Number,
        required: true,
    },
    stock:  {
        type: Number,
        required: true,
    },
})

const model = mongoose.model('productos', productsSchema);

module.exports = model;