const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const key = process.env.TOKEN_KEY
const User = require("./model.js")

exports.register_new_user = async function(req,res){
    const user = await User.findOne({email: req.body.email})
    if(user){
        res.json({
            message: "User Already Exist",
            success: false
        })
    }
    else{
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            email: req.body.email,
            password: hashed,
            name:{
                first: req.body.firstname,
                last: req.body.lastname
            },
            address: req.body.address,
            gender: req.body.gender
        })
        await newUser.save()
        res.json({
            message: "User Registered",
            success: true
        })
    }
    res.end()
}