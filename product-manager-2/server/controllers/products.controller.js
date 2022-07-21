const Product = require('../models/products.model.js');

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            res.json(newProduct);
            console.log(newProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with creating a new product', error: err })
        });
}


module.exports.findAllProducts = (req,res) => {
    Product.find({})
        .then((allProducts)=>{
            res.json(allProducts);
            console.log(allProducts);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with finding all products', error: err })
        });
} 

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct)=>{
            res.json(oneProduct);
            console.log(oneProduct);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with finding one product', error:err })
        });
}