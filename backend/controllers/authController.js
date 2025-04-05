const User = require('../models/user')
const Listing = require('../models/listings')
const jwt = require('jsonwebtoken')

const test = (req, res) => {
    res.json('test is working');
}

const registerUser = async(req, res) => { //this has to be an async function because mongoose db operations are async
    try{
        const {name, email, password} = req.body;
        if(name === "") {
            return res.json({error: 'Please enter a name!'})
        }
        if(password === "") {
            return res.json({error: 'Please enter a password!'})
        }
        
        const existingEmail = await(User.findOne({email}));

        if(existingEmail) {
            return res.json({error: "This email already exists. Please register with another email or login."})
        }

        const user = await User.create({name, email, password})
        return res.json({user})
    } catch(err) {
        console.log(err);
    }
}

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        const existingUser = await(User.findOne({email}));
        if(existingUser && existingUser.password === req.body.password) {
            jwt.sign({
                email: existingUser.email,
                id: existingUser._id, 
                name: existingUser.name
            }, process.env.JWT_STRING, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(existingUser) //set res.cookie as the token, also send back the user data
            })
            //double check if this is right
            // return res.json({success: "login successful", email: existingUser.name, password: existingUser.password, name: existingUser.name});
        } else if (existingUser && existingUser.password !== req.body.password) {
            return res.json({message: "password is incorrect"});
        } else {
            return res.json({message: "email not found"});
        }
    } catch(err) {
        return res.json({err: err});
    }
}

const getProfile = (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, process.env.JWT_STRING, {}, (err, user) => {
            if(err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.json({message: "logged out"});
}

const getListings = async(req, res) => {
    try {
        const listings = await(Listing.find());
        res.json(listings);
    } catch(err) {
        res.json({err: err});
    }
}

const createListing = async(req, res) => {
    try {
        const {title, description, price, userID, userEmail, thumbnail, condition, category, size} = req.body;
        //handle user id on the front end (make sure there's a stored cookie for the user)
        //same for the userEmail
        //might wanna add error handling for no thumbnail, but im p much implementing error handling for the other features on the front-end so hopefully we can avoid this for time's sake
        const listingResult = await(Listing.create({title, description, price, condition, category, userID, userEmail, thumbnail, size}));
    } catch(err) {
        res.json({err: err})
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    getListings,
    createListing,
    logoutUser
}