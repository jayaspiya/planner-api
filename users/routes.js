const router = require("express").Router()
const controller = require("./controller.js")

router.get("/", (req,res)=>{
    res.send("working")
    res.end()
})

module.exports = router