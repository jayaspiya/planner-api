const express = require("express")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 8080
app.use(express.json())

app.get("/", (req,res)=>{
    res.json({
        message: "Welcome to Planner API",
        success: true
    })
    res.end()
})

app.listen(port, ()=>{
    console.log(`Listening at port http://localhost:${port}`)
})