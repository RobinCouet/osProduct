const express = require('express');
const router = express.Router();
const { getAll, getOne, getPriceByProductQt, getProductsByStock } = require('../controllers/productController');

router.get("/", getAll);
router.get('/:id', getOne);
router.get("/instock/:qt", getProductsByStock);
router.get("/:id/:qt", getPriceByProductQt);

module.exports = router;