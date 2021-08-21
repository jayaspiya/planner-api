const router = require("express").Router()
const controller = require("./controller.js")

router.get("/", (req,res)=>{
    res.send("This is User route")
    res.end()
})

router.post("/register", controller.register_new_user)

module.exports = router