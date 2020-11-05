const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const productController = require('../controllers/productController');
const shipingController = require('../controllers/shippingController');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', userController.register);
router.post('/authenticate', userController.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, userController.userProfile);

router.get('/products', productController.get_products);
router.get('/products/:id', productController.get_product_by_id);
router.get('/shipping', shipingController.shippping);

module.exports = router;