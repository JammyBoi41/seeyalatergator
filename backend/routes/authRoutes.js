const express = require('express');
const router = express.Router();
const cors = require('cors'); //allows you to connect to different hosts
const { test } = require('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get('/', test);

module.exports = router;