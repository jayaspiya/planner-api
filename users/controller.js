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

exports.login_user = async function(req,res){
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user){
        const validLogin = await bcrypt.compare(password, user.password)
        if(validLogin){
            const accessToken = jwt.sign({_id: user._id}, key)
            res.json({
                accessToken,
                success: true, 
                message:"Login Successful"
            })
        }
        else{
            res.json({
                success: false,
                message: "Invalid Credential"
            }) 
        }
    }
    else{
        res.json({
            message: "Invalid Credential",
            success: false
        })
    }
    res.end()
}

exports.get_profile = async function(req,res){
    res.json({
        message: "User Profile",
        success: true,
        data: req.user
    })
    res.end()
}

exports.add_new_task = async function(req,res){
    res.json({
        message: "New Task Added",
        success: true
    })
    res.end()
}