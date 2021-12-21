const express = require('express');
const covidController = require('../../controllers/covid.controller');

const router = express.Router();

router.get('/top/:stat/:daterange', covidController.top);
router.get('/ratio/:country/:daterange', covidController.ratio);
router.get('/trend/:country', covidController.trend);

module.exports = router;
