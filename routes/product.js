const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.post('/create', async (req, res) => {
    const { SubCategoryID, name, imageUrl, description, price, quantity, images } = req.body
    try {
        let product = new Product({
            SubCategoryID,
            name,
            imageUrl,
            description,
            price,
            quantity,
            images,
        })
        await product.save()
        res.status(201).json({
            success: true,
            "Request Changes": true
        })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

router.get('/getProducts', async (req, res) => {
    const SubCategoryID = req.query.SubCategoryID

    Product.find({ 'SubCategoryID': SubCategoryID })
        .exec((err, products) => {
            if (err) return res.status(401).json({ success: false })
            res.status(200).json({ success: true, products })
        })

})

router.get('/:id', async (req, res) => {
    const productID = req.params.id
    try {
        const product = await Product.findById(productID).exec();
        res.status(200).json({ success: true, product })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

module.exports = router