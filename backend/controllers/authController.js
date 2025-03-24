const User = require('../models/user')
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

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}