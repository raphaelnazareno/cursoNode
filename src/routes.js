const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductControllers');

routes.get('/products', ProductController.getProducts);
routes.post('/product', ProductController.createProduct);
routes.get('/product/:id', ProductController.findByIdProduct);
routes.put('/product/:id', ProductController.updateProduct);
routes.delete('/product/:id', ProductController.deleteProduct);

module.exports = routes;