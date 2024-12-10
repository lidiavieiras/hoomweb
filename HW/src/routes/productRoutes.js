const express = require('express');
const authenticate = require('../src/middlewares/authMiddleware');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', authenticate, productController.listProducts);
router.post('/', authenticate, productController.createProduct);
router.put('/:id', authenticate, productController.updateProduct);
router.delete('/:id', authenticate, productController.deleteProduct);

module.exports = router;
