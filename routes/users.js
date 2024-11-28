const express = require('express');
const router = express.Router();
const {
    getAll,
    getOne,
    getUsersByAge,
    increaseAge,
    getCount,
    addUser
} = require('../controllers/userController');

router.post('/', addUser)
router.get("/", getAll);
router.get("/age/:minAge", getUsersByAge);
router.get("/:id/increase-age/:years", increaseAge);
router.get("/count", getCount);
router.get("/:id", getOne);

module.exports = router;