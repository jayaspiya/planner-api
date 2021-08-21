const router = require("express").Router()
const auth = require("../utils/auth.js")
const controller = require("./controller.js")

router.get("/", auth, controller.get_todos)
router.post("/", auth, controller.add_new_todo)

module.exports = router