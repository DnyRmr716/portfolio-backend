const express = require('express');
const { getLandingData } = require('../controllers/landingController');
const router = express.Router();

router.get('/', getLandingData);

module.exports = router;
