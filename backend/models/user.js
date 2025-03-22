//model for user database
const mongoose = require('mongoose')
const { Schema } = mongoose

//schema that matches the format of a User instance in User database
const userSchema = new Schema({ 
    name: String, 
    email: {
        type: String,
        unique: true
    },
    password: String
});


//put into 'User' collection
const UserModel = mongoose.model('User', userSchema); //represents the mongodb user db

module.exports = UserModel;