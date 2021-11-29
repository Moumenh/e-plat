const mongoose = require('mongoose')

//Scheema
const productSchema = mongoose.Schema({
    SubCategoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    images: [{
        type: String,
    }],
    deliveryTime: {
        type: Number
    },
    Warehouse: {
        type: String
    },
}, { timestamps: true })

//Create the model according to Scheema
const Product = mongoose.model('Product', productSchema);

//exporting the model to use mongoose functions 
module.exports = Product