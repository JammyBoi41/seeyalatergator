const User = require('../models/user')

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
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    test,
    registerUser
}