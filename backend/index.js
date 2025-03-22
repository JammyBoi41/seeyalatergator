const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const { mongoose } = require('mongoose')


//for connecting to mongodb
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Successfully connected to Database!")
}).catch(err => {
    console.log("Failed to connect to Database with the following error: ", err)
})


const app = express();
app.use(express.json()) //middleware

//the express application is going to use routes that are set up in authRoutes
app.use('/', require('./routes/authRoutes'))

const PORT = 8000;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});