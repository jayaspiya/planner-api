const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const key = process.env.TOKEN_KEY
const User = require("./model.js")

exports.register_new_user = async function(req,res){
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        name:{
            first: req.body.firstname,
            last: req.body.lastname
        },
        address: req.body.address,
        gender: req.body.gender
    })
    await user.save()
    res.end()
}