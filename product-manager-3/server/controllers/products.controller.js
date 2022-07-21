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

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((updatedProduct) => {
            res.json(updatedProduct);
            console.log(updatedProduct);
        }) 
        .catch((err) => {
            res.json({ message: 'Something went wrong with updating the product', error: err })
        });
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => {
            res.json(deleteConfirmation);
            console.log(deleteConfirmation);
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong with deleting the product', error: err })
        });
}