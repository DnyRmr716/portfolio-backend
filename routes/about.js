const express = require('express');
const { getAboutData } = require('../controllers/aboutController');
const router = express.Router();

router.get('/', getAboutData);

module.exports = router;
