const express = require('express');
const router = express.Router();
const { getInfos } = require('../controllers/serverController');

router.get("/info", getInfos);

module.exports = router;