const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/wetherController');

router.get('/', weatherController.getHome);

router.get('/weather', weatherController.getWeather);

module.exports = router;
