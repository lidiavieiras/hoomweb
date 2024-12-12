const express = require('express');
const authenticate = require('../src/middlewares/authMiddleware');
const ProductsController = require('../src/controller/ProductsController');

const router = express.Router();

router.get('/', authenticate, ProductsController.listProducts);
router.post('/', authenticate, ProductsController.createProduct);
router.get('/:id', authenticate, ProductsController.getProductById);
router.put('/:id', authenticate, ProductsController.updateProduct);
router.delete('/:id', authenticate, ProductsController.deleteProduct);

module.exports = router;
