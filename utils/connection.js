const mongoose = require("mongoose")

require("dotenv").config()

const URI = process.env.DB_URI || 'mongodb://localhost:27017/planner'
module.exports = () =>{
    console.log("connecting to database")
    return mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
}