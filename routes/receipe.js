const express = require('express');
const router = express.Router();
const { addReceipe, getAll } = require('../controllers/receipeController');

router.get("/", getAll);
router.post("/", addReceipe);

module.exports = router;