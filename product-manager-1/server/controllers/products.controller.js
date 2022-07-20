const Product = require('../models/products.model.js');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json({ product: newProduct })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong with creating a new product', error: err })
    });
}