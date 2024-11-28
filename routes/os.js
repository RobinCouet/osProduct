const express = require('express');
const router = express.Router();
const { getInfos, getCpus, getOneCpu } = require('../controllers/osController');

router.get("/", getInfos);
router.get('/cpus', getCpus);
router.get('/cpus/:id', getOneCpu);

module.exports = router;