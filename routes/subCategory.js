const express = require('express')
const router = express.Router()
const SubCategory = require('../models/SubCategory')

router.get('/', async (req, res) => {
    SubCategory.find()
        .exec((err, subCategories) => {
            if (err) return res.status(401).json({ success: false })
            res.status(201).json({ success: true, subCategories })
        })
})

router.post('/create', async (req, res) => {
    const { name, imageUrl, description, categoryID } = req.body
    try {
        let SubCategory = new SubCategory({
            name,
            imageUrl,
            description,
            categoryID
        })
        await SubCategory.save()
        res.status(201).json({
            success: true
        })

    } catch (err) {
        res.status(404).json({ success: false, error: err })
    }
})

module.exports = router