//this file is for setting up the routes that are going to be called from the frontend

const express = require('express');
const router = express.Router();
const cors = require('cors'); //allows you to connect to different hosts
const { test, registerUser, loginUser, getProfile, getListings, createListing, logoutUser } = require('../controllers/authController')

//middleware, origin set to http://localhost:5173/...
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
);

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get('/listings', getListings);
router.post('/createListing', createListing);
router.post('/logout', logoutUser);

module.exports = router;