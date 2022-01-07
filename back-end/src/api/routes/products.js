const express = require('express');

const router = express.Router();

const { products } = require('../controllers/productsController');

router.get('/products', products);

module.exports = router;
