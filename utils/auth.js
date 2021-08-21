const jwt = require("jsonwebtoken")
const User = require("../users/model.js")
const KEY = process.env.TOKEN_KEY

module.exports = async (req,res,next)=>{
    const authHeader = req.headers.authorization
    const accessToken = authHeader && authHeader.split(" ")[1]
    if(accessToken == null) return res.json({success: false, message: "Unauthorized User"})
    const authUser = jwt.verify(accessToken, KEY)
    const user = await User.findOne({_id: authUser._id}).select("-password -plans")
    if(user){
        req.user = user
        next()
    }
    else{
        res.json({success: false, message: "Unauthorized User"})
    }
}