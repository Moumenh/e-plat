const mongoose = require('mongoose')

//Scheema
const subCategorySchema = mongoose.Schema({
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
    categoryID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },

}, { timestamps: true })

//Create the model according to Scheema
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

//exporting the model to use mongoose functions 
module.exports = SubCategory