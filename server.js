const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// express initializations
const app = express()

// MiddleWares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Connecting with MongoDB
const connect = mongoose.connect('mongodb+srv://m0moooZ:momoftw1!@react-blog.pf36a.mongodb.net/XngTraining?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


// setting up my routs 
app.use('/api/user', require('./routes/user'));
app.use('/api/product', require('./routes/product'));
app.use('/api/category', require('./routes/category'));
app.use('/api/subcategory', require('./routes/subCategory'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/order', require('./routes/order'));

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on ${port}`)
})


