const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/project', mainController.project);

module.exports = router;