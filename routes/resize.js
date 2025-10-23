const express = require('express');
const router = express.Router();
const resizeController = require('../controllers/resizeController');

router.post('/resize', resizeController.resizeImage);

module.exports = router;
