const ProductsController = require ("../controllers/products.controller");

module.exports = (app) => {
    app.post("/api/products", ProductsController.createNewProduct);
    app.get("/api/products", ProductsController.findAllProducts);
    app.get("/api/products/:id", ProductsController.findOneProduct);
    app.put('/api/products/:id', ProductsController.updateProduct);
    app.delete('/api/products/:id', ProductsController.deleteProduct);
}