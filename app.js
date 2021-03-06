const express = require("express")
require("dotenv").config()
const cors = require("cors")
const connection = require("./utils/connection.js")
const logger = require("./utils/logger.js")
const userRoutes = require("./users/routes.js")
const todoRoutes = require("./todos/routes.js")

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
if(process.env.DEBUG){
    app.use(logger)
}

// Test Route
app.get("/", (req,res)=>{
    res.json({
        message: "Welcome to Planner API",
        success: true
    })
    res.end()
})

// Route
app.use("/user", userRoutes)
app.use("/todo", todoRoutes)

connection().then(()=>{
    app.listen(port,()=>{
        console.log(`Listening at port http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})